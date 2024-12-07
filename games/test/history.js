const mainContainer = document.getElementById('log-section');

function history(message) {
        const playerBar = document.createElement('div');
        playerBar.classList = 'logtext';
        playerBar.style.position = 'static';
        playerBar.style.display = 'flex';
        playerBar.style.width = '99%';
        playerBar.style.height = '25px';
        playerBar.style.background = 'none';
        playerBar.style.border = 'solid 2px black';
        playerBar.innerText = message;
        playerBar.style.color = 'white';
        playerBar.style.fontSize = '16px';
        playerBar.style.textAlign = 'center';
        playerBar.style.alignItems = 'center';
        playerBar.style.justifyContent = 'center';
        playerBar.style.overflowY = 'hidden';
        mainContainer.appendChild((playerBar));
        console.log(playerBar)
        mainContainer.scrollTop = mainContainer.scrollHeight;
    } 


