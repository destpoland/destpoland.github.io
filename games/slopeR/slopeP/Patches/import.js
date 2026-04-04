/**
 * Import / Export localStorage + IndexedDB (game) data
 * Covers both site settings (localStorage) and Unity WASM save data
 * stored in the /idbfs IndexedDB database (Emscripten FILE_DATA store).
 */

const IDB_DB_NAME    = '/idbfs';
const IDB_STORE_NAME = 'FILE_DATA';

/* ── Serialization ───────────────────────────────────────── */

function _toBase64(data) {
  var u8;
  if (data instanceof ArrayBuffer) {
    u8 = new Uint8Array(data);
  } else if (ArrayBuffer.isView(data)) {
    u8 = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  } else if (Array.isArray(data)) {
    u8 = new Uint8Array(data);
  } else {
    return '';
  }
  // Process in chunks to avoid call-stack overflow on large files
  var CHUNK = 0x8000;
  var parts = [];
  for (var i = 0; i < u8.length; i += CHUNK) {
    parts.push(String.fromCharCode.apply(null, u8.subarray(i, i + CHUNK)));
  }
  return btoa(parts.join(''));
}

function _fromBase64(b64) {
  var raw = atob(b64);
  var u8  = new Uint8Array(raw.length);
  for (var i = 0; i < raw.length; i++) u8[i] = raw.charCodeAt(i);
  return u8;
}

/** Recursively encode a value so it survives JSON.stringify → JSON.parse. */
function _encode(val) {
  if (val instanceof Date)        return { __t: 'Date', v: val.getTime() };
  if (val instanceof ArrayBuffer) return { __t: 'bin',  v: _toBase64(val) };
  if (ArrayBuffer.isView(val))    return { __t: 'bin',  v: _toBase64(val) };
  if (Array.isArray(val))         return val.map(_encode);
  if (typeof val === 'object' && val !== null) {
    var out = {};
    for (var k of Object.keys(val)) out[k] = _encode(val[k]);
    return out;
  }
  return val;
}

/** Reverse of _encode – restores Dates and Uint8Arrays. */
function _decode(val) {
  if (Array.isArray(val)) return val.map(_decode);
  if (val && typeof val === 'object') {
    if (val.__t === 'Date') return new Date(val.v);
    if (val.__t === 'bin')  return _fromBase64(val.v);
    var out = {};
    for (var k of Object.keys(val)) out[k] = _decode(val[k]);
    return out;
  }
  return val;
}

/* ── IndexedDB helpers ───────────────────────────────────── */

/** Return the current version of a named IDB, or null if it doesn't exist. */
async function _idbVersion(name) {
  if (typeof indexedDB.databases === 'function') {
    try {
      var list  = await indexedDB.databases();
      var match = list.find(function (d) { return d.name === name; });
      return match ? match.version : null;
    } catch (e) { /* ignore */ }
  }
  return null;
}

/** Read every record from FILE_DATA via a cursor (most compatible). */
function _readStore(dbName, version) {
  return new Promise(function (resolve) {
    var openArgs = version != null ? [dbName, version] : [dbName];
    var req;
    try { req = indexedDB.open.apply(indexedDB, openArgs); }
    catch (e) { return resolve(null); }

    // If the DB doesn't exist yet, abort – we don't want to create an empty one
    req.onupgradeneeded = function (e) { e.target.transaction.abort(); };
    req.onerror  = function () { resolve(null); };
    req.onsuccess = function () {
      var db = req.result;
      if (!db.objectStoreNames.contains(IDB_STORE_NAME)) {
        db.close();
        return resolve(null);
      }
      var tx    = db.transaction(IDB_STORE_NAME, 'readonly');
      var store = tx.objectStore(IDB_STORE_NAME);
      var rows  = [];
      var cur   = store.openCursor();
      cur.onsuccess = function (e) {
        var c = e.target.result;
        if (c) {
          rows.push({ key: c.key, value: _encode(c.value) });
          c.continue();
        }
      };
      tx.oncomplete = function () { db.close(); resolve(rows); };
      tx.onerror    = function () { db.close(); resolve(null); };
    };
  });
}

