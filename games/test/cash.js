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

const depositInput = document.getElementById('depositBankMenu');
const confirmDeposit = document.getElementById('confirmBank');

function bankDeposit() {
    depositInput.style.display = 'inline';
    confirmDeposit.style.display = 'inline';

    withdrawInput.style.display = 'none'; 
    confirmWithdraw.style.display = 'none'; 
    
    confirmDeposit.removeEventListener('click', handleDeposit); 
    confirmDeposit.addEventListener('click', handleDeposit);
}

const depositedBankMoney = localStorage.getItem("bankDeposit")
let currentCash = localStorage.getItem("savedCash")

function handleDeposit() {
    currentCash = localStorage.getItem("savedCash")
    const amount = parseFloat(depositInput.value);
    if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid amount.');
        }   else {
        if (depositInput.value <= currentCash) {           
            let depositedBankMoney = parseFloat(localStorage.getItem("bankDeposit"));            
            if (isNaN(depositedBankMoney)) {
                depositedBankMoney = 0;
            }
            const AddingAmount = depositedBankMoney + amount;            
            localStorage.setItem("bankDeposit", AddingAmount);
            var currentBankMoney = localStorage.getItem("bankDeposit")
            if(savedState === "goToBank") {
                textElement.className = 's';
                textElement.classList.add('empty');
                textElement.innerHTML = `You have ${currentBankMoney} in the bank.`
            }
            decreaseCash(amount)
            depositInput.style.display = 'none'; 
            confirmDeposit.style.display = 'none'; 
        }
    }
}

const withdrawInput = document.getElementById('withdrawBankMenu');
const confirmWithdraw = document.getElementById('confirmBankWithdraw');

function bankWithdraw() {
    withdrawInput.style.display = 'inline';
    confirmWithdraw.style.display = 'inline';

    depositInput.style.display = 'none'; 
    confirmDeposit.style.display = 'none'; 
    

    confirmWithdraw.removeEventListener('click', handleWithdraw);
    confirmWithdraw.addEventListener('click', handleWithdraw);
}

function handleWithdraw() {
    var currentBankMoney = localStorage.getItem("bankDeposit")
    const withdrawamount = parseFloat(withdrawInput.value);

    if (isNaN(withdrawamount) || withdrawamount <= 0) {
            alert('Please enter a valid amount.');
        }   else {
        if (currentBankMoney >= withdrawInput.value) {           
            let depositedBankMoney = parseFloat(localStorage.getItem("bankDeposit"));            
            if (isNaN(depositedBankMoney)) {
                depositedBankMoney = 0;
            }
            const AddingAmount = depositedBankMoney - withdrawamount;            
            localStorage.setItem("bankDeposit", AddingAmount);
            var currentBankMoney = localStorage.getItem("bankDeposit")
            if(savedState === "goToBank") {
                textElement.className = 's';
                textElement.classList.add('empty');
                textElement.innerHTML = `You have ${currentBankMoney} in the bank.`
            }
            increaseCash(withdrawamount)
            withdrawInput.style.display = 'none'; 
            confirmWithdraw.style.display = 'none'; 
        }
    }
}