// Version + cache management (root scope)
// Root cause of earlier issue: registering /PWA/sw.js limited scope to /PWA only.
// This root /sw.js controls ALL site requests, so version logic will now run.
console.log('[SW] script start');

const VERSION_FILE = '/version.txt';
const CACHE_PREFIX = 'spw-v';
// List of assets to precache per version. Keep only site/runtime required files (exclude large dev docs like README). 
// NOTE: version.txt intentionally not cached with assets; it's fetched with no-cache to detect updates.
const ASSETS = [
  // Root shell
  '/', // navigation fallback (will map to index.html when matched manually)
  '/index.html',
  '/style.css',
  '/manifest.json',
  '/icon.png',
  '/sitemap.xml',

  // Build (Unity)
  '/Build/SlopePlusWeb.asm.code.unityweb',
  '/Build/SlopePlusWeb.asm.framework.unityweb',
  '/Build/SlopePlusWeb.asm.memory.unityweb',
  '/Build/SlopePlusWeb.data.unityweb',
  '/Build/SlopePlusWeb.json',
  '/Build/SlopePlusWeb.wasm.code.unityweb',
  '/Build/SlopePlusWeb.wasm.framework.unityweb',
  '/Build/UnityLoader.js',

  // Patches / scripts
  '/Patches/mobile.js',
  '/Patches/settings.js',
  '/Patches/freezegame.js',

  // TemplateData assets
  '/TemplateData/style.css',
  '/TemplateData/UnityProgress.js',
  '/TemplateData/favicon.ico',
  '/TemplateData/fullscreen.png',
  '/TemplateData/progressEmpty.Dark.png',
  '/TemplateData/progressFull.Dark.png',
  '/TemplateData/progressLogo.Dark.png',
  '/TemplateData/webgl-logo.png',
  '/TemplateData/download.svg',

  // Home (secondary page + assets + fonts)
  '/home/index.html',
  '/home/style.css',
  '/home/icon.png',
  '/home/keyboard.png',
  '/home/play.png',
  '/home/wallpaper.png',
  '/home/github-icon.png',
  '/home/githubpushes.js',
  '/home/Inter18pt-Medium.woff',
  '/home/Inter18pt-Medium.woff2',
  '/home/Inter18pt-Regular.woff',
  '/home/Inter18pt-Regular.woff2',
  '/home/medium.ttf',
  '/home/regular.ttf',

  // i18n bundles and loader
  '/Patches/i18n.js',
  '/i18n/en.json',
  '/i18n/zh-CN.json',
  '/i18n/ja.json',
  '/i18n/de.json',
  '/i18n/es.json',

  // PWA icons (if used in manifest / shortcuts)
  '/PWA/192.png',
  '/PWA/512.png',
  '/PWA/icon.png'
];

let activeVersion = null;
let versionChecked = false;
let reloadNotified = false;

async function fetchVersion() {
  try {
    const res = await fetch(VERSION_FILE, { cache: 'no-cache' });
    if (!res.ok) throw new Error('Bad status ' + res.status);
  const v = (await res.text()).trim();
  console.log('[SW] fetched version.txt ->', v);
  return v;
  } catch (e) {
    console.warn('[SW] version fetch failed (offline?):', e);
    return null; // unknown -> stay on existing cache
  }
}

async function precache(version) {
  console.log('[SW] precache start version', version);
  const cache = await caches.open(CACHE_PREFIX + version);
  for (const a of ASSETS) {
    try {
      const resp = await fetch(a, { cache: 'reload' }); // force bypass HTTP cache
      if (!resp.ok) throw new Error('status ' + resp.status);
      await cache.put(a, resp.clone());
    } catch (e) {
      console.warn('[SW] precache miss', a, e);
    }
  }
  console.log('[SW] precache complete version', version);
}

async function cleanOld(keep) {
  const names = await caches.keys();
  await Promise.all(names.filter(n => n.startsWith(CACHE_PREFIX) && !n.endsWith(keep)).map(n => caches.delete(n)));
}

async function ensureVersion() {
  if (versionChecked) return;
  versionChecked = true;
  const latest = await fetchVersion();
  if (latest == null) return; // offline
  if (!activeVersion) {
    activeVersion = latest;
    const test = await (await caches.open(CACHE_PREFIX + activeVersion)).match('/index.html');
    if (!test) await precache(activeVersion);
  console.log('[SW] initial activeVersion', activeVersion);
    return;
  }
  if (latest !== activeVersion) {
  console.log('[SW] version change detected', activeVersion, '->', latest);
    await precache(latest); // build new first
    await cleanOld(latest);
    activeVersion = latest;
    notifyClients();
  }
}

function notifyClients() {
  if (reloadNotified) return;
  reloadNotified = true;
  self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clients => {
  clients.forEach(c => c.postMessage({ type: 'VERSION_UPDATE', version: activeVersion }));
  });
}

self.addEventListener('install', evt => {
  console.log('[SW] install event');
  evt.waitUntil((async () => {
    const v = await fetchVersion();
    if (v) {
      activeVersion = v;
      await precache(v);
    }
    self.skipWaiting();
  })());
});

self.addEventListener('activate', evt => {
  console.log('[SW] activate event');
  evt.waitUntil((async () => {
    if (activeVersion) await cleanOld(activeVersion);
    await self.clients.claim();
    console.log('[SW] clients claimed');
  })());
});

