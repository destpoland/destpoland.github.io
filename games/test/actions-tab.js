const buttonElements = document.querySelectorAll('#main-res button');
const textElement = document.querySelector('#main-mb .s');
const ActionsTabElement = document.querySelector('#ActionsTab');
const SkillsTabElement = document.querySelector('#SkillsTab');
const AssemblyTabElement = document.querySelector('#AssemblyTab');
const fullactionstab = document.querySelector('#main-bt');

var isActionTabOpen = 0

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

function openSkills() {
    const savedState = localStorage.getItem("savedState");
    ActionsTabElement.style.display = 'none'
    AssemblyTabElement.style.display = 'none'
    if (isActionTabOpen === 0) {
    buttonElements.forEach(button => (button.style.display = "none"));
    textElement.className = 's';

    textElement.classList.add('SkillsTab');
    SkillsTabElement.style.display = 'inline'
    isActionTabOpen = 1

    } else if (isActionTabOpen === 1) {
    changeState(savedState);
    SkillsTabElement.style.display = 'none'
    isActionTabOpen = 0
    }
}
function openAssembly() {
    const savedState = localStorage.getItem("savedState");
    ActionsTabElement.style.display = 'none'
    SkillsTabElement.style.display = 'none'
    if (isActionTabOpen === 0) {
    buttonElements.forEach(button => (button.style.display = "none"));
    textElement.className = 's';
    

    textElement.classList.add('AssemblyTab');
    AssemblyTabElement.style.display = 'inline'
    isActionTabOpen = 1

    } else if (isActionTabOpen === 1) {
    changeState(savedState);
    AssemblyTabElement.style.display = 'none'
    isActionTabOpen = 0
    }
}



function openActions() {
    const savedState = localStorage.getItem("savedState");
    SkillsTabElement.style.display = 'none'
    AssemblyTabElement.style.display = 'none'
    if (isActionTabOpen === 0) {
    buttonElements.forEach(button => (button.style.display = "none"));
    textElement.className = 's';
    

    textElement.classList.add('ActionsTab');
    ActionsTabElement.style.display = 'inline'
    isActionTabOpen = 1
    updateActions()

    } else if (isActionTabOpen === 1) {
        changeState(savedState);
        ActionsTabElement.style.display = 'none'
        
        isActionTabOpen = 0

        const name = actions.filter(i => i.unlocked === true);
            name.forEach(item => {
                const LoadActions = document.querySelectorAll(`#${item.name}`);
                LoadActions.forEach(action => {
                    action.style.display = 'none';
                });
            });
        } 
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
    