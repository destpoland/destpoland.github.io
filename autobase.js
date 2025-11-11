// autoload-base.js
(function () {
  const firebaseScripts = [
    "https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js",
    "https://www.gstatic.com/firebasejs/9.22.1/firebase-database-compat.js",
    "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth-compat.js"
  ];

  // Load scripts sequentially to ensure order
  function loadScriptsSequentially(urls, callback) {
    if (!urls.length) {
      callback();
      return;
    }

    const url = urls.shift();
    const script = document.createElement('script');
    script.src = url;
    script.onload = () => loadScriptsSequentially(urls, callback);
    document.head.appendChild(script);
  }

  // After Firebase scripts are loaded, load base.js from site root
  loadScriptsSequentially([...firebaseScripts], () => {
    const base = document.createElement('script');
    base.src = location.origin + '/base.js';
    document.head.appendChild(base);
  });
})();
