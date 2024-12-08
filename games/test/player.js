const str = document.getElementById('player-str');
const def = document.getElementById('player-def');
const agl = document.getElementById('player-agl');
const int = document.getElementById('player-int');



let stats = [
    {name: 'Strength', level: 0},
    {name: 'Defense', level: 0},
    {name: 'Agility', level: 0},
    {name: 'Intelligence', level: 0}
]

function increaseStats(stat, statAmount) {
    const SelectedStat = stats.find(i => i.name === stat);
    if (SelectedStat) { 
        SelectedStat.level += statAmount
    }
    updateStats()
    
}

function updateStats() {
    stats.forEach(stat => {
        switch (stat.name) {
            case 'Strength':
                str.innerHTML = ('Strength:' + stat.level)
            break;
            case 'Defense':
                def.innerHTML = ('Defense:' + stat.level)
            break;
            case 'Agility':
                agl.innerHTML = ('Agility:' + stat.level)
            break;
            case 'Intelligence':
                int.innerHTML = ('Intelligence:' + stat.level)
            break;
        }
    });
    const savedStats = JSON.stringify(stats);  
    localStorage.setItem("savedStats", savedStats);   
}

const PlayerHealth = document.getElementById('health-overlay-player');
const healthBar = document.getElementById('player-tb-health');

const PlayerHunger = document.getElementById('hunger-overlay-player');
const hungerBar = document.getElementById('player-tb-hunger');

var HealthAmount = 5
var HealthMax = 5

var HungerAmount = 100
var HungerMax = 100

function updateHealth() {
    PlayerHealth.innerHTML = ('health: ' + (HealthAmount) + '/' + (HealthMax));
    healthBar.style.width = `${(HealthAmount / HealthMax) * 100}%`;
    const savedMaxHealth = HealthMax;  
    const savedCurrentHealth = HealthAmount;  
    localStorage.setItem("savedMaxHealth", savedMaxHealth);   
    localStorage.setItem("savedCurrentHealth", savedCurrentHealth);   
}

function changeHealth(stat, amount) {
    if (stat === "stat") {
        const changedHealth = (HealthAmount += amount)
        HealthAmount =  parseFloat(changedHealth.toFixed(2));
        console.log(HealthAmount)
        updateHealth() 
    } else if (stat === "max") {
        const changedMaxHealth = (HealthMax += amount)
        HealthMax =  parseFloat(changedMaxHealth.toFixed(2));
        console.log(HealthMax)
        updateHealth() 
    } else {
        console.log("please specify 'stat' or 'max' ")
    }
}


function updateHunger() {
    PlayerHunger.innerHTML = ('health: ' + (HungerAmount) + '/' + (HungerMax));
    hungerBar.style.width = `${(HungerAmount / HungerMax) * 100}%`;
    const savedMaxHunger = HungerMax;  
    const savedCurrentHunger = HungerAmount;  
    localStorage.setItem("savedMaxHunger", savedMaxHunger);   
    localStorage.setItem("savedCurrentHunger", savedCurrentHunger);   
}

function changeHunger(stat, amount) {
    if (stat === "stat") {
        const changedHunger = (HungerAmount += amount)
        HungerAmount =  parseFloat(changedHunger.toFixed(2));
        console.log(HungerAmount)
        updateHunger()
    } else if (stat === "max") {
        const changedMaxHunger = (HungerMax += amount)
        HungerMax =  parseFloat(changedMaxHunger.toFixed(2));
        console.log(HungerMax)
        updateHunger() 
    } else {
        console.log("please specify 'stat' or 'max' ")
    }
}