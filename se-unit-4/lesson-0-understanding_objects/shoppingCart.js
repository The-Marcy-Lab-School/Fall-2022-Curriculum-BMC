/* 
Information:
* items (array of item objects)
    - ['shirt', 'pants', 'tie']
    - [
        {name: "logo tshirt", price: 10.99, taxable: true},
        {name: "hat", price: 5.99, taxable: true},
        {name: "gift card", price: 50, taxable: false},
    ]
* saved for later items (array of item objects)
* discounts (array of discount)
    * coupon (10% off, 5$ off if you spend over $50)
* shopper: string

Behaviors: Functions (methods)
* addItem
* deleteItem
* increaseQuantity
* saveForLater
* seeItemsInCart
* calculateTotal
* addCoupon(couponCode) {
    // validate the code
    // determine how much to take off
    // modify the total
}
*/

// arrays are collections of data that is similar to each other
// objects are collections of related data

/*
const bensCart = {
  shopper: "Ben",
  itemsInCart: [
    { name: "logo tshirt", price: 10.99, taxable: true },
    { name: "hat", price: 5.99, taxable: true },
    { name: "gift card", price: 50, taxable: false },
  ],
};
*/

// To avoid repetition, we can make a factory function

// A factory function can take in parameters and create an object for us
// The objects created by a factory function have the same structure but
// will have different values

function makeCart(name) {
    return {
        shopper: name,
        items: [
            // { name: "logo tshirt", price: 10.99 },
            // { name: "hat", price: 5.99 },
            // { name: "gift card", price: 50 },
        ],
        printCartItems: function() {
            console.log(`${this.shopper}'s cart`);
            console.log(this.items);
        },
        addItem(itemName, price) {
            const newItem = { itemName: itemName, price: price };
            this.items.push(newItem)
        },
        printTotal() {
            let sum = 0;
            this.items.forEach(itemObj => sum += itemObj.price)
            console.log(`${this.shopper}, your total is ${sum}`);
        }
    }
}

// bensCart is an instance of the cart object
const bensCart = makeCart("Ben");
const sjsCart = makeCart("SJ");

bensCart.addItem('logo tshirt', 10.99);
bensCart.addItem('hat', 5.99);
bensCart.addItem('gift card', 50);

sjsCart.addItem('hat', 5.99);
sjsCart.addItem('logo tshirt', 10.99);

bensCart.printCartItems()
bensCart.printTotal()
sjsCart.printCartItems()
sjsCart.printTotal()


// What is a method?
// A function that is a property of an object


