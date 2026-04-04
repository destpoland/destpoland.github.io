

window.addEventListener('load', () => {
    const freezeUnityGame = () => {
        if (typeof gameInstance !== 'undefined' &&
            gameInstance.Module && gameInstance.Module.asm) {
            
            const module = gameInstance.Module;
            const asm = module.asm;

            const original_v = asm.dynCall_v;
            const original_vi = asm.dynCall_vi;

            let isFrozen = false;

            function freeze() {
                module.dynCall_v = () => {};
                module.dynCall_vi = () => {};
                console.log('freeze');
            }

            function unfreeze() {
                module.dynCall_v = original_v;
                module.dynCall_vi = original_vi;
                console.log('unpause');
            }

            window.freezeUnity = freeze;
            window.unfreezeUnity = unfreeze;


            window.addEventListener('blur', () => {
                if (window.freezeEnabled === "on") {
                    freeze();
                }
            })

            window.addEventListener('focus', () => {
                if (window.freezeEnabled === "on") {
                    unfreeze();
                }
            });

            onkeydown = (e) => {
                if (e.key === 'u'&& window.freezeEnabled === "on") {
                    e.preventDefault();
                    window.toggleUnityFreeze();
                }
            };


            isFrozen = false;


        } else {
            console.warn('cant find');
        }
    };

    setTimeout(freezeUnityGame, 3000);
});