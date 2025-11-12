// --------------------------
// Firebase init
// --------------------------
const firebaseConfig = {
  apiKey: "AIzaSyCnXJ7ViYIjukZjCQc2ZVM6TWRVik3YFsw",
  authDomain: "destpl-13f92.firebaseapp.com",
  databaseURL: "https://destpl-13f92-default-rtdb.firebaseio.com/",
  projectId: "destpl-13f92",
  appId: "1:550261346575:web:51a155990b214563f92e7a"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// --------------------------
// Generate unique 7-digit user ID
// --------------------------
async function generateUniqueUserId() {
  const usersRef = db.ref('users');
  const snapshot = await usersRef.once('value');
  const existingIds = snapshot.exists() ? Object.keys(snapshot.val()) : [];

  let newId;
  do {
    const num = Math.floor(1 + Math.random() * 9999999); // 1–9999999
    newId = num.toString().padStart(7, '0');           // always 7 digits
  } while (existingIds.includes(newId));

  return newId;
}

// --------------------------
// Initialize user
// --------------------------
async function initUser() {
  let userId = localStorage.getItem('userId');

  if (!userId) {
    userId = await generateUniqueUserId();
    localStorage.setItem('userId', userId);
  }

  console.log("Your ID:", userId);

  const userRef = db.ref('users/' + userId);
  const connectedRef = db.ref('.info/connected');

  connectedRef.on('value', snap => {
    if (snap.val() === true) {
      userRef.onDisconnect().remove();
      userRef.set({ online: true, lastSeen: Date.now() });
    }
  });

  // Update lastSeen every 30 seconds
  setInterval(() => userRef.update({ lastSeen: Date.now() }), 30000);

  // Remove inactive users
  db.ref('users').once('value').then(snapshot => {
    const now = Date.now();
    snapshot.forEach(userSnap => {
      const data = userSnap.val();
      if (!data.lastSeen || now - data.lastSeen > 2 * 60 * 1000) {
        userSnap.ref.remove();
      }
    });
    console.log("Cleaned up inactive users");
  });

  // --------------------------
  // Populate online users dropdown
  // --------------------------
  const targetSelect = document.getElementById('targetUser');
  if (targetSelect) {
    const usersRef = db.ref('users/');
    usersRef.on('value', snapshot => {
      const users = snapshot.val() || {};
      targetSelect.innerHTML = `<option value="">Select a user</option>`;
      for (const id in users) {
        if (id !== userId) {
          targetSelect.innerHTML += `<option value="${id}">${id}</option>`;
        }
      }
    });
  }

  // --------------------------
  // Announcement overlay logic
  // --------------------------
  const overlay = document.getElementById('announcementOverlay');
  const titleEl = document.getElementById('annTitle');
  const msgEl = document.getElementById('annMessage');

  document.getElementById('closeOverlay').addEventListener('click', () => {
    overlay.classList.remove('show');
  });

  const currentRef = db.ref('announcements/current');
  currentRef.on('value', snapshot => {
    const data = snapshot.val();
    if (!data) return;

    titleEl.textContent = data.title || 'Announcement';
    msgEl.textContent = data.message || '';
    overlay.classList.add('show');

    if (data.durationSeconds && Number.isFinite(data.durationSeconds)) {
      setTimeout(() => overlay.classList.remove('show'), data.durationSeconds * 1000);
    }
  }, error => {
    console.error("Firebase read failed:", error);
  });

  const userAnnouncementsRef = db.ref(`announcements/users/${userId}`);
  userAnnouncementsRef.on('child_added', snapshot => {
    const data = snapshot.val();
    if (!data) return;

    titleEl.textContent = data.title || 'Announcement';
    msgEl.textContent = data.message || '';
    overlay.classList.add('show');

    if (data.durationSeconds && Number.isFinite(data.durationSeconds)) {
      setTimeout(() => overlay.classList.remove('show'), data.durationSeconds * 1000);
    }

    snapshot.ref.remove().catch(console.error);
  });

  // --------------------------
  // Save localStorage to Firebase
  // --------------------------
  function saveLocalStorageToFirebase() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!/[.#$/\[\]]/.test(key)) {
        data[key] = localStorage.getItem(key);
      }
    }
    return db.ref(`userData/${userId}`).set(data);
  }

  // Save every 30 seconds
  setInterval(saveLocalStorageToFirebase, 30000);

  // Save immediately on load
  saveLocalStorageToFirebase().catch(console.error);

  // --------------------------
  // Updatedata + force refresh
  // --------------------------
  db.ref(`userCommands/${userId}/reload`).on('value', snapshot => {
    const cmd = snapshot.val();
    if (!cmd) return;

    db.ref(`userData/${userId}`).once('value').then(snap => {
      const data = snap.val() || {};
      for (let key in data) localStorage.setItem(key, data[key]);

      db.ref(`userCommands/${userId}/reload`).remove();

      location.reload();
    });
  });
}
// Track current page URL
function updateCurrentPage() {
  const userId = localStorage.getItem('userId') || 'unknown';
  const userRef = firebase.database().ref('users/' + userId);
  const currentPage = window.location.pathname;
  userRef.update({
    currentPage,
    lastSeen: Date.now(),
    online: true
  });
}

