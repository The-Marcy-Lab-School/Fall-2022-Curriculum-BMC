# Constructors, Prototypes, and the Pseudoclassical Object Creation Pattern

#### Key Terms
* constructor
* prototypal inheritance
* prototype object
* prototype property
* pseudoclassical object creation pattern
* instantiation

#### Essential Question
* What are the benefits of using _constructors_ to create objects?
* What is the benefit of storing methods on the prototype of the constructor?
* What is the association between an object's prototype and its constructor?
* What are the ways in which we can examine the link between an object and its constructor?
* What is prototypal inheritance and how does it differ from class-based inheritance seen in object-oriented languages?

## Day 2

### The WHY

![cookie cutters](img/cookie_cutters.png)

Factory functions are functions that return objects with a consistent structure (the same set of properties and methods). Using factory functions, we can imitate a concept in Object-Oriented Programming called **constructor functions**.

With constructor functions, we define an object blueprint and the constructor function creates **instances** of that blueprint.

Factory functions and constructor functions are basically the same, but there are some technical details that distinguish them. Let's take a look.

### Factory Functions vs. Constructors

Factory functions have parameters and return an object that has properties and methods.
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
* `new` operator is used.

<br>

</details>

#### The `new` keyword

```js
function Obj(value) {
    this.value = value;
}

const myObj = new Obj(5);
```

The `new` keyword does a lot for us:
* It creates a new empty object
* It sets `this` within the constructor to point to the new object
* It returns the new object from the constructor function


### String, Number, Boolean, Array, and Object constructors

Normally, we create data values using "literal" notation:

```js
let age = 27;               // Number literal 27
let name = "ben"            // String literal "ben"
let isInstructor = true;    // Boolean literal true
let nums = [1, 2, 3];       // Array literal [1, 2, 3]
let user = { id: 123 };     // Object literal { id: 123 }
```

Each of these types also has a corresponding constructor function that we could use:

```js
let age = new Number(27);               // Number constructor
let name = new String("ben")            // String constructor
let isInstructor = new Boolean(true);   // Boolean constructor
let nums = new Array(1, 2, 3);          // Array constructor
let user = new Object();                // Object constructor
user.id = 123;
```

> Note: We should avoid using these in most cases because it is a slower operation than using the literal notation.

The existence of these constructor functions illuminates an interesting fact about JavaScript data values: **everything is an object**.

### Prototypes

Key Terms:

* Prototype
* Inherit
* `Constructor.prototype`

When we create an array literal, under the hood we are using the `Array` constructor function. This creates our array as an _instance_ of the `Array` constructor.

```js
const letters = new Array('a', 'b', 'c');
// const letters = ['a', 'b', 'c'];
```

The array `letters` has its own properties `0: 'a'`, `1: 'b'`, `2: 'c'` and it _inherits_ properties from the `Array.prototype` such as `push`.

```js
console.log(Array.prototype);
```

A **prototype** is an "ancestral" object from which properties and methods are inherited. Every constructor has a `Constructor.prototype` property storing this object (like `Array.prototype` or `String.prototype`).

### Proto and Protoype properties

Key Terms:

* `Object.getPrototypeOf(instance)`
* `instance.__proto__` (deprecated)
* `instanceof` operator

We know that the constructor `Array` has a `prototype` property containing the methods inherited by all array instances. When we print an array, we can also see this same prototype by looking at the internal `[[Prototype]]` property

```js
const arr = [1,2,3];
console.log(arr); // look for the [[Prototype]] property (its greyed out)
```

In code, we can access the `prototype` that an instance inherits from using the `Object.getPrototypeOf` method. It accepts any object.

> We can also use the deprecated `__proto__` property

```js
const arr = [1,2,3];
Object.getPrototypeOf(arr)  // => Array.prototype
arr.__proto__               // => Array.prototype, don't use this
```

If we want to know if an object _instance_ is in fact descended from a constructor function's `prototype`, we can use the `instanceof` operator. It uses `getPrototypeOf` under the hood.

**Q: What do each of these expressions return?**

```js
const letters = ['a', 'b', 'c'];
const numbers = new Array(1,2,3);

letters instanceof Array
numbers instanceof Array

Object.getPrototypeOf(letters) === Array.prototype
Object.getPrototypeOf(numbers) === Array.prototype

// don't do this
letters.__proto__ === Array.prototype
numbers.__proto__ === Array.prototype
```

<details><summary>Answer</summary>

All of these expressions return `true`

</details>

### Prototypal Inheritance Chain

* Prototypal Inheritance Chain
* `Object.hasOwnProperty`

An object's prototype may also have a prototype that it inherits from, creating a **prototypal chain of inheritance**. `Array.prototype` has its own prototype: the `Object.prototype` object.

```js
Object.getPrototypeOf(Array.prototype) === Object.prototype
```

When we try accessing a property of an object, the JavaScript engine will look first at the object to see if it has that property. If it doesn't, it will look at the object's prototype and then its prototype (and so on...) until it finds the property.

This means that all arrays also inherits properties from `Object.prototype` such as `hasOwnProperty` and `toString`. 

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

### The end of the prototypal chain

`Object.prototype` descends from `null` which ends the prototypal chain. 

```js
Object.getPrototypeOf(Object.prototype)
```

If JavaScript is looking for a property in an object's prototypal chain of inheritance and reaches `null`, it gives up and returns `undefined`.

```js
const letters = ['a', 'b', 'c'];
console.log(letters.blah);
```

**Q: This returns `undefined`. Why?**

<details><summary>Answer</summary>

This returns `undefined` because the `blah` property is not an "own" property of `letters` or any of its protytpal ancestors.

</details>

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

### Changing the prototype chain

Key Terms:
* `Object.setPrototypeOf(instance)`

We can manually change an element's prototype using the `Object.setPrototypeOf()` method.

```js
let parent = { favoriteFruit: 'mango' }
let child = { }
Object.setPrototypeOf(child, parent)

console.log(child.favoriteFruit) // 'mango'

child.favoriteFruit = 'kiwi'

console.log(child.favoriteFruit) // 'kiwi'

console.log(parent.favoriteFruit) // 'mango'

delete child.favoriteFruit

console.log(child.favoriteFruit) // ??

parent.favoriteFruit = 'pear'

console.log(child.favoriteFruit) // ??
```

<hr>

## Day 2

### Back to Constructors vs. Factory Functions

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
console.log(Object.getPrototypeOf(mySquare) === makeSquare.prototype);
```

### Understanding a constructor function's `this`

When a constructor function is invoked, it creates a new object and assigns it to `this`. That new object is returned and is an instance of the constructor.

```js
function Obj() {
   console.log(this instanceof Obj);    // true
   console.log(this.__proto__);         // Obj.prototype
   console.log(Obj.prototype);          // Obj.prototype
}

new Obj()
```


### Storing Methods on the Constructor's Prototype

Here we define the method addPassenger on each instance of the Car
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
console.log(myCar.hasOwnProperty("addPassenger"));   // true
```

The issue with this example is that it take up too much memory. Each time we invoke the constructor function, a new function is created and assigned to `this.addPassenger`.

Here we define the method on the constructor's prototype. All instances created by the constructor will inherit this `addPassenger` method from the prototype and we only have to create the function once.

```js
function Car(make, model) {
    this.make = make;
    this.model = model;
    this.passengers = [];
}


Car.prototype.addPassenger = function(name) {
    this.passengers.push(name);
}

const myCar = new Car("Chevy", "Cobalt");
console.log(myCar.hasOwnProperty("addPassenger"));   // false
console.log(Car.prototype.hasOwnProperty("addPassenger"));   // true
```

### Benefits of the constructor function pattern:
* Slightly less code
* Each object created by a constructor function has its internal `[[Prototype]]` property automatically assigned to the constructor's prototype (`Car.prototype`). 
* Instances of the constructor function are directly tied to the prototype that they descend from
* We can use the `instanceof` property to confirm that this link exists
* We can achieve prototypal inheritance
* As we'll see when we learn about `class` syntax, constructor function's can be extended to create sub-classes

## Challenge

Refactory the factory function below to a constructor function called `User`.

The methods `login` and `logout` should be declared on the constructor's `prototype`.

Then, declare two instances of `User` and demonstrate the usage of their properties/methods.

```js
function makeUser(username) {
    return {
        username: username,
        isOnline: false,
        login: function() {
            this.isOnline = true;
            console.log(`${this.username} has logged in!`);
        },
        logout: function() {
            this.isOnline = false;
            console.log(`${this.username} has logged out!`);
        }
    }
}
```
