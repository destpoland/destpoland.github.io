let leftKey = localStorage.getItem('leftKey') || 'a';
let rightKey = localStorage.getItem('rightKey') || 'd';
let hideKey = localStorage.getItem('hideKey') || '\\'; 
let keybindMenuKey = localStorage.getItem('keybindMenuKey') || 'ShiftRight';
window.freezeEnabled = localStorage.getItem('freezeEnabled') || "off";
let waitHideKeyPressed = false;

function updateKeyButtons() {
  document.getElementById('leftKeyValueLabel').textContent = window.t ? window.t('root.settings.left') : "Left:";
  document.getElementById('leftKeyBtn').blur();
  document.getElementById('leftKeyValueBox').textContent = `${leftKey.toUpperCase()}`;

  document.getElementById('rightKeyValueLabel').textContent = window.t ? window.t('root.settings.right') : "Right:";
  document.getElementById('rightKeyBtn').blur();
  document.getElementById('rightKeyValueBox').textContent = `${rightKey.toUpperCase()}`;

  document.getElementById('hideKeyValueLabel').textContent = window.t ? window.t('root.settings.hide') : "Hide game:";
  document.getElementById('hideKeyBtn').blur();
  document.getElementById('hideKeyValueBox').textContent = `${hideKey.toUpperCase()}`;

  

  document.getElementById('keybindMenuKeyValueLabel').textContent = window.t ? window.t('root.settings.menuKey') : "Settings:";
  document.getElementById('keybindMenuKeyBtn').blur();
  document.getElementById('keybindMenuKeyValue').textContent = `${keybindMenuKey.toUpperCase()}`;
  const toggleBox = document.getElementById('freezeGameValueBox');
  if (toggleBox) {
    if (window.freezeEnabled === "on") {
      toggleBox.classList.add('active');
    } else {
      toggleBox.classList.remove('active');
    }
  }
  document.getElementById('freezeGameBtn').blur();  
}

function hideGame() {
  waitHideKeyPressed = true;
  const hider = document.querySelector('.hider');
  const isHiding = hider.style.display === 'none';

  if (isHiding) {
      window.freezeUnity();
      hider.style.display = 'block';
      document.title = '';
      document.querySelector('link[rel="icon"]').href = 'data:,';
      document.querySelector('link[rel="shortcut icon"]').href = 'data:,';
  } else {
      window.unfreezeUnity();
      hider.style.display = 'none';
      document.title = 'Slope Plus';
  const favPng = document.getElementById('favicon-png');
  const favIco = document.getElementById('favicon-ico');
  if (favPng) favPng.href = '/icon.png';
  if (favIco) favIco.href = '/TemplateData/favicon.ico';
  }
}


function openKeybindMenu() {
  document.getElementById('keybindMenu').classList.remove('hidden');
  updateActiveLangBtn();
}
function closeKeybindMenu() {
  document.getElementById('closeMenuBtn').blur();
  document.getElementById('keybindMenu').classList.add('hidden');
}

function isMenuOpen() {
  return !document.getElementById('keybindMenu').classList.contains('hidden');
}

let waitingFor = null;
document.getElementById('leftKeyBtn').onclick = function() {
  document.getElementById('leftKeyValueLabel').textContent = window.t ? window.t('root.settings.pressKey') : 'Press key';
  document.getElementById('leftKeyValueBox').textContent = '...';
  waitingFor = 'left';
};

document.getElementById('rightKeyBtn').onclick = function() {
  document.getElementById('rightKeyValueLabel').textContent = window.t ? window.t('root.settings.pressKey') : 'Press key';
  document.getElementById('rightKeyValueBox').textContent = '...';
  waitingFor = 'right';
};

document.getElementById('hideKeyBtn').onclick = function() {
  document.getElementById('hideKeyValueLabel').textContent = window.t ? window.t('root.settings.pressKey') : 'Press key';
  document.getElementById('hideKeyValueBox').textContent = '...';
  waitingFor = 'hide';
};

