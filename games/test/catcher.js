const catcherItems = [
    { name: "Paper Clip", weight: 65, image: "images/paperclip.png" },
    { name: "Flint", weight: 20, image: "images/flint.png" },
    { name: "Yuan", weight: 15, image: "images/yuan.png" },
  ];
  
  const begButton = document.querySelector('#beg');

  const gameContainer = document.getElementById("status-games");
  const bucket = document.getElementById("bucket");
  const catcherGame = document.getElementById("game-container");
  
  let spawnInterval = 1000; // Initial spawn interval
  let fallSpeed = 2;
  let activeItems = [];
  let gameRunning = false; // Set to false initially
  let difficultyTimer;
  let spawningIntervalId;
  const maxItemsAtOnce = 2;// Maximum number of items to drop at once
  const multipleItemChance = 0.1; // 20% chance to spawn multiple items at once
  
  // Function to calculate weighted random selection
  function getRandomCatcherItem() {
    const totalWeight = catcherItems.reduce((sum, item) => sum + item.weight, 0);
    let randomWeight = Math.random() * totalWeight;
  
    for (const item of catcherItems) {
      if (randomWeight < item.weight) {
        return item;
      }
      randomWeight -= item.weight;
    }
  }
  
  // Spawn a new falling item
  function spawnItem() {
    if (!gameRunning) return;
  
    const itemData = getRandomCatcherItem();
    const itemElement = document.createElement("div");
    itemElement.classList.add("CatcherItem");
    itemElement.style.left = `${Math.random() * 380}px`;
  
    // Create an image element for the falling item
    const imgElement = document.createElement("img");
    imgElement.src = itemData.image;
    imgElement.alt = itemData.name;
    imgElement.style.width = "50px";  // Adjust the size as needed
    imgElement.style.height = "50px"; // Adjust the size as needed
  
    // Append the image to the item element
    itemElement.appendChild(imgElement);
    catcherGame.appendChild(itemElement);
  
    // After the image has been added to the DOM, set the hitbox size
    imgElement.onload = function() {
      const imgWidth = imgElement.offsetWidth;
      const imgHeight = imgElement.offsetHeight;
  
      itemElement.style.width = `${imgWidth}px`;
      itemElement.style.height = `${imgHeight}px`;
  
      const item = {
        element: itemElement,
        position: { x: parseFloat(itemElement.style.left), y: 0 },
        name: itemData.name,
        image: itemData.image,
        width: imgWidth,
        height: imgHeight,
      };
  
      activeItems.push(item);
    };
  }
  
  // Delete all items
  function deleteCatcherItems() {
    const items = document.querySelectorAll(".CatcherItem");
    items.forEach((item) => {
      item.remove();
    });
    console.log(`${items.length} CatcherItems deleted.`);
    begButton.style.display = 'inline'
  }
  
  function updateItems() {
    activeItems = activeItems.filter((item) => {
      item.position.y += fallSpeed; // Use the updated fall speed
      item.element.style.top = `${item.position.y}px`;
  
      const bucketRect = bucket.getBoundingClientRect();
      const itemRect = item.element.getBoundingClientRect();
  
      // Check collision
      if (
        itemRect.bottom >= bucketRect.top &&
        itemRect.left < bucketRect.right &&
        itemRect.right > bucketRect.left
      ) {
        console.log(`Caught item: ${item.name}`);
        history(`Someone gave you a ${item.name}`)
        const textElement = document.querySelector('#main-mb .s'); 
        console.log(textElement)
        textElement.className = 's';
        textElement.classList.add('StoppedBegging'); 
        if (`${item.name}` === "Yuan") {
            increaseCash(1)
        } else {
        addItem(`${item.name}`, 1)
        }
        gameRunning = false;
        deleteCatcherItems();
        catcherGame.style.display = "none"; // Hide the game area
        return false;
      }
  
      // Check if item missed
      if (item.position.y > 200) {
        catcherGame.removeChild(item.element);
        return false;
      }
  
      return true;
    });
  
    if (gameRunning) {
      requestAnimationFrame(updateItems);
    }
  }
  
  // Handle bucket movement with the mouse
  gameContainer.addEventListener("mousemove", (e) => {
    const rect = gameContainer.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
  
    // Set bucket position directly to mouseX, clamping within bounds
    const bucketWidth = bucket.offsetWidth;
    const clampedX = Math.max(0, Math.min(mouseX, rect.width - bucketWidth));
    bucket.style.left = `${clampedX}px`;
  });
  
  // Add touch controls
  gameContainer.addEventListener("touchmove", (e) => {
    const rect = gameContainer.getBoundingClientRect();
    
    // Get the touch point's X coordinate
    const touchX = e.touches[0].clientX - rect.left;
  
    // Set bucket position directly to touchX, clamping within bounds
    const bucketWidth = bucket.offsetWidth;
    const clampedX = Math.max(0, Math.min(touchX, rect.width - bucketWidth));
    bucket.style.left = `${clampedX}px`;
  
    // Prevent default to avoid scrolling on touch
    e.preventDefault();
  });
  
  
  function increaseDifficulty() {
    if (!gameRunning) return;
  
    // Decrease spawn interval (to a minimum of 500ms)
    spawnInterval = Math.max(500, spawnInterval - 100);
    console.log(`Increased difficulty. New spawn interval: ${spawnInterval}ms`);
  
    // Increase fall speed (minimum speed of 4px per frame)
    fallSpeed = Math.min(4, fallSpeed + 0.04);
    console.log(`Increased fall speed. New fall speed: ${fallSpeed}px per frame`);
  
    // Clear the previous spawning interval
    clearInterval(spawningIntervalId);
  
    // Restart the spawning interval with the updated spawn interval
    spawningIntervalId = setInterval(() => {
      if (gameRunning) {
        const randomChance = Math.random();
        const itemsToSpawn = randomChance < multipleItemChance 
          ? Math.floor(Math.random() * (maxItemsAtOnce - 1)) + 2 // Randomly spawn 2 or 3 items
          : 1;
  
        // Spawn the items
        for (let i = 0; i < itemsToSpawn; i++) {
          spawnItem();
        }
      }
    }, spawnInterval);
  
    // Schedule the next difficulty increase
    difficultyTimer = setTimeout(increaseDifficulty, 1000); // Increase every 2 seconds
  }
  
  // Start the game and spawning items
  function startBeggingGame() {
    if (gameRunning) return;
    fallSpeed = 2
    gameRunning = true;
    spawnInterval = 1000;
    clearTimeout(difficultyTimer); // Reset the spawn interval to the initial value
    activeItems = []; // Clear the active items
    catcherGame.style.display = "block"; // Show the game area
    console.log("Game state reset.");
    resetGame();
  }
  
  // Reset the game state
  function resetGame() {
    console.log("Game is starting...");
    clearInterval(spawningIntervalId); // Ensure previous game intervals are cleared
  
    spawningIntervalId = setInterval(() => {
      if (gameRunning) {
        const randomChance = Math.random();
        const itemsToSpawn = randomChance < multipleItemChance ? Math.floor(Math.random() * maxItemsAtOnce) + 1 : 1;
  
        // Spawn multiple items based on the chance
        for (let i = 0; i < itemsToSpawn; i++) {
          spawnItem();
        }
      }
    }, spawnInterval);
  
    increaseDifficulty(); // Increase difficulty as the game progresses
    updateItems(); // Start updating items' positions
  }
  
  // Stop the game and reset it after catching an item
  function endGame() {
    gameRunning = false;
    clearInterval(spawningIntervalId); // Stop spawning items
    clearInterval(difficultyTimer); // Stop the difficulty increase
    console.log("Game Over! You caught an item.");
    // Reset game state after a short delay
    setTimeout(() => {
      deleteCatcherItems(); // Delete all items
      startBeggingGame();
    }, 2000); // Restart after 2 seconds

  }
  
  // Start the game on load
  