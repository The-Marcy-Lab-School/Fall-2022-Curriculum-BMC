/* 
factory functions
constructor functions
new keyword
this

instance.__proto__ // points to the constructor that the instance inherits from
Constructor.prototype // defines what instances of the constructor will inherit
*/

// // myCar --> Car --> Object


// // PseudoClassical Object Creation Pattern
// function Car(make, model) {
//     // all of these properties are owned by instances of Car
//     this.make = make; // own property
//     this.model = model; // own property
//     this.passengers = []; // own property
// }
// Car.prototype.addPassenger = function(name) { // inherited method
//     this.passengers.push(name);
// }
// Car.prototype.makeSound = function() {
//     console.log("VROOM");
// }

// const myCar = new Car("Chevy", "Cobalt");
// myCar.addPassenger("Carmen"); // inherited from Car.protoype
// myCar.hasOwnProperty("addPassenger"); // inherited from Object.prototype
// console.log(myCar.passengers); // own property


// function OldsMobile(make, model) {
//     this.make = make; // own property
//     this.model = model; // own property
//     this.passengers = []; // own property
// }
// OldsMobile.prototype.makeSound = function() { // overriding method
//     console.log("putt putt putt...")
// }

// OldsMobile.prototype.__proto__ = Car.prototype;

// const oldCar = new OldsMobile("Ford", "Model T");
// oldCar.makeSound(); // inherited from OldsMobile.prototype
// oldCar.addPassenger("Reuben"); // inherited from Car.prototype
// console.log(oldCar);

// // oldCar --> OldsMobile --> Car --> Object



class Car {
    constructor(make, model) {
        this.make = make
        this.model = model;
        this.passengers = [];
    }
    
    addPassenger(passenger) {
        this.passengers.push(passenger);
    }
    
    makeSound() {
        console.log("VROOOM")
    }
}

class OldsMobile extends Car {
    constructor(make, model) {
        super(make, model)
    }
    
    makeSound() {
        console.log("putt putt putt..")
    }
}
