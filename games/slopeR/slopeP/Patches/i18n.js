// Lightweight client i18n for /home/
(function(){
  const SUPPORTED = ['en','zh-CN','ja','de','es'];
  const DEFAULT_LANG = 'en';
  const HREF = new URL(location.href);
  const SCRIPT_SRC = (document.currentScript && document.currentScript.src) || new URL('Patches/i18n.js', location.href).href;
  let lastBundle = null;

  function pickLang() {
    const fromParam = HREF.searchParams.get('lang');
    if (fromParam && SUPPORTED.includes(fromParam)) return fromParam;
    const fromStorage = localStorage.getItem('lang');
    if (fromStorage && SUPPORTED.includes(fromStorage)) return fromStorage;
    const nav = (navigator.languages && navigator.languages[0]) || navigator.language || DEFAULT_LANG;
    const norm = nav && nav.toLowerCase();
    if (!norm) return DEFAULT_LANG;
    // Exact first
    if (SUPPORTED.includes(norm)) return norm;
    // Fallback by base (e.g., zh -> zh-CN)
    const base = norm.split('-')[0];
    if (base === 'zh') return 'zh-CN';
    if (SUPPORTED.includes(base)) return base;
    return DEFAULT_LANG;
  }

  async function loadBundle(lang) {
    // Resolve bundles from this script location so subpath deploys (e.g., GitHub Pages) work.
    const url = new URL(`../i18n/${lang}.json`, SCRIPT_SRC).href;
    try {
      const res = await fetch(url, { cache: 'force-cache' });
      if (!res.ok) throw new Error(res.statusText);
      return await res.json();
    } catch (e) {
      if (lang !== DEFAULT_LANG) return loadBundle(DEFAULT_LANG);
      return {};
    }
  }

  function applyI18n(map) {
    lastBundle = map;
    const nodes = document.querySelectorAll('[data-i18n]');
    nodes.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const text = key.split('.').reduce((acc, k) => (acc && acc[k] != null) ? acc[k] : null, map);
      if (text != null) el.textContent = text;
    });
  }

  async function init() {
    const lang = pickLang();
    // Persist the resolved language so it sticks across pages even if only ?lang was used
    try { localStorage.setItem('lang', lang); } catch(_) {}
    const bundle = await loadBundle(lang);
    applyI18n(bundle);
    document.documentElement.setAttribute('lang', lang === 'zh-CN' ? 'zh-Hans' : lang);
    // Expose reapply for dynamic fragments
    window.applyI18n = function(){ if (lastBundle) applyI18n(lastBundle); };
    window.setLang = async function(newLang){
      if (!SUPPORTED.includes(newLang)) return;
      localStorage.setItem('lang', newLang);
      const b = await loadBundle(newLang);
      applyI18n(b);
      document.documentElement.setAttribute('lang', newLang === 'zh-CN' ? 'zh-Hans' : newLang);
      const url = new URL(location.href);
      url.searchParams.set('lang', newLang);
      history.replaceState(null, '', url);
    };
    // Expose function to get translated text for use in JavaScript
    window.t = function(key) {
      if (!lastBundle) return key;
      const text = key.split('.').reduce((acc, k) => (acc && acc[k] != null) ? acc[k] : null, lastBundle);
      return text != null ? text : key;
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
