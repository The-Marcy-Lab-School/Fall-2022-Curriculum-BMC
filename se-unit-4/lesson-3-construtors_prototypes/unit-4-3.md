# Constructors, Prototypes, and the Pseudoclassical Object Creation Pattern

### Key Terms
* constructor
* prototypal inheritance
* prototype object
* prototype property
* pseudoclassical object creation pattern
* instantiation

### Essential Question
* What are the benefits of using _constructors_ to create objects?
* What is the benefit of storing methods on the prototype of the constructor?
* What is the association between an object's prototype and its constructor?
* What are the ways in which we can examine the link between an object and its constructor?
* What is prototypal inheritance and how does it differ from class-based inheritance seen in object-oriented languages?

## The WHY

![cookie cutters](img/cookie_cutters.png)

Factory functions are functions that return objects with a consistent structure (the same set of properties and methods).

Using factory functions, we can imitate a concept in Object-Oriented Programming called **classes**.

With classes, we can define a blueprint of an object that we use to create **instances** of that blueprint.  

We construct objects from these blueprints using **constructor functions**.

Factory functions and constructor functions are basically the same, but there are some technical details that distinguish them. Let's take a look.

## Factory Functions vs. Constructors

Factory functions take parameters and return an object that has properties and methods.
```js
function makeCar(make, model) {
    return {
        make: make,
        model: model,
        passengers: [],
        addPassenger(name) {
            this.passengers.push(name);
        },
    }
}

const myCar = makeCar("Chevy", "Cobalt");
myCar.addPassenger('ben');
myCar.addPassenger('motun');
myCar.addPassenger('carmen');
console.log(myCar);
```

Constructor function:
```js
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
```

**Q: What are the differences between this constructor function and this factory function?**

<details><summary>Answer</summary>

* The `Car` constructor function uses `PascalCase` (the first character of every word is capatlized)
* The `Car` constructor doesn't need to return anything.
* `new` operator:
    * creates a new empty object
    * sets `this` within the constructor to point to the new object
    * returns the new object from the constructor function

</details>

Benefits of the constructor function pattern:
* Slightly less code
* Each object created by a constructor function has its internal `[[Prototype]]` property automatically assigned to the constructor's prototype (`Car.prototype`). 
    * The benefit of this fact is that instances of the constructor function are directly tied to the prototype that they descend from
    * We can use the `instanceof` property to confirm that this link exists
    * We can achieve prototypal inheritance

## Prototypes and Prototypal Inheritance

Key Terms:

* Prototype
* Inherit
* Prototypal Inheritance Chain
* `Constructor.prototype`
* `Object.hasOwnProperty`

A **prototype** is an "ancestral" object from which properties and methods are inherited. This object is stored at each constructors `Constructor.prototype` property and instances of a constructor inherit properties from this prototype object.

For example, when we create an array literal, under the hood we are using the `Array` constructor function. This creates our array as an _instance_ of the `Array.prototype`.

```js
const letters = new Array('a', 'b', 'c');
// const letters = ['a', 'b', 'c'];
```

The array `letters` has its own properties `0: 'a', 1: 'b', 2: 'c'` and it _inherits_ properties from the `Array.prototype` such as `push`.

An object's prototype may also have a prototype that it inherits from, creating a **prototypal chain of inheritance**. `Array.prototype` is an instance of the `Object` constructor and inherits properties from `Object.prototype` such as `hasOwnProperty` and `toString`. 

`hasOwnProperty` is a method we can use to see which prototype a provided property belongs to:

```js
const letters = ['a', 'b', 'c'];
// letters --> Array --> Object

letters.hasOwnProperty('0');                // true
letters.hasOwnProperty('length');           // true
letters.hasOwnProperty('push');             // false (push is on Array.prototype)
letters.hasOwnProperty('hasOwnProperty');   // false (hasOwnProperty is on Object.prototype)

Array.prototype.hasOwnProperty('push');             // true
Object.prototype.hasOwnProperty('hasOwnProperty');  // true
```

The prototypal inheritance chain enables objects to use properties of its prototypal ancestors. In the example above `letters` can use the `hasOwnProperty` method because `letters` descends from `Array.prototype` which descends from `Object.prototype`.

## The end of the prototypal chain