// Run once on load
updateCurrentPage();

// Update whenever user navigates (or URL changes)
window.addEventListener('popstate', updateCurrentPage);
window.addEventListener('hashchange', updateCurrentPage);

// Periodically refresh (in case they stay idle)
setInterval(updateCurrentPage, 15000); // every 15 seconds

// troll things
const userId = localStorage.getItem('userId');
const trollRef = db.ref(`userCommands/${userId}/troll`);

// add smooth transition once
document.body.style.transition = "transform 0.5s ease";

trollRef.on('child_added', snap => {
  const cmd = snap.val();
  if (!cmd || !cmd.command) return;

  const duration = cmd.durationSeconds || 5000; // default 5 seconds

  switch(cmd.command) {
    case 'wobbleText':
      const rotateEls = Array.from(document.body.children).filter(
        el => !el.classList.contains('animation-area')
      );
      rotateEls.forEach(el => {
        if (!el.dataset.origTransform) el.dataset.origTransform = el.style.transform || '';
        const angle = Math.floor(Math.random() * 30 - 15);
        el.style.transform = `rotate(${angle}deg)`;
      });

      // undo after duration
      setTimeout(() => {
        rotateEls.forEach(el => {
          el.style.transform = el.dataset.origTransform || '';
          delete el.dataset.origTransform;
        });
      }, duration);
      break;
    case 'flipScreen':
    // check if currently flipped
    const isFlipped = document.body.dataset.flipped === "true";

    // select all body children except the background
    const flipElements = Array.from(document.body.children).filter(
      el => !el.classList.contains('animation-area')
    );

    if (isFlipped) {
      flipElements.forEach(el => el.style.transform = 'rotate(0deg)');
      document.body.dataset.flipped = "false";
    } else {
      flipElements.forEach(el => el.style.transform = 'rotate(180deg)');
      document.body.dataset.flipped = "true";
    }

    break;

    case 'invertColors':
    // check if currently inverted
    const isInverted = document.body.dataset.inverted === "true";

    // select all body children except the background
    const invertElements = Array.from(document.body.children).filter(
      el => !el.classList.contains('animation-area')
    );

    if (isInverted) {
      invertElements.forEach(el => el.style.filter = 'invert(0)');
      document.body.dataset.inverted = "false";
    } else {
      invertElements.forEach(el => el.style.filter = 'invert(1)');
      document.body.dataset.inverted = "true";
    }
    break;

    case 'undoWobble':
      const undoEls = Array.from(document.body.children).filter(el => !el.classList.contains('animation-area'));
      undoEls.forEach(el => {
        el.style.transform = el.dataset.origTransform || '';
        delete el.dataset.origTransform; // optional cleanup
      });
    break;


      }
    });
    

// Run initialization
initUser();
