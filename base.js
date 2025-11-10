// --------------------------
    // Generate user ID
    // --------------------------
    function generateUserId() {
      return Math.floor(1000000 + Math.random() * 9000000).toString();
    }

    let userId = localStorage.getItem('userId');
    if (!userId) {
      userId = generateUserId();
      localStorage.setItem('userId', userId);
    }

    console.log("Your ID:", userId);

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
    // Mark user online
    // --------------------------
    const userRef = db.ref('users/' + userId);
    const connectedRef = db.ref('.info/connected');

    connectedRef.on('value', (snap) => {
    if (snap.val() === true) {
        userRef.onDisconnect().remove();

        userRef.set({
        online: true,
        lastSeen: Date.now()
        });
    }
    });


    // Remove users who haven't been active in the last 2 minutes
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
    
    // Update lastSeen every 30 seconds
    setInterval(() => {
    userRef.update({ lastSeen: Date.now() });
    }, 30000);

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
    // Announcement overlay logic - always on
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

      // Optionally remove the announcement after showing
      snapshot.ref.remove().catch(console.error);
    });

    //data saving
    // Save localStorage to Firebase under `userData/<userId>`
      function saveLocalStorageToFirebase() {
      const data = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        // skip keys that contain invalid Firebase characters
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

    // updatedata + force refresh
    db.ref(`userCommands/${userId}/reload`).on('value', snapshot => {
    const cmd = snapshot.val();
    if (!cmd) return;

    db.ref(`userData/${userId}`).once('value').then(snap => {
      const data = snap.val() || {};
      for (let key in data) localStorage.setItem(key, data[key]);

      // clear the reload command so it doesn't trigger again
      db.ref(`userCommands/${userId}/reload`).remove();

      // refresh page
      location.reload();
    });
  });