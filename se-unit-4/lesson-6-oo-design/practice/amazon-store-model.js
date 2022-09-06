//One of many, many, many possible implementations.

class Item{
    constructor(name, price, description, isPrime = false) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.prime = isPrime;
        this.itemId = Item.idCounter();
        this.reviews = [];
    }

    toString() {
        return this.name;
    }

    addReview(rating, comment){
        let review = new Review(rating, comment)
        this.reviews.push(review)
    }
}

Item.idCounter = (function() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    }
})()

class Review{
    constructor(rating, comment) {
        this.rating = rating;
        this.comment = comment;
        this.date = new Date();
    }
}

class Cart{
    constructor(){
        this.items = []
    }

    numOfItems() {
        return this.items.length;
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

class User{
    constructor(name, email, paymentMethod, isPrime) {
        this.name = name;
        this.email = email;
        this.paymentMethod = paymentMethod;
        this.isPrime = isPrime;
        this.cart = new Cart();
        this.reviews = [];
        this.saveForLater = [];
        this.orders = [];
    }
    
    addItem(item, quantity) {
        for (let i = 1; i <= quantity; i += 1) {
            this.cart.items.push(item)
        }
        return `${item} added.`
    }
    
    deleteItem(item) {
        let itemsArr = this.cart.items;
        itemsArr.splice(itemsArr.indexOf(item), 1);
        return `${item} deleted`;
    }
}

let markers = new Item('Markers', 9.99, 50, 'Best markers in the world')
let peter = new User('peter', 'peter@gmail.com', 'Credit Card', true)
console.log(peter.addItem(markers, 5))   // What does this print out?
console.log(peter.cart)                  // What does this print out?
console.log(peter.cart.numOfItems())     // What does this print out?
console.log(peter.cart.getTotal())       // What does this print out?
markers.addReview(4, "nice markers, but not the best in the world")
console.log(markers.reviews)             // What does this print out?
