console.clear();
console.log("Constructors and Prototypes!");

// instance: a product of each time a factory function is invoked

// Constructor functions are used to create object instances

function Car(make, model) {
    this.make = make;
    this.model = model;
    this.passengers = [];
    this.addPassenger = function(name) {
        this.passengers.push(name);
    }
}

const myCar = new Car("Chevy", "Cobalt");
myCar.addPassenger('ben');
myCar.addPassenger('motun');
myCar.addPassenger('carmen');
console.log(myCar);

