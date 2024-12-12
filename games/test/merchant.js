const mainres = document.getElementById('main-res');


function merchantBuy() {
    const buyableItemsButtons = mainres.querySelectorAll('.buyableItem');
    buyableItemsButtons.forEach(button => {
        button.remove(); // Corrected line to remove each button
    });

    items.forEach((buyableItems) => {
        if (buyableItems.buyable === true && buyableItems.singlePurchaseBought === false) { 
            if (buyableItems.name.indexOf('Rod') >= 0) {
                if (buyableItems.unlocked === 1) {
                    const buyableItem = document.createElement('button');
                    buyableItem.classList = 'buyableItem';
                    buyableItem.innerHTML = `${buyableItems.name}: ${buyableItems.price}`;

                    const buyItem = () => {
                        const currentCash = localStorage.getItem("savedCash")
                        if (buyableItems.price <= currentCash) {
                        addItem(buyableItems.name, 1);
                        increaseCash(-buyableItems.price);
                        history(`You bought 1 ${buyableItems.name} for ${buyableItems.price}`);
                        items.forEach(() => { 
                            if (buyableItem.innerHTML.includes("Basic Rod")) {
                                items[0].singlePurchaseBought = true;
                                items[1].unlocked = 1;
                            }
                            if (buyableItem.innerHTML.includes("Advanced Rod")) {
                                items[1].singlePurchaseBought = true;
                                items[2].unlocked = 1;
                            }
                        merchantBuy()
                        }); 
}
                    };

                    mainres.prepend(buyableItem);
                    buyableItem.addEventListener('click', buyItem);
                    updateInventory(); 
                }
            } else if (buyableItems.name.indexOf('Rod') <= 0) {
                const buyableItem = document.createElement('button');
                buyableItem.classList = 'buyableItem';
                buyableItem.innerHTML = `${buyableItems.name}: ${buyableItems.price}`;

                const buyItem = () => {
                    const currentCash = localStorage.getItem("savedCash")
                    if (buyableItems.price <= currentCash) {
                    addItem(buyableItems.name, 1);
                    increaseCash(-buyableItems.price);
                    history(`You bought 1 ${buyableItems.name} for ${buyableItems.price}`);
                    merchantBuy()
                    }
                };

                mainres.prepend(buyableItem);
                buyableItem.addEventListener('click', buyItem);
                updateInventory(); 
            }
            
        }
        
    });
}

 

function merchantSell() {
    const sellableItemsButtons = mainres.querySelectorAll('.sellableitem');
    sellableItemsButtons.forEach(button => {
        button.remove(); 
    });
    items.forEach((sellableItems) => {
        if (sellableItems.amount >= 1 && sellableItems.sellable) {
                const sellableItem = document.createElement('button');
                sellableItem.classList = 'sellableitem';
                sellableItem.innerHTML = `${sellableItems.name}: ${sellableItems.price}`
                const sellItem = () => {
                    addItem(sellableItems.name, -1);
                    increaseCash(sellableItems.price)
                    history(`You sold 1 ${sellableItems.name} for ${sellableItems.price}`)
                    merchantSell()
                };
                mainres.prepend(sellableItem);
                sellableItem.addEventListener('click', sellItem);
                updateInventory()
        }
    }
)};