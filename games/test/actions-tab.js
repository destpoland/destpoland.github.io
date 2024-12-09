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
    name: 'Drugs',
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

    const name = actions.filter(i => i.unlocked === true);
    console.log(name)
    name.forEach(item => {
        const LoadActions = document.querySelectorAll(`#${item.name}`);
        LoadActions.forEach(action => {
            if (savedState === 'home' || savedState === 'District3') {
                action.style.display = 'inline';
            }
        });
    });
    




    } else if (isActionTabOpen === 1) {
    changeState(savedState);
    ActionsTabElement.style.display = 'none'
    isActionTabOpen = 0

    const name = actions.filter(i => i.unlocked === true);
    console.log(name)
    name.forEach(item => {
        const LoadActions = document.querySelectorAll(`#${item.name}`);
        LoadActions.forEach(action => {
            action.style.display = 'none';
        });
    });
    }
}