/* 
Designing an Object-Oriented System

1. What are the key objects that exist in this system?
    - What does the object know about itself?
    - What can the object do?
2. How do the objects in your system interact?
3. What inheritance exists (if any)? Are there any "is a" relationships?

Designing Amazon Shopping Experience
- Design at least 2 (ideally 3) classes

class ClassName:
- Properties:
    - prop1: dataType
    - prop2: dataType
- Methods:
    - method1(param): description
    - method2(param): description
    
    
User
- Properties
    - username
    - status
    - orderHistory
    - cart: Cart
- Methods: 
    - login
    - logout
    - getRecommendations
PrimeUser extends User
GuestUser extends User

Cart
- Properties
    - items: array
    - wishlist: array
- Methods:
    - addItem(item, quantity)
    - removeItem(item, quantity)
    - checkout
    
cart.items = [ Item {name: 'banana', price; 0.5}, Item, Item]

Item
- Properties
    - name
    - price
- Methods:

Inventory
- Properties
    - items: object
- Methods
    - getItem(itemName)
    - returnItem(Item)
    
    this.items = {
        banana: [Item, Item, Item, Item],
        battery: [Item, Item, Item],
        macbookCharger: [Item, Item, Item],
        PS5: [Item, Item, Item, Item]
    }

class ClassName {
    constructor(prop) {
        this.prop = prop;
    }
    
    method() {
        console.log(this.prop)
    }
}
*/
class Cart {
    constructor() {
        this.items = [];
    }
    // user will call this method, passing in the itemName
    addToCart(item) {
        this.items.push(item)
    }
}

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.serialCode = Math.random();
    }
    toString() { // method override
        return `${this.name} costs ${this.price}`
    }
}

class Inventory {
    constructor(itemQuantities) {
        
        this.items = {}
        
        for (const itemName in itemQuantities) {
            
            this.items[itemName] = []
            
            const { quantity, price } = itemQuantities[itemName];
            // const itemInfo = itemQuantities[itemName];
            // const quantity = itemInfo.quantity;
            // const price = itemInfo.price
            for (let i = 0; i < quantity; i++) {
                const newItem = new Item(itemName, price);
                this.items[itemName].push(newItem)
            }
        }
    }
    
    
    getItem(itemName) {
        // itemsArray = [Item, Item, Item]
        const itemsArray = this.items[itemName]
        const itemToGet = itemsArray.pop();
        return itemToGet;
    }
    
    returnItem() {
        
    }
}

class User {
    constructor(username, email, address, isPrime) {
        this.username = username;
        this.email = email;
        this.address = address;
        this.isPrime = isPrime;
        this.cart = new Cart()
    }
}

// Test Driven Development
// Write the tests first -> build implementation to pass the tests
const itemsToAddToInventory = {
    banana: {quantity: 4, price: .75},  // => this.items.banana = []
    battery: {quantity: 3, price: .5},  // => this.items.battery = []
    macbookCharger: { quantity: 3, price: 50 }, // => this.items.macbookCharger = []
    PS5: {quantity: 2, price: 500}  // => this.items.PS5 = []
}
const inventory = new Inventory(itemsToAddToInventory);

console.log(inventory);

const staceyann = new User("staceykg", "staceykg@gmail.com", "100 main st, Brooklyn, NY", true)
staceyann.cart.addToCart(inventory.getItem("banana"));
staceyann.cart.addToCart(inventory.getItem("PS5"));

const ben = new User("bspex", "ben@gmail.com", "100 main st, Brooklyn, NY", true)
ben.cart.addToCart(inventory.getItem("battery"));
ben.cart.addToCart(inventory.getItem("PS5"));

// console.log(ben, staceyann, inventory);

