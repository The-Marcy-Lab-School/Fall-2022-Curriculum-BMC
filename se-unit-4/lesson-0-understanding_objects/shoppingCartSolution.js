function makeCart(shopper) {
    return {
        shopper,
        items: [],
        addItem(itemName, price) {
            this.items.push({itemName, price});
            return `${itemName} added to the cart`
        },
        removeItem(itemName) {
            const indexToRemove = this.items.findIndex(element => element.itemName === itemName);
            if (indexToRemove >= 0) {
                const before = this.items.slice(0, indexToRemove);
                const after = this.items.slice(indexToRemove + 1);
                this.items = [...before, ...after];
            }
        },
        getTotal() {
            return this.items.reduce((total, item) => total + item.price, 0)
        },
        getItemList() {
            return this.items.map(element => element.itemName)
        },
        removeMostExpensiveItem() {
            this.items.sort((a, b) => a.price < b.price ? -1 : 1)
            this.items.pop();
        }
    }
}

const cart = makeCart("ben");
console.log(cart);
cart.addItem("apple", 1);
cart.addItem("banana", 0.5);
cart.addItem("cherries", 2.5);
cart.addItem("dates", 3);
cart.addItem("eggplant", 1.5);

console.log(cart.items);
console.log(cart.getTotal());

cart.removeItem("dates")
cart.removeMostExpensiveItem()
console.log(cart.items);