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
