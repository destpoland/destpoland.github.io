

const itemContainer = document.getElementById('inventory-section');

let items = [
    {
      name: 'Basic Rod',
      amount: 1,
      actions: [
        { label: 'Equip', onClick: equipRod }
      ]
    },
    {
      name: 'Advanced Rod',
      amount: 1,
      actions: [
        { label: 'Equip', onClick: equipRod }
      ]
    },
    {
       name: 'Master Rod',
       amount: 1,
       actions: [
        { label: 'Equip', onClick: equipRod }
       ]
      },
    {
      name: 'Shoe',
      amount: 0,
    },
    {
      name: 'Salmon',
      amount: 0,
    },
    {
    name: 'Trout',
    amount: 0,
    },
    {
    name: 'Bass',
    amount: 0,
    },
    {
    name: 'Swordfish',
    amount: 0,
    },
    {
    name: 'Tuna',
    amount: 0,
    },
  ];

function equipRod(item) {
    if (item.name === 'Basic Rod') {
        selectedRod = fishingRods[0];
        console.log(selectedRod)
    } else if (item.name === 'Advanced Rod') {
        selectedRod = fishingRods[1];
        console.log(selectedRod)
    } else if (item.name === 'Master Rod') {
        selectedRod = fishingRods[2];
        console.log(selectedRod)
    }
    
}


function addItem(item) {
    const name = items.find(i => i.name === item);
    if (name) { 
    name.amount++
    console.log(item.amount)
    console.log(item)
    updateInventory()
    }
    console.log("dg")
}


function updateInventory() {
    itemContainer.innerHTML = '';
  
    items.forEach((inventoryItem) => {
      if (inventoryItem.amount >= 1) {
        const itemDiv = document.createElement('div');
        itemDiv.classList = 'logtext';
        itemDiv.style.position = 'static';
        itemDiv.style.display = 'flex';
        itemDiv.style.width = '99%';
        itemDiv.style.height = 'auto';
        itemDiv.style.background = 'none';
        itemDiv.style.border = 'solid 2px black';
        itemDiv.style.fontSize = '16px';
        itemDiv.style.color = 'white';
        itemDiv.style.textAlign = 'center';
        itemDiv.style.alignItems = 'center';
        itemDiv.style.justifyContent = 'space-between';
        itemDiv.style.marginBottom = '5px';
        
        const infoSpan = document.createElement('span');
        infoSpan.style.marginLeft = '10px';
        infoSpan.innerText = `${inventoryItem.name}: ${inventoryItem.amount}`;
        itemDiv.appendChild(infoSpan);
  
        if (inventoryItem.actions && inventoryItem.actions.length > 0) {
          const actionContainer = document.createElement('div');
          actionContainer.style.display = 'flex';
          actionContainer.style.gap = '10px';
          actionContainer.style.marginRight = '10px';
  
          inventoryItem.actions.forEach(action => {
            const btn = document.createElement('button');
            btn.innerText = action.label;
            btn.style.cursor = 'pointer';
            btn.style.padding = '2px 5px';
            btn.style.background = 'none';
            btn.style.color = 'green';
            btn.addEventListener('click', () => action.onClick(inventoryItem));
            actionContainer.appendChild(btn);
          });
  
          itemDiv.appendChild(actionContainer);
        }
  
        itemContainer.appendChild(itemDiv);

        
      }
        const savedItems = JSON.stringify(items);   
        localStorage.setItem("savedItems", savedItems);    
    });

  }

function addActions() {
    items.forEach(item => {
        switch (item.name) {
            case 'Basic Rod':
            item.actions = [
              { label: 'Equip', onClick: equipRod }
            ];
            break;
            case 'Advanced Rod':
            item.actions = [
              { label: 'Equip', onClick: equipRod }
            ];
            break;
            case 'Master Rod':
            item.actions = [
              { label: 'Equip', onClick: equipRod }
            ];
            break;
        }
    });
}