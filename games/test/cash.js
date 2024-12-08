const cash = document.getElementById('player-tb-cash');
var savedCash = localStorage.getItem("savedCash")
if (localStorage.getItem("savedCash") === null) {
var totalCash = 0
} else {
var totalCash = JSON.parse(savedCash);  
}

function increaseCash(amount) {
    totalCash += amount 
    updateCash()
}
function decreaseCash(amount) {
    totalCash -= amount 
    updateCash()
}

function updateCash() {
    cash.innerHTML = (totalCash + "¥")
    const savedCash = JSON.stringify(totalCash);  
    localStorage.setItem("savedCash", savedCash);  
}