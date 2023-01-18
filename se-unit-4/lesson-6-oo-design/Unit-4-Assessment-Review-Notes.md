# Unit 4 Assessment Review Notes

## The `this` keyword

When we invoke a method on an object, `this` refers to the object itself

This keeps our code DRY. It lets multiple objects use the same method.

Example:

```js
function speak() {
    console.log(`My name is ${this.name} and I have ${this.eyeColor} eyes and ${this.hairColor} hair`);
}

const person1 = {
    name: "Destiny",
    eyeColor: "green",
    hairColor: "purple",
    speak: speak
}

const person2 = {
    name: "Gabe",
    eyeColor: "blue",
    hairColor: "red",
    speak: speak
}

person1.speak();
person2.speak();
```

We also use `this` when making a `class` inside the constructor function. 

When we use the `new` keyword in a class constructor, `this` becomes the object returned by the constructor

```js
class Person {
  constructor(name, eyeColor, hairColor) {
    this.name = name;
    this.eyeColor = eyeColor;
    this.hairColor = hairColor;
  }
}
const person1 = new Person("ben", "brown", "black");

// this becomes person1
```

## Closures

What is it?

* Two functions: inner and outer
* Outer function doesn't have access to inner
* Inner function has access to outer

Why is it useful?

* Allows us to have private data

Example

```js
let age = 15;

function foo() {
  let canCode = true;
  
  function inner() {
    console.log(canCode);
  }
  
  return inner;
  
}

const returnedFunc = foo();
returnedFunc();


function makeAdder(numToAdd) {
  // debugger;
  function adder(num) {
    // debugger;
    return num + numToAdd;
  }
  return adder;
}

const add10 = makeAdder(10);
const add20 = makeAdder(20);

console.log(add10(5)); // 15
console.log(add10(10)); 
console.log(add10(100)); 
console.log(add20(5)); // 25
```

## Factory Functions

What is it?

Why is it useful?

Example

## ES6 Classes

What is it?

Why is it useful?

Example

## Inheritance

Inheritance defines a relationship between two classes, a superclass (parent class) and a subclass (a child class). The subclass will inherit all of the properties and methods in the superclass.

`extends` is the keyword that makes the subclass inherit methods from the superclass
`super()` invokes the superclass constructor, setting properties on `this`

Inheritance is useful because:
* It helps keep our code DRY by not having to repeat methods in the superclass

Example:

```js
class Person {
  constructor(name) {
    this.name = name;
    this.friends = [];
  }
  makeFriend(friend) {
    this.friends.push(friend)
    console.log(`Hi ${friend}, my name is ${this.name}, nice to meet you!`);
  }
  doActivity(activity) {
    console.log(`${this.name} is ${activity}`);
  }
}

class Programmer extends Person {
  constructor(name, language) {
    // invoke the Person constructor, setting the name and friends properties on `this`
    super(name); 
    
    // add a favoriteLanguage property only for Programmers
    this.favoriteLanguage = language; 
  }
  
  // makeFriend is inherited
  // doActivity is inherited
  
  code() { // a new method only Programmer instances can use
    this.doActivity(`writing some ${this.favoriteLanguage} code.`);
  }
}

const ben = new Programmer("Ben", "JavaScript");
console.log(ben);
ben.code();
ben.makeFriend("Clifford");
ben.doActivity("Running");
```

## Polymorphism

What is it?

* A parent and child class
* Each class has the same method
* When you implement the method, they have different behavior

Why is it useful?

* Calling code doesn't need to worry about implementation details

Example

```js
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  
  makeSound() {
    console.log("Vrooom");
  }
}

class RaceCar extends Car {
  constructor(make, model) {
    super(make, model);
  }
  
  makeSound() { // Method Override
    console.log("Vah... Vah...");
    super.makeSound();
    console.log("WHEEEEEEE!!!!");
  }
}

const car1 = new Car("Chevy", "Cobalt");
const car2 = new RaceCar("Ferrari", "Portofino");

car1.makeSound();
car2.makeSound();
```