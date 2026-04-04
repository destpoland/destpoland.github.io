const gameElement = document.getElementById('gameContainer');

// Keep a persistent, off-screen input to summon Android/iOS soft keyboards
const hiddenInput = document.getElementById('keyboard-input');
if (hiddenInput) {
    hiddenInput.setAttribute('autocomplete','off');
    hiddenInput.setAttribute('autocorrect','off');
    hiddenInput.setAttribute('autocapitalize','none');
    hiddenInput.setAttribute('spellcheck','false');
    hiddenInput.style.position = 'fixed';
    hiddenInput.style.left = '-1000px';
    hiddenInput.style.top = '0';
    hiddenInput.style.width = '1px';
    hiddenInput.style.height = '1px';
    hiddenInput.style.opacity = '0';
    hiddenInput.style.pointerEvents = 'auto'; // allow focusing
}

// Improved simulateKeyPress including key / code / keyCode for better Unity compatibility
function simulateKeyPress(left, pressed) {
    const keyCode = left ? 65 : 68; // A or D
    const key = left ? 'a' : 'd';
    const code = left ? 'KeyA' : 'KeyD';
    const evtType = pressed ? 'keydown' : 'keyup';
    const e = new KeyboardEvent(evtType, {
        key,
        code,
        bubbles: true,
        cancelable: true,
        repeat: false
    });
    // Patch legacy properties keyCode / which expected by some engines
    Object.defineProperty(e, 'keyCode', { get: () => keyCode });
    Object.defineProperty(e, 'which', { get: () => keyCode });
    // Mark as simulated to prevent re-entry loops
    try { Object.defineProperty(e, '_simulated', { value: true }); } catch(_) { e._simulated = true; }
    window.dispatchEvent(e);
}

function isMobileDevice() {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    var isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);
    var isIOSStandalone = window.navigator.standalone === true;
    return isMobileUA || isIOSStandalone;
}

function updateResizeKeyboard() {
    var kbBtn = document.getElementById('keyboard-btn');
    if (kbBtn) {
        if (isMobileDevice()) {
        kbBtn.style.display = 'block';
        } else {
        kbBtn.style.display = 'none';
        }
    }
}

window.addEventListener('DOMContentLoaded', function() {
    updateResizeKeyboard();
});
window.addEventListener('resize', function() {
    updateResizeKeyboard();
});

document.getElementById('keyboard-btn').addEventListener('click', function() {
    if (!hiddenInput) return;
    hiddenInput.value = '';
    // Keep it off-screen but focusable; do NOT remove pointer-events or quickly blur.
    hiddenInput.focus();
});

// Forward key events from the hidden input (some Android keyboards only fire on focused element)
if (hiddenInput) {
    hiddenInput.addEventListener('keydown', (e) => {
        // Let the original bubble; some browsers already bubble. We still ensure keyCode presence.
        // If engine needs additional synthesized event, only synthesize if keyCode is missing or zero.
        if (!e.keyCode || e.keyCode === 229) { // 229 = composition
            if (e.key === 'a' || e.key === 'A') simulateKeyPress(true, true);
            if (e.key === 'd' || e.key === 'D') simulateKeyPress(false, true);
        }
    });
    hiddenInput.addEventListener('keyup', (e) => {
        if (!e.keyCode || e.keyCode === 229) {
            if (e.key === 'a' || e.key === 'A') simulateKeyPress(true, false);
            if (e.key === 'd' || e.key === 'D') simulateKeyPress(false, false);
        }
    });
}

function touchHandler(event) {
    let leftPressed = false;
    let rightPressed = false;
    let bounds = gameElement.getBoundingClientRect();
    
    for (const touch of event.touches) {
        
        let touchX = touch.clientX - bounds.left;
        if (touchX < bounds.width / 2) {
            leftPressed = true;
        } else {
            rightPressed = true;
        }
    }

    if (leftPressed) {
        simulateKeyPress(true, true);
    } else {
        simulateKeyPress(true, false);
    }

    if (rightPressed) {
        simulateKeyPress(false, true);
    } else {
        simulateKeyPress(false, false);
    }

    

}


gameElement.addEventListener('touchmove', (event) => {
    touchHandler(event);  
}, true);

gameElement.addEventListener('touchend', (event) => {
    touchHandler(event);  
}, true);






gameElement.addEventListener('touchstart', (event) => {

        
    
    touchHandler(event);  
    for (const touch of event.changedTouches) {

        
        const simulatedEvent = new MouseEvent('mousedown', {
            bubbles: true,
            cancelable: true,
            view: window,
            clientX: touch.clientX,
            clientY: touch.clientY,
            button: 0
        });

        touch.target.dispatchEvent(simulatedEvent);
        for (const touch of event.changedTouches) {
            const simulatedEvent = new MouseEvent('mouseup', {
                bubbles: true,
                cancelable: true,
                view: window,
                clientX: touch.clientX,
                clientY: touch.clientY,
                button: 0
            });
        
            touch.target.dispatchEvent(simulatedEvent);        
        }
        // Calculate X relative to the container's left edge
        

    }
    
    
    event.preventDefault();
    event.stopImmediatePropagation();


    
}, true);






        


        
        