const GarbagegameContainer = document.getElementById('garbage-game-container');
const redBar = document.getElementById('redBar');
const statusGames = document.getElementById('status-games');

// Configurable variables
const config = {
    garbageCount: 3,
    spawnInterval: 2000, 
    garbageTypes: [
        { name: "Yuan", rarity: 3, image: "images/yuan.png" },
        { name: "Junk", rarity: 500, image: "images/junk.png" },
        { name: "Paper", rarity: 20, image: "images/paper.png" },
        { name: "Scraps", rarity: 30, image: "images/scraps.png" },
        { name: "Rotten food", rarity: 5, image: "images/rotten-food.png" },
        { name: "Broken Glass", rarity: 8, image: "images/glass-shard.png" },
        { name: "Tin Can", rarity: 1, image: "images/tincan.png" },
        
    ],
};

let garbageItems = [];
let dragItem = null;
let spawnIntervalId = null;

// Utility: Get random garbage based on rarity
function getRandomGarbage() {
    const weightedItems = config.garbageTypes.flatMap(item =>
        Array(item.rarity).fill(item)
    );
    return weightedItems[Math.floor(Math.random() * weightedItems.length)];
}

// Spawn garbage
function spawnGarbage() {
    for (let i = 0; i < config.garbageCount; i++) {
        const garbage = getRandomGarbage(); 
        const garbageDiv = document.createElement('div');
        garbageDiv.className = 'garbage';
        garbageDiv.style.backgroundImage = `url(${garbage.image})`;

        // Constrain garbage spawn to #status-games
        garbageDiv.style.left = `${Math.random() * (statusGames.clientWidth - 50)}px`;
        garbageDiv.style.top = `${Math.random() * (statusGames.clientHeight - 150)}px`;

        // Store garbage data
        garbageDiv.dataset.name = garbage.name;
        garbageItems.push(garbageDiv);

        GarbagegameContainer.appendChild(garbageDiv);
    }
}


// Handle dragging (Mouse)
statusGames.addEventListener('mousedown', e => {
    if (e.target.classList.contains('garbage')) {
        dragItem = e.target;
        dragItem.style.cursor = 'grabbing';
    }
});

statusGames.addEventListener('mousemove', e => {
    if (dragItem) {
        const rect = statusGames.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Constrain dragging within #status-games
        dragItem.style.left = `${Math.max(0, Math.min(x - dragItem.offsetWidth / 2, rect.width - dragItem.offsetWidth))}px`;
        dragItem.style.top = `${Math.max(0, Math.min(y - dragItem.offsetHeight / 2, rect.height - dragItem.offsetHeight))}px`;
    }
});

statusGames.addEventListener('mouseup', e => {
    handleDrop(e);
});

// Add touch controls
statusGames.addEventListener('touchstart', e => {
    const touch = e.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);

    if (target && target.classList.contains('garbage')) {
        dragItem = target;
    }
});

statusGames.addEventListener('touchmove', e => {
    if (dragItem) {
        const rect = statusGames.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        // Constrain dragging within #status-games
        dragItem.style.left = `${Math.max(0, Math.min(x - dragItem.offsetWidth / 2, rect.width - dragItem.offsetWidth))}px`;
        dragItem.style.top = `${Math.max(0, Math.min(y - dragItem.offsetHeight / 2, rect.height - dragItem.offsetHeight))}px`;

        // Prevent default to avoid scrolling
        e.preventDefault();
    }
});

statusGames.addEventListener('touchend', e => {
    handleDrop(e);
});

// Function to handle dropping
function handleDrop(e) {
    if (dragItem) {
        const redBarRect = redBar.getBoundingClientRect();
        const dragItemRect = dragItem.getBoundingClientRect();

        // Check if dragged into red bar
        if (
            dragItemRect.left + dragItemRect.width / 2 >= redBarRect.left &&
            dragItemRect.left + dragItemRect.width / 2 <= redBarRect.right &&
            dragItemRect.top + dragItemRect.height / 2 >= redBarRect.top &&
            dragItemRect.top + dragItemRect.height / 2 <= redBarRect.bottom
        ) {
            // Remove garbage
            GarbagegameContainer.removeChild(dragItem);
            
            // Additional logic for items
            if (dragItem.dataset.name !== "Yuan" && dragItem.dataset.name !== "Junk") {
                addItem(dragItem.dataset.name, 1);
                history(`You scavenged ${dragItem.dataset.name}`);
            }
            if (dragItem.dataset.name === "Yuan") {
                increaseCash(1);
                history(`You scavenged 1 ${dragItem.dataset.name}`);
            }    

            garbageItems = garbageItems.filter(item => item !== dragItem);

            // Check if game is over
            if (garbageItems.length === 0) {
                endGame();
            }
        }
        dragItem.style.cursor = 'grab';
        dragItem = null;
    }
}

function startGarbageGame() {
    // Reset game state
    garbageItems.forEach(item => GarbagegameContainer.removeChild(item));
    garbageItems = [];
    GarbagegameContainer.style.display = 'inline'
    ActionsTabElement.style.pointerEvents = 'none';
    fullactionstab.style.pointerEvents = 'none';
    // Spawn all garbage at once
    spawnGarbage();
}

// End game
function endGame() {
    clearInterval(spawnIntervalId);
    spawnIntervalId = null;

    GarbagegameContainer.style.display = 'none'
    ActionsTabElement.style.pointerEvents = 'auto';
    fullactionstab.style.pointerEvents = 'auto';
}