self.addEventListener('fetch', evt => {
  if (evt.request.method !== 'GET') return;
  const url = new URL(evt.request.url);

  // Always network for version.txt (ensures it shows in Network panel)
  if (url.pathname === VERSION_FILE) {
    evt.respondWith(fetch(evt.request, { cache: 'no-cache' }).catch(() => new Response(activeVersion || '', { status: 200 })));
    return;
  }

  // Navigation requests (page loads / address bar / SPA fallbacks)
  if (evt.request.mode === 'navigate' || url.pathname === '/' ) {
    evt.respondWith((async () => {
      // Fire version check in background
      ensureVersion();
      const reqPath = url.pathname;
      // Determine candidate HTML files in order
      const candidates = [];
      if (reqPath !== '/' && /\.[a-zA-Z0-9]+$/.test(reqPath) === false) {
        // Path without extension
        if (reqPath.endsWith('/')) {
          candidates.push(reqPath + 'index.html');
        } else {
          candidates.push(reqPath + '/index.html');
        }
      }
      if (reqPath.endsWith('/')) {
        candidates.push(reqPath + 'index.html');
      }
      // Direct path (in case it's already index.html or explicit file)
      candidates.push(reqPath);
      // Finally root index.html as app-shell fallback
      if (!candidates.includes('/index.html')) candidates.push('/index.html');

      // Attempt on-demand fetch & cache of first path-specific index if missing (improves offline after first hit)
      if (activeVersion) {
        const firstHtml = candidates.find(p => p.endsWith('/index.html') && p !== '/index.html');
        if (firstHtml) {
          const cache = await caches.open(CACHE_PREFIX + activeVersion);
            const exists = await cache.match(firstHtml);
            if (!exists) {
              try {
                const netResp = await fetch(firstHtml, { cache: 'no-cache' });
                if (netResp.ok) {
                  await cache.put(firstHtml, netResp.clone());
                  console.log('[SW] cached page shell', firstHtml);
                }
              } catch (e) {
                // ignore (likely offline)
              }
            }
        }
      }

      // Try active version cache first for each candidate (when known)
      if (activeVersion) {
        const cache = await caches.open(CACHE_PREFIX + activeVersion);
        for (const cPath of candidates) {
          const hit = await cache.match(cPath);
          if (hit) return hit;
        }
      } else {
        // If version not yet known, prefer fresh network to avoid stale HTML, then fallback to caches
        try {
          const net = await fetch(evt.request, { cache: 'no-cache' });
          if (net && net.ok) return net;
        } catch(_) { /* offline or blocked */ }
      }
      // Search other version caches
      const names = await caches.keys();
      for (const n of names) {
        if (!n.startsWith(CACHE_PREFIX) || n === CACHE_PREFIX + activeVersion) continue;
        const cache = await caches.open(n);
        for (const cPath of candidates) {
          const hit = await cache.match(cPath);
          if (hit) return hit;
        }
      }
      // As last resort network (online) or offline fallback page
      try {
        return await fetch(evt.request);
      } catch (e) {
        return new Response('<!DOCTYPE html><html><head><meta charset="utf-8"><title>Offline</title><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font-family:Arial,Helvetica,sans-serif;margin:40px;color:#222;text-align:center;}h1{font-size:26px;margin-bottom:10px;}p{opacity:.75;}code{background:#f2f2f2;padding:2px 4px;border-radius:4px;}</style></head><body><h1>Offline</h1><p>The page <code>' + reqPath + '</code> is not cached.</p><p>Try again when you are back online.</p></body></html>', { status: 503, headers: { 'Content-Type': 'text/html' } });
      }
    })());
    return;
  }

  evt.respondWith((async () => {
    // Kick off version check asynchronously (don't block response)
    ensureVersion();

    // Try current active version cache if available
    if (activeVersion) {
      const cache = await caches.open(CACHE_PREFIX + activeVersion);
      const match = await cache.match(evt.request);
      if (match) return match;
    }

    // Fallback network
    try {
      const net = await fetch(evt.request);
      // After network succeeds, if we now have an activeVersion and asset is in list, cache it
      if (net.ok) {
        if (!activeVersion) {
          // If version still unknown, we rely on later ensureVersion run to populate caches.
        } else if (ASSETS.some(a => evt.request.url.endsWith(a))) {
          const cache = await caches.open(CACHE_PREFIX + activeVersion);
          cache.put(evt.request, net.clone());
        }
      }
      return net;
    } catch (e) {
      // Network failed: attempt any cached version (old/new)
      const names = await caches.keys();
      for (const n of names) {
        if (!n.startsWith(CACHE_PREFIX)) continue;
        const cache = await caches.open(n);
        const m = await cache.match(evt.request);
        if (m) return m;
      }
      throw e;
    }
  })());
});

self.addEventListener('message', evt => {
  if (!evt.data) return;
  if (evt.data.type === 'FORCE_CHECK') {
  console.log('[SW] FORCE_CHECK received');
    versionChecked = false;
    ensureVersion();
  } else if (evt.data.type === 'GET_VERSION') {
    evt.source?.postMessage({ type:'VERSION_INFO', version: activeVersion });
  }
});