`Object.prototype` descends from `null` which ends the prototypal chain. If JavaScript is looking for a property of an object and it can't find it on the object, it will look at that object's prototype and that prototype's protype (and so on...) until it reaches `null` at which point it gives up and returns `undefined`.

```js
const letters = ['a', 'b', 'c'];
console.log(letters.blah);
```

This returns `undefined` because the `blah` property is not an "own" property of `letters` or any of its protytpal ancestors.

## Proto and Protoype properties

Key Terms:

* `Object.getPrototypeOf(instance)`
* `Object.setPrototypeOf(instance)`
* `instance.__proto__` (deprecated)
* `instanceof` operator

You can see an instance's prototype using the `Object.getPrototypeOf` method. It accepts an _instance_ of a particular prototype.

> We can also use the deprecated `__proto__` property

```js
const arr = [1,2,3];
Object.getPrototypeOf(arr)  // => Array.prototype
arr.__proto__               // => Array.prototype , don't use this
```

If we want to know if an object _instance_ is in fact descended from a constructor function's `prototype`, we can use the `instanceof` operator. It uses `getPrototypeOf` under the hood.

All of these `console.log` statements print `true`

```js
const letters = ['a', 'b', 'c'];
const numbers = new Array(1,2,3);

console.log(letters instanceof Array);
console.log(numbers instanceof Array);

console.log(Object.getPrototypeOf(letters) === Array.prototype);
console.log(Object.getPrototypeOf(numbers) === Array.prototype);

// don't do this
console.log(letters.__proto__ === Array.prototype); 
console.log(numbers.__proto__ === Array.prototype);

```

**Q: What will the following code print?**

```js
const letters = ['a', 'b', 'c'];
const numbers = new Array(1,2,3);

console.log(letters instanceof Object); // ??
console.log(numbers instanceof Object); // ??
```

<details><summary>Answer</summary>

`true` is printed twice.

`letters` and `numbers` are instances of the `Array` constructor which is an instance of the `Object` constructor.

</details>


## Challenge

What does this print?

```js
let parent = { foo: 'foo' }
let child = { }
Object.setPrototypeOf(child, parent)

console.log(child.foo) 

child.foo = 'bar'

console.log(child.foo) 

console.log(parent.foo) 

delete child.foo

console.log(child.foo) 

parent.foo = 'baz'

console.log(child.foo)
```

## Back to Constructors vs. Factory Functions

Let's see this with our `Car` constructor example:

```js
function Car(make, model) {
    this.make = make;
    this.model = model;
    this.passengers = [];
    this.addPassenger = function(name) {
        this.passengers.push(name);
    }
}

const myCar = new Car("Chevy", "Cobalt");

console.log(myCar instanceof Car);
console.log(myCar.__proto__ === Car.prototype);
console.log(Object.getPrototypeOf(myCar) === Car.prototype);
```

If we try doing this with factory functions, we get `false`

```js
function makeSquare(sideLength) {
    return {
        sideLength,
        getArea() {
            return this.sideLength * this.sideLength
        }
    }
}

const mySquare = makeSquare(4);
console.log(mySquare instanceof makeSquare);
console.log(mySquare.__proto__ === makeSquare.prototype);
console.log(Object.getPrototypeOf(mySquare) === makeSquare.prototype);
```

## Understanding a constructor function's `this`

When a constructor function is invoked, it creates a new object and assigns it to `this`. That new object is returned and is an instance of the constructor.

```js
function Obj() {
   console.log(this instanceof Obj);    // true
   console.log(this.__proto__);         // Obj.prototype
   console.log(Obj.prototype);          // Obj.prototype
}

new Obj()
```


## Storing Methods on the Constructor's Prototype

```js
// Here we define the method addPassenger on each instance of the Car
function Car(make, model) {
    this.make = make;
    this.model = model;
    this.passengers = [];
    this.addPassenger = function(name) {
        this.passengers.push(name);
    }
}

vs.

function Car(make, model) {
    this.make = make;
    this.model = model;
    this.passengers = [];
}

// Here 
Car.prototype.addPassenger = function(name) {
    this.passengers.push(name);
}

const myCar = new Car("Chevy", "Cobalt");
myCar.addPassenger('ben');
myCar.addPassenger('motun');
myCar.addPassenger('carmen');
console.log(myCar);
```