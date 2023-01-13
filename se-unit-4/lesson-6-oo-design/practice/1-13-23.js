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
    - login
    - logout
    - status
    - orderHistory
    - cart: Cart
- Methods: 
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
class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    toString() { // method override
        return `${this.name} costs ${this.price}`
    }
}

const banana = new Item("banana", 0.75);
const PS5 = new Item("Playstation 5", 500);
const battery = new Item("AAA Battery", .5);
const macbookCharger = new Item("Macbook Charger", 50);

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
        
        console.log(this.items)
    }
    
    getItem() {
        
    }
    
    returnItem() {
        
    }
}

// Test Driven Development
// Write the tests first -> build implementation to pass the tests
const itemsToAddToInventory = {
    banana: {quantity: 4, price: .75}, 
    battery: {quantity: 3, price: .5},
    macbookCharger: { quantity: 3, price: 50 },
    PS5: {quantity: 2, price: 500}
}
const inventory = new Inventory(itemsToAddToInventory);