document.getElementById('keybindMenuKeyBtn').onclick = function() {
  document.getElementById('keybindMenuKeyValueLabel').textContent = window.t ? window.t('root.settings.pressKey') : 'Press key';
  document.getElementById('keybindMenuKeyValue').textContent = '...';
  waitingFor = 'keybind';
};

document.getElementById('freezeGameBtn').onclick = function() {
  const toggleBox = document.getElementById('freezeGameValueBox');
  if (toggleBox) {
      if (toggleBox.classList.contains('active')) {
          toggleBox.classList.remove('active');
          freezeEnabled = "off";
          localStorage.setItem('freezeEnabled', freezeEnabled);

      } else {
          toggleBox.classList.add('active');
          freezeEnabled = "on";
          localStorage.setItem('freezeEnabled', freezeEnabled);
      }
  }
  updateKeyButtons();
};


document.getElementById('exportDataBtn').onclick = function() {
  exportData();
};

document.getElementById('importDataBtn').onclick = function() {
  importData();
};

document.getElementById('closeMenuBtn').onclick = closeKeybindMenu;

// Language switcher in settings menu
const LANG_SUPPORTED = ['en', 'zh-CN', 'ja', 'de', 'es'];

function updateActiveLangBtn() {
  const current = localStorage.getItem('lang') || 'en';
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.lang === current);
  });
}

(function() {
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const lang = btn.dataset.lang;
      if (!LANG_SUPPORTED.includes(lang)) return;
      if (typeof window.setLang === 'function') {
        window.setLang(lang).then(function() {
          updateActiveLangBtn();
          updateKeyButtons();
        });
      } else {
        localStorage.setItem('lang', lang);
        updateActiveLangBtn();
      }
    });
  });

  updateActiveLangBtn();
})();

window.addEventListener('keydown', function(e) {
  if (waitingFor) {
    if (waitingFor === 'left') {
      leftKey = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      localStorage.setItem('leftKey', leftKey);
    } else if (waitingFor === 'right') {
      rightKey = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      localStorage.setItem('rightKey', rightKey);
    } else if (waitingFor === 'hide') {
      hideKey = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      localStorage.setItem('hideKey', hideKey);
    } else if (waitingFor === 'keybind') {
      keybindMenuKey = e.code;

      localStorage.setItem('keybindMenuKey', keybindMenuKey);
    }
    waitingFor = null;
    updateKeyButtons();
    e.preventDefault();
    return;
  }

  // Avoid recursion from simulated events generated by mobile.js
  if (e._simulated) {
    return;
  }

  if (e.code === keybindMenuKey || e.key.toLowerCase() === keybindMenuKey.toLowerCase()) {
    if (isMenuOpen()) {
      closeKeybindMenu();
    } else {
      openKeybindMenu();
    }
  }

  if (e.key.toLowerCase() === leftKey || e.key.toLowerCase() === 'a') {
        simulateKeyPress(true, true);
    }
    // Support both custom key and 'd' for right
    if (e.key.toLowerCase() === rightKey || e.key.toLowerCase() === 'd') {
        simulateKeyPress(false, true);
    }
    if ((e.key.toLowerCase() === hideKey) && !waitHideKeyPressed && !isMenuOpen()) {
        if (this.document.fullscreenElement) {
          this.document.exitFullscreen();
          this.setTimeout(hideGame, 500);
        } else {
          hideGame();
        }

    }
});

updateKeyButtons();

window.addEventListener('storage', function() {
    leftKey = localStorage.getItem('leftKey') || 'a';
    rightKey = localStorage.getItem('rightKey') || 'd';
    hideKey = localStorage.getItem('hideKey') || '`';
    window.freezeEnabled = localStorage.getItem('freezeEnabled') || 'off';
});


window.addEventListener('keyup', function(e) {
    waitHideKeyPressed = false;
  if (e._simulated) return; // prevent recursion
    if (e.key.toLowerCase() === leftKey || e.key.toLowerCase() === 'a') {
        simulateKeyPress(true, false);
    }
    if (e.key.toLowerCase() === rightKey || e.key.toLowerCase() === 'd') {
        simulateKeyPress(false, false);
    }
});