/** Write an array of {key, value} records into FILE_DATA. */
function _writeStore(dbName, version, records) {
  return new Promise(function (resolve, reject) {
    var openArgs = version != null ? [dbName, version] : [dbName];
    var req;
    try { req = indexedDB.open.apply(indexedDB, openArgs); }
    catch (e) { return reject(e); }

    req.onupgradeneeded = function () {
      var db = req.result;
      if (!db.objectStoreNames.contains(IDB_STORE_NAME)) {
        db.createObjectStore(IDB_STORE_NAME);
      }
    };
    req.onerror = function () { reject(req.error); };
    req.onsuccess = function () {
      var db = req.result;
      if (!db.objectStoreNames.contains(IDB_STORE_NAME)) {
        db.close();
        return resolve();
      }
      var tx    = db.transaction(IDB_STORE_NAME, 'readwrite');
      var store = tx.objectStore(IDB_STORE_NAME);
      store.clear();
      for (var i = 0; i < records.length; i++) {
        store.put(_decode(records[i].value), records[i].key);
      }
      tx.oncomplete = function () { db.close(); resolve(); };
      tx.onerror    = function () { db.close(); reject(tx.error); };
    };
  });
}

/* ── Download ────────────────────────────────────────────── */

function _downloadJSON(obj, filename) {
  var json = JSON.stringify(obj, null, 2);
  var blob = new Blob([json], { type: 'application/json' });
  var url  = URL.createObjectURL(blob);
  var a    = document.createElement('a');
  a.href     = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(function () { document.body.removeChild(a); URL.revokeObjectURL(url); }, 150);
}

/* ── Public API ──────────────────────────────────────────── */

async function exportData() {
  try {
    // 1. localStorage (keybinds, settings)
    var ls = {};
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      ls[k] = localStorage.getItem(k);
    }

    // 2. IndexedDB – /idbfs  FILE_DATA  (Unity game saves)
    var ver     = await _idbVersion(IDB_DB_NAME);
    var records = await _readStore(IDB_DB_NAME, ver);

    var payload = { localStorage: ls };
    if (records && records.length) {
      payload.indexedDB = { version: ver, records: records };
    }

    console.log('[import.js] export – ls keys:', Object.keys(ls).length,
                '  idb records:', records ? records.length : 0);
    _downloadJSON(payload, 'slopeplus-data.json');
  } catch (err) {
    console.error('[import.js] export failed:', err);
    const message = window.t ? window.t('root.messages.exportFailed') : 'Export failed';
    alert(message + ': ' + err.message);
  }
}

async function importData() {
  var input  = document.createElement('input');
  input.type   = 'file';
  input.accept = '.json,application/json';

  input.addEventListener('change', async function () {
    var file = input.files[0];
    if (!file) return;

    try {
      var text = await file.text();
      var data = JSON.parse(text);

      if (typeof data !== 'object' || data === null || Array.isArray(data)) {
        alert(window.t ? window.t('root.messages.invalidDataFile') : 'Invalid data file.');
        return;
      }

      /* ── localStorage ── */
      var ls = data.localStorage || data;          // back-compat: old flat format
      if (typeof ls === 'object' && !Array.isArray(ls)) {
        localStorage.clear();
        var lsCount = 0;
        for (var key of Object.keys(ls)) {
          if (key === 'indexedDB') continue;        // skip if old-format had this
          localStorage.setItem(key, String(ls[key]));
          lsCount++;
        }
        console.log('[import.js] restored', lsCount, 'localStorage entries');
      }

      /* ── IndexedDB ── */
      if (data.indexedDB && typeof data.indexedDB === 'object' && Array.isArray(data.indexedDB.records)) {
        var idb = data.indexedDB;
        // Prefer the version stored in the export; fall back to current DB version
        var ver = idb.version || (await _idbVersion(IDB_DB_NAME));
        await _writeStore(IDB_DB_NAME, ver, idb.records);
        console.log('[import.js] restored', idb.records.length, 'IndexedDB records (ver ' + ver + ')');
      }

      alert(window.t ? window.t('root.messages.dataImportSuccess') : 'Data imported successfully. The page will now reload.');
      location.reload();
    } catch (err) {
      console.error('[import.js] import failed:', err);
      const message = window.t ? window.t('root.messages.dataImportFailed') : 'Failed to import data';
      alert(message + ': ' + err.message);
    }
  });

  input.click();
}
