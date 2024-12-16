const buttonElements = document.querySelectorAll('#main-res button');
const textElement = document.querySelector('#main-mb .s');
const ActionsTabElement = document.querySelector('#ActionsTab');
const SkillsTabElement = document.querySelector('#SkillsTab');
const AssemblyTabElement = document.querySelector('#AssemblyTab');
const fullactionstab = document.querySelector('#main-bt');

var isActionTabOpen = 0

const tabs = {
    Actions: ActionsTabElement,
    Skills: SkillsTabElement,
    Assembly: AssemblyTabElement,
};

let currentTab = null;

let actions = [
    {
    name: 'Scavenge',
    unlocked: true,
    },
    {
    name: 'Fishing',
    unlocked: false,
    },
    {
    name: 'Begging',
    unlocked: false,
    }
];

let skills = [
    {
    name: "FishingSkill",
    unlocked: false,
    level: 2,
    xp: 0,
    maxXp: 100,    
    },
    {
    name: 'BeggingSkill',
    unlocked: false,
    level: 0,
    xp: 0,
    maxXp: 100,    
    },
]



function fixErrorsForActions() {
    textElement.className = 's';
    textElement.innerHTML = '';
    buttonElements.forEach(button => (button.style.display = "none"));
    //Hide Withdraw/Deposit
    withdrawInput.style.display = 'none'; 
    confirmWithdraw.style.display = 'none'; 
    depositInput.style.display = 'none';
    confirmDeposit.style.display = 'none';
    //hide merchant items
    const buyableItemsButtons = mainres.querySelectorAll('.buyableItem');
    buyableItemsButtons.forEach(button => {
        button.remove(); 
    });
    const sellableItemsButtons = mainres.querySelectorAll('.sellableitem');
    sellableItemsButtons.forEach(button => {
        button.remove(); 
    });
}

function switchTab(newTab) {
    // Hide all tabs
    Object.values(tabs).forEach(tab => {
        tab.style.display = 'none';
    });

    // Reset common UI elements
    fixErrorsForActions();
    textElement.className = 's'; // Reset class
    textElement.innerHTML = ''; // Reset content

    if (currentTab !== newTab) {
        // Show the selected tab
        const tabElement = tabs[newTab];
        if (tabElement) {
            tabElement.style.display = 'inline';
            textElement.classList.add(`${newTab}Tab`);
            currentTab = newTab;

            // Tab-specific updates
            if (newTab === "Actions") updateActions();
            if (newTab === "Skills") updateSkills();
        }
    } else {
        changeState(savedState)
        currentTab = null;
    }
}

// Tab functions
function openAssembly() {
    switchTab("Assembly");
}

function openSkills() {
    switchTab("Skills");
}

function openActions() {
    switchTab("Actions");
}



function saveSkills() {
    console.log("Saving skills:", skills);
    localStorage.setItem("savedSkills", JSON.stringify(skills));
}

function increaseSkillLevel(skill, progress) {
    const matchedSkill = skills.find(s => s.name === skill);
    matchedSkill.unlocked = true
    matchedSkill.level += progress
    
    saveSkills()
    updateSkills()  
}

function increaseSkillXp(skill, progress) {
    const matchedSkill = skills.find(s => s.name === skill);
    matchedSkill.unlocked = true
    matchedSkill.xp += parseFloat(progress); 
    
    saveSkills()
    updateSkills()  
    
}

function updateSkillXP(skill) {
    const xpFill = document.querySelector(`#${skill} #skill-barOverlay`);
    const matchedSkill = skills.find(s => s.name === skill);

    if (xpFill && matchedSkill) {
        const progressPercentage = (matchedSkill.xp / matchedSkill.maxXp) * 100;
        xpFill.style.width = `${progressPercentage}%`;
    }
}



function updateSkills() {
    skills.forEach(skill => {
        const skillElements = document.querySelectorAll(`#${skill.name}`);
        skillElements.forEach(element => {
            if (skill.unlocked) {
                element.style.display = 'flex';

                // Update text
            
                const elementXP = element.querySelector('#FishingXp');
                const elementSkillLevel = element.querySelector('#skillLevel');
                if (elementXP) {
                    elementXP.textContent = `XP: ${skill.xp}/${skill.maxXp}`;
                    elementSkillLevel.textContent = `${skill.level}`
                }

                updateSkillXP(skill.name);
            } else {
                element.style.display = 'none';
            }
            
        });
    });
}

function updateActions() {
    const savedEquippedItem = JSON.parse(localStorage.getItem("savedEquippedItem"));
    const savedState = localStorage.getItem("savedState");
    
    actions.forEach(action => {
        const LoadActions = document.querySelectorAll(`#${action.name}`);
        if (action.unlocked) {
            LoadActions.forEach(element => {
                if (
                    (action.name === "Scavenge" && (savedState === 'home' || savedState === 'District3')) ||
                    (action.name === "Fishing" && savedState === 'pond') ||
                    (action.name === "Begging" && savedState === 'home')
                ) {
                    element.style.display = 'inline';
    
                    if (action.name === "Fishing" && savedEquippedItem) {
                        const LoadActionsText = document.querySelector(`#Fishing`);
                        if (LoadActionsText) {
                            LoadActionsText.innerHTML = `Cast ${savedEquippedItem.name}`;
                        }
                    }
                }
            });
        } else {
            LoadActions.forEach(element => {
                element.style.display = 'none';
            });
        }
    });
}
