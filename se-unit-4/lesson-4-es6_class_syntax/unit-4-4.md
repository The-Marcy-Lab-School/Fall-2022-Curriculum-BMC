# Unit 4-4: Classes

## Overview 

### Key Terms
* ES6 Class syntax
* Class Constructor Functions
* superclass/subclass
* `extends`
* `super`
* Encapsulation, Inheritence, and Polymorphism
* getter
* setter
* static

### Essential Questions
* What is polymorphism and why is it a common practice in OOP?
* What is the purpose of getter and setter methods?

## Constructor Function Recap

With **constructor functions**, we learned how to create many **instances** of a particular type of object. Each instance can be created with its own unique properties and can inherit methods from that constructors `prototype`.

```js
function Car(make, model) {
    // owned properties
    this.make = make;
    this.model = model;
    this.sound = "Vroom";
}
Car.prototype.makeSound = function() { // inherited method
    console.log(`${this.make} ${this.model} goes ${this.sound}`);
}

const dailyDriver = new Car("Chevy", "Cobalt");
dailyDriver.makeSound(); // Chevy Cobalt goes Vroom
```

Remember how prototypal inheritance works...

```js
// these two point to the same thing
console.log("Car.prototype:", Car.prototype);
console.log("dailyDriver.__proto__:", dailyDriver.__proto__);

// these are true
console.log("dailyDriver is a Car:", dailyDriver instanceof Car);
console.log("dailyDriver is an Object:", dailyDriver instanceof Object);

// make, model, and sound are all properties that each instance owns
console.log("dailyDriver owns make:", dailyDriver.hasOwnProperty("make"));
console.log("dailyDriver owns model:", dailyDriver.hasOwnProperty("model"));
console.log("dailyDriver owns sound:", dailyDriver.hasOwnProperty("sound"));

// makeSound is defined on the Car's prototype and is inherited
console.log("dailyDriver owns makeSound:", dailyDriver.hasOwnProperty("makeSound"));
console.log("Car.prototype owns makeSound:", Car.prototype.hasOwnProperty("makeSound"));
```

## ES6 Class Syntax

In object-oriented programming, constructor functions are associated with a concept called a **class**. A **class** defines a type of object by determining:
* How to create instances of that class through a `constructor` function
* What instances of that class can do through _inherited methods_

```js
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.sound = "Vroom";
    }
    
    makeSound() { // an inherited method
        console.log(this.sound);
    }
}

const myCar = new Car('Chevy', 'Cobalt');
myCar.makeSound();
console.log(myCar);
```

### ES6 Class Syntax Under the Hood

Some key facts about `class` syntax:

* The `constructor` function is required
* instances created by

```js
const myCar = new Car('Chevy', 'Cobalt');
console.log(myCar instanceof Car);
console.log(myCar.__proto__ === Car.prototype); 

console.log(typeof Car); // function
console.log(Car.prototype); // { constructor: f, makeSound: f }
console.log(Car === Car.prototype.constructor); // true
```


## Inheritance

**Inheritance** is a pillar of object-oriented programming. It describes a relationship between two classes: a **subclass** that inherits methods from a **superclass**. As a result, instances of the sub-class can use methods defined in a super-class. 

**Question: What are two of JavaScript's essential data types that demonstrate inheritance? Which is the subclass and which is the superclass?**

<details><summary>Answer</summary>

The `Array` class is a sub-class of the `Object` class which is the super-class.

Every Array inherits methods from the `Array.prototype` which inherits methods from the `Object.prototype`. Therefore, all arrays can use `Object.prototype` methods like `toString()`.

</details>
<br>

### Inheritance Chain

Inheritance can exist in a chain in which a sub-sub-class can inherit from a sub-class which inherits from a super-class.

![](./practice/diagram1.png)

**Question: What is the inheritance relationship between the `Professor` class and the `Person` class? What about the `GraduateStudent` class and the `Person` class?**

### Establishing Inheritance Between Custom Classes

Imagine we have our `Car` class and we want to make a subclass called `RaceCar`. It will inherit the properties and methods of the superclass `Car` but we will modify the `sound` property to be a bit more exciting.

To do this, we use the `extends` keyword when defining our `RaceCar` class:

```js
// First create the superclass Car
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.sound = "Vroom";
  }
  
  makeSound() {
    console.log(this.sound);
  }
}

// Then extend Car to create the subclass RaceCar
class RaceCar extends Car {
  constructor(make, model) {
    super(make, model);
    this.sound = "ZOOOOOM"; // make some modifications
  }
}

const myRaceCar = new RaceCar("Ferrari", "Portofino")
myRaceCar.makeSound();
console.log(myRaceCar);

console.log(myRaceCar instanceof RaceCar);
console.log(myRaceCar instanceof Car);
```

* `extends` sets `Car` as the prototype for `RaceCar`
* `RaceCar` will inherit properties and methods 
from `Car`
* Instances of `RaceCar` are also instances of `Car`
* `RaceCar` is said to be a **subclass** of `Car`. 
* `Car` is said to be a **superclass** of `RaceCar`.

## Polymorphism

```js
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.sound = "Vroom";
  }
  
  makeSound() {
    console.log(this.sound);
  }
}

class RaceCar extends Car {
  constructor(make, model) {
    super(make, model);
    this.sound = "ZOOOOOM";
  }
}

class OldsMobile extends Car {
  constructor(make, model) {
    super(make, model);
    this.sound = "POP! putt putt putt...";
  }

  makeSound() { // method override
    if (Math.random() > 0.5) {
        super.makeSound(); 
    } else {
        console.log("POP! POP! SCREEEEEECH!");
    }
  }
}

const myOldsMobile = new OldsMobile("Ford", "Model T");
const myRaceCar = new RaceCar("Ferrari", "Portofino");
const myCar = new Car('Chevy', 'Cobalt');

const carCollection = [myOldsMobile, myRaceCar, myCar];
carCollections.forEach(car => car.makeSound());
```