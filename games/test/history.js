const mainContainer = document.getElementById('log-section');

// Track the current message and its count
let lastMessage = null;
let lastMessageCount = 0;

function history(message) {
    // Check if the new message matches the last message
    if (message === lastMessage) {
        // Increment the count for the same message
        lastMessageCount++;
        const lastChild = mainContainer.lastElementChild;
        if (lastChild) {
            // Update the count element
            const countSpan = lastChild.querySelector('.stack-count');
            if (countSpan) {
                countSpan.innerText = `x${lastMessageCount}`;
            }
        }
    } else {
        // Reset the count and log a new message
        lastMessage = message;
        lastMessageCount = 1;

        const playerBar = document.createElement('div');
        playerBar.classList = 'logtext';
        playerBar.style.position = 'relative'; // Use relative positioning for the container
        playerBar.style.display = 'flex';
        playerBar.style.alignItems = 'center';
        playerBar.style.justifyContent = 'center'; // Center the main text
        playerBar.style.width = '99%';
        playerBar.style.height = '25px';
        playerBar.style.background = 'none';
        playerBar.style.border = 'solid 2px black';
        playerBar.style.color = 'white';
        playerBar.style.fontSize = '16px';
        playerBar.style.overflowY = 'hidden';

        // Add the main message
        const messageSpan = document.createElement('span');
       
        messageSpan.innerText = message;
        

        // Add the stack count as an absolutely positioned element
        const countSpan = document.createElement('span');
        countSpan.classList.add('stack-count');
        countSpan.style.position = 'absolute';
        countSpan.style.right = '10px'; // Align to the right edge
        countSpan.style.color = 'yellow';
        countSpan.innerText = `x${lastMessageCount}`;
        
        

        // Append both elements
        playerBar.appendChild(messageSpan);
        if (lastMessageCount === 1) {
            countSpan.innerText = ''
        } else {
            countSpan.display = 'inline'
        }
        playerBar.appendChild(countSpan);

        
        mainContainer.appendChild(playerBar);
    }

    console.log(`Message: ${message}, Count: ${lastMessageCount}`);
    mainContainer.scrollTop = mainContainer.scrollHeight;
}
