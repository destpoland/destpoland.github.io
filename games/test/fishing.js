const fishingRods = [
    { name: 'Basic Rod', stayStillFactor: 0, progressSpeedFactor: 0.4, blueBoxWidth: 50 },
    { name: 'Advanced Rod', stayStillFactor: 0.05, progressSpeedFactor: 0.3, blueBoxWidth: 70 },
    { name: 'Master Rod', stayStillFactor: 0.1, progressSpeedFactor: 0.2, blueBoxWidth: 100 }
];

var selectedRod = fishingRods[0];


function startFishingMinigame() {
    
    const fishTypes = {
        Common: [
            { name: 'Salmon', baseSpeed: 1.5, standStillChance: 0.5, speedIncreaseRate: 0.1, weight: 1, xp: 2 },
            { name: 'Shoe', baseSpeed: 1.3, standStillChance: 0.6, speedIncreaseRate: 0, weight: 3, xp: 1 }
        ],
        Uncommon: [
            { name: 'Trout', baseSpeed: 1.8, standStillChance: 0.3, speedIncreaseRate: 0.15, weight: 1, xp: 4 },
            { name: 'Bass', baseSpeed: 1.8, standStillChance: 0.3, speedIncreaseRate: 0.12, weight: 1, xp: 4 }
        ],  
        Epic: [
            { name: 'Swordfish', baseSpeed: 2.2, standStillChance: 0.2, speedIncreaseRate: 0.25, weight: 1, xp: 8 }
        ],
        Legendary: [
            { name: 'Tuna', baseSpeed: 2.5, standStillChance: 0.05, speedIncreaseRate: 0.2, weight: 1, xp: 20 }
        ]
    };

    const luckMultiplier = {
        Common: 0.8,     // 80% chance for common
        Uncommon: 0.1,   // 10% chance for uncommon
        Epic: 0.04,      // 4% chance for epic
        Legendary: 0.01  // 1% chance for legendary
    };
    
    // Function to get a random fish based on weighted chances and rod luck
    const getRandomFish = () => {
        // Calculate cumulative probabilities
        const cumulativeProbabilities = {
            Common: luckMultiplier.Common,
            Uncommon: luckMultiplier.Common + luckMultiplier.Uncommon,
            Epic: luckMultiplier.Common + luckMultiplier.Uncommon + luckMultiplier.Epic,
            Legendary: 1  // Total probability must sum to 1
        };
    
        // Get a random value between 0 and 1
        let randomRoll = Math.random();
    
        // Determine the rarity based on the random value
        let rarity;
        if (randomRoll < cumulativeProbabilities.Common) {
            rarity = 'Common';
        } else if (randomRoll < cumulativeProbabilities.Uncommon) {
            rarity = 'Uncommon';
        } else if (randomRoll < cumulativeProbabilities.Epic) {
            rarity = 'Epic';
        } else {
            rarity = 'Legendary';
        }
    
        // Get the fish list based on rarity
        const fishList = fishTypes[rarity];
    
        // Select a random fish from the chosen rarity category
        const totalWeight = fishList.reduce((acc, fish) => acc + fish.weight, 0);
        const randomWeight = Math.random() * totalWeight;
        let cumulativeWeight = 0;
    
        for (let fish of fishList) {
            cumulativeWeight += fish.weight;
            if (randomWeight < cumulativeWeight) {
                return { fish, rarity }; // Return the fish and its rarity
            }
        }
    
        return { fish: fishList[0], rarity }; // Fallback
    };

    // Initialize fish and progress
    const { fish, rarity } = getRandomFish();
    let playerPosition = 0;
    let fishPosition = 150;
    let fishDirection = 1; // Start moving right
    let fishSpeed = fish.baseSpeed;
    let progress = 50; // Start progress at 50%

    // Create mini-game UI
    const mainContainer = document.getElementById('status-games');
    const miniGameContainer = document.createElement('div');
    miniGameContainer.id = 'fishing-minigame';
    miniGameContainer.style.position = 'absolute';
    miniGameContainer.style.width = '300px';
    miniGameContainer.style.height = '50px';
    miniGameContainer.style.border = '2px solid black';
    miniGameContainer.style.background = '#f0f0f0';
    miniGameContainer.style.margin = 'auto';
    miniGameContainer.style.left = '0';
    miniGameContainer.style.right = '0';
    miniGameContainer.style.top = '30%';
    miniGameContainer.style.display = 'flex';
    miniGameContainer.style.alignItems = 'center';
    mainContainer.appendChild(miniGameContainer);

    // Player Bar
    const playerBar = document.createElement('div');
    playerBar.id = 'player-bar';
    playerBar.style.position = 'absolute';
    playerBar.style.width = `${selectedRod.blueBoxWidth}px`; // Adjust width based on rod
    playerBar.style.height = '50px';
    playerBar.style.background = 'blue';
    playerBar.style.left = '0';
    miniGameContainer.appendChild(playerBar);

    // Fish Bar
    const fishBar = document.createElement('div');
    fishBar.id = 'fish-bar';
    fishBar.style.position = 'absolute';
    fishBar.style.width = '30px';
    fishBar.style.height = '50px';
    fishBar.style.background = 'black';
    fishBar.style.left = '50%';
    miniGameContainer.appendChild(fishBar);

    // Progress Bar
    const progressBarContainer = document.createElement('div');
    progressBarContainer.id = 'progress-bar-container';
    progressBarContainer.style.position = 'absolute';
    progressBarContainer.style.width = '300px';
    progressBarContainer.style.height = '20px';
    progressBarContainer.style.border = '2px solid black';
    progressBarContainer.style.background = '#ddd';
    progressBarContainer.style.margin = 'auto';
    progressBarContainer.style.left = '0';
    progressBarContainer.style.right = '0';
    progressBarContainer.style.top = '60%';
    mainContainer.appendChild(progressBarContainer);

    const progressBar = document.createElement('div');
    progressBar.id = 'progress-bar';
    progressBar.style.width = `${progress}%`; // Start at 50%
    progressBar.style.height = '100%';
    progressBar.style.background = 'green';
    progressBarContainer.appendChild(progressBar);


    const mobileButton = document.getElementById('Fishing-Button');

    mobileButton.style.display = 'inline'


    // Mobile Button press and release event listeners
    mobileButton.addEventListener('mousedown', () => {
        isHolding = true; // Start moving the player when button is pressed
    });

    mobileButton.addEventListener('mouseup', () => {
        isHolding = false; // Stop moving the player when button is released
    });

    // Also handle touch events for better mobile support
    mobileButton.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent the default touch behavior
        isHolding = true; // Start moving the player when the button is pressed
    });

    mobileButton.addEventListener('touchend', (e) => {
        e.preventDefault(); // Prevent the default touch behavior
        isHolding = false; // Stop moving the player when button is released
    });

    // Player Movement (Hold space to move right)
    let isHolding = false;
    document.addEventListener('keydown', (e) => {
        if (e.key === ' ') {
            isHolding = true;
        }
    });
    document.addEventListener('keyup', (e) => {
        if (e.key === ' ') {
            isHolding = false;
        }
    });

    // Timer for tracking progress at 0
    let progressAtZeroTime = 0;

    // Variable to check if game has ended
    let gameEnded = false;

    // Random direction change rate (higher = more frequent changes)
    const randomDirectionChangeRate = 0.05; // Adjust for more/less frequent changes

    // Smooth the direction change using easing
    let targetDirection = fishDirection;
    let directionChangeSpeed = 0.1; // Controls how fast the fish changes direction
    let goBackF = document.querySelector('#goBackF');
    let statusElement = document.querySelector('#main-mb .s');

    // Game Loop
    const gameLoop = () => {
        if (gameEnded) return; // Stop the game loop if it has already ended

        const containerWidth = miniGameContainer.offsetWidth;
        let directionCooldown = 0; // Start with no cooldown
        const directionCooldownDuration = 180; // Number of frames to wait before changing direction again
        // Update player position (constrained within the container)
        if (isHolding) {
            playerPosition += 2; // Slow down the player movement speed
        } else {
            playerPosition -= 2; // Slow down the player movement speed
        }

        // Keep the player inside the container (don't move past edges)
        playerPosition = Math.max(0, Math.min(playerPosition, containerWidth - selectedRod.blueBoxWidth));

        playerBar.style.left = `${playerPosition}px`;

        // Smooth direction change
        if (directionCooldown <= 0 && Math.random() < randomDirectionChangeRate) {
            // Choose new direction with smooth transition
            targetDirection = Math.random() < 0.5 ? 1 : -1;

            // Reset the cooldown
            directionCooldown = directionCooldownDuration;
        }

        // Interpolate between current direction and target direction for smooth transition
        fishDirection += (targetDirection - fishDirection);

        // Check if the fish should stand still based on its standStillChance
        if (Math.random() < fish.standStillChance + selectedRod.stayStillFactor) {
            fishDirection = 0; // Stand still
        }

        // Smooth fish movement using sine wave for smooth back and forth motion
        fishPosition += fishDirection * fishSpeed;

        // Ensure the fish stays within the container bounds
        fishPosition = Math.max(0, Math.min(fishPosition, containerWidth - 30)); // Prevent fish from going out of bounds

        if (fishPosition === 0 || fishPosition === containerWidth - 30) {
            fishDirection *= -1; // Reverse direction when reaching the edges
        }

        fishBar.style.left = `${fishPosition}px`;

        // Check for collision and update progress
        if (playerPosition < fishPosition + 30 && playerPosition + selectedRod.blueBoxWidth > fishPosition) {
            progress += 0.3; // Slow down progress increase
        } else {
            progress -= selectedRod.progressSpeedFactor; // Slow down progress decrease
        }

        progressBar.style.width = `${progress}%`;


        if (progress >= 100) {
            gameEnded = true;
            console.log(`You caught a ${fish.name}!`);
            miniGameContainer.style.display = 'none'; 
            progressBarContainer.style.display = 'none';
            statusElement.classList.remove('s1', 's2', 's3', 's4', 's5', 's6');
            statusElement.classList.add('f1');
            history(`You reeled in a ${fish.name}`)
            addItem(`${fish.name}`, 1)
            goBackF.style.display = "inline";
            mobileButton.style.display = 'none'
            increaseSkillXp("FishingSkill", fish.xp)
        } else if (progress <= 0) {
            progressAtZeroTime++;
            if (progressAtZeroTime > 100) {
                gameEnded = true;
                console.log(`Game Over! No ${fish.name} caught.`);
                miniGameContainer.style.display = 'none'; 
                progressBarContainer.style.display = 'none';
                statusElement.classList.remove('s1', 's2', 's3', 's4', 's5', 's6');
                statusElement.classList.add('f2');
                history('Fish got away')
                goBackF.style.display = "inline";
                mobileButton.style.display = 'none'
            }
        }


        requestAnimationFrame(gameLoop);
    };


    gameLoop();
}
