self.addEventListener('fetch', event => {
  const req = event.request;

  if (req.destination === 'document') {
    event.respondWith((async () => {
      try {
        const res = await fetch(req);
        const contentType = res.headers.get('content-type') || '';

        if (!contentType.includes('text/html')) return res;

        let html = await res.text();

        // Skip injection for admin page
        if (req.url.includes('/updates') || req.url.endsWith('updates.html')) {
          return new Response(html, { headers: res.headers });
        }

        // Avoid double-injection
        if (!html.includes('id="announcementOverlay"')) {
          const origin = self.location.origin;

          // Inject overlay just before </body>
          const overlayHTML = `
          <style>#announcementOverlay {
            position: fixed; inset: 0; display: none;
            align-items: center; justify-content: center;
            background: rgba(0,0,0,0.75);
            color: white; z-index: 99999;
            padding: 20px; box-sizing: border-box;
          }
          #announcementOverlay.show { display:flex; }
          #announcementBox {
            max-width: 900px; width: 90%;
            background: rgba(0,0,0,0.6); padding: 24px;
            border-radius: 8px; text-align: center;
            box-shadow: 0 6px 30px rgba(0,0,0,0.6);
          }
          #announcementBox h2 { margin: 0 0 8px 0; font-size: 1.6rem; }
          #announcementBox p { margin: 0 0 12px 0; white-space: pre-wrap; }
          #announcementBox button { padding: 6px 12px; border-radius: 6px; border:none; cursor:pointer; background:#2b6ef6; color:#fff; }</style>
          <div id="announcementOverlay">
          <div id="announcementBox">
            <h2 id="annTitle">Announcement</h2>
            <p id="annMessage">...</p>
            <button id="closeOverlay">Close</button>
          </div>
        </div>
<script src="https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.1/firebase-database-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.1/firebase-auth-compat.js"></script>
<script src="${origin}/base.js"></script>
`;

          html = html.replace('</body>', overlayHTML + '</body>');
        }

        return new Response(html, { headers: res.headers });
      } catch (err) {
        console.error('Service worker injection error:', err);
        return fetch(req);
      }
    })());
  }
});
