# Pseudoclassical Object Creation Pattern

Essential Question: What are the benefits of using constructors vs. factory functions?

<details><summary>Ben's Answer</summary>

* Instances of the constructor function are directly tied to the prototype that they descend from — each object created by a constructor function has its internal `[[Prototype]]` property automatically assigned to the constructor's prototype (`Car.prototype`). 
* We can use the `instanceof` property to confirm that this link exists
* We can achieve prototypal inheritance

</details>
<br>

### Prototypes: Constructors vs. Factory Functions

Every function has a `.prototype` property that is an object containing a `.constructor` property.

Objects created from factory functions have no direct link that factory function's `.prototype`. They are just plain objects.

```js
function makeSquare(s) {
    return {
        sideLength: s,
        getArea() {
            return this.sideLength ** 2;
        }
    }
}

const mySquare = makeSquare(4);

console.log(makeSquare.prototype); // { constructor: f makeSquare(s) }
console.log(mySquare.__proto__); // Object.prototype

console.log(mySquare instanceof makeSquare); // false
```

Notice that `mySquare` is not an instance of `makeSquare` and instead is a direct instance of the `Object` class.

If we have a constructor function and we call it with the `new` keyword, the object created by the constructor will be an **instance** of the constructor's **prototype**.

Let's look at the `Car` constructor example to see prototypes in action:

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

// these are all the same object
console.log(Car.prototype);
console.log(myCar.__proto__);
console.log(Object.getPrototypeOf(myCar));

console.log(myCar instanceof Car); // true
```

`myCar` has an internal `[[Prototype]]` property that is accessible via `.__proto__` or `Object.getPrototypeOf`. It points to the `Car.prototype` object. This connects the instance `myCar` to its constructor function `Car`.

### Storing Methods on the Constructor's Prototype

Below, we define the method `addPassenger` as an "own property" on each instance of the `Car` constructor.

We can confirm this by using the inherited `hasOwnProperty` method.

```js
function Car(make, model) {
    // all of these properties are owned by instances of Car
    this.make = make;
    this.model = model;
    this.passengers = [];
    this.addPassenger = function(name) {
        this.passengers.push(name);
    }
}

const myCar = new Car("Chevy", "Cobalt");
console.log(myCar.hasOwnProperty("make"));   // true
console.log(myCar.hasOwnProperty("model"));   // true
console.log(myCar.hasOwnProperty("passengers"));   // true
console.log(myCar.hasOwnProperty("addPassenger"));   // true
```

**Question: How does `myCar` have access to the `hasOwnProperty` method?**

<details><summary>Answer</summary>

All objects are descended from the `Object.prototype` object and inherit methods defined on the `Object.prototype` object, including the `hasOwnProperty` method. 

You can see this by printing out the instance `myCar` and expanding the internal `[[Prototype]]` properties until you reach the `Object` prototype.

</details>
<br>

There are two things that we can improve with this example.

First, this takes up too much memory. Each time we invoke the constructor function, a new `addPassenger` function is created which is a relatively expensive operation.

```js
const myCar = new Car("Chevy", "Cobalt");
const myOtherCar = new Car("Ferrari", "Portofino");

console.log(myCar.addPassenger === myOtherCar.addPassenger); // false
```

Below, we define the method on the `Car` constructor's prototype. All instances created by the constructor will inherit this `addPassenger` method from the prototype. As a result, we only have to create the function once and all car instances share the same function.

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
const myOtherCar = new Car("Ferrari", "Portofino");
console.log(myCar.addPassenger === myOtherCar.addPassenger); // true

console.log(myCar.hasOwnProperty("addPassenger"));   // false
console.log(Car.prototype.hasOwnProperty("addPassenger"));   // true
```

This approach to creating objects is called the **pseudo-classical object creation pattern**.

### Prototypal Inheritance - Superclass and Subclass

Defining methods on the `Car.prototype` object has another benefit: prototypal inheritance. 

Suppose we wanted to create another constructor function called `RaceCar` whose instances behave just like a `Car` but with some additional features that are unique to race cars. We can achieve this using the prototype chain:

```js
function Car(make, model) {
    this.make = make;
    this.model = model;
    this.passengers = [];
}
Car.prototype.addPassenger = function(name) {
    this.passengers.push(name);
}

// Create the constructor
function RaceCar(make, model) {
    this.make = make;
    this.model = model;
    this.passengers = [];
    // or more simply: Car.call(this, make, model)
}
// Add inherited methods to the RaceCar.prototype
RaceCar.prototype.makeSound() {
    console.log("Vah vah VROOOM!!!!");
}

// Have the RaceCar prototype inherit from the Car prototype
Object.setPrototypeOf(RaceCar.prototype, Car.prototype);
// RaceCar.prototype.__proto__ = Car.prototype

const myRaceCar = new RaceCar("Ferrari", "Portofino");
console.log(myRaceCar instanceof RaceCar);
console.log(myRaceCar instanceof Car);

myRaceCar.makeSound(); // inherited from RaceCar.prototype
myRaceCar.addPassenger("Ben"); // inherited from Car.prototype
console.log(myRaceCar.passengers); // an own property of myRaceCar
```

In this example, we created the `RaceCar` constructor and added the method `makeSound` to its prototype. Then, we set the prototype of  `RaceCar.prototype` to inherit methods from `Car.prototype`.

As a result, we can see that `myRaceCar` is an instance of both `RaceCar` and `Car`. The implication of this is that `myRaceCar` has access to:
* its own properties (`make`, `model`, and `passengers`)
* inherited methods from `RaceCar.prototype` (`makeSound()`)
* inherited methods from `Car.prototype` (`addPassenger()`)

To describe the relationship beetween `RaceCar` and `Car`, we can say that `RaceCar` is a **subclass** or `Car`. 

In reverse, we say that `Car` is a **superclass** of `RaceCar`

### Benefits of the constructor function pattern compared to Factory Functions:
* Instances of the constructor function are directly tied to the prototype that they descend from — each object created by a constructor function has its internal `[[Prototype]]` property automatically assigned to the constructor's prototype (`Car.prototype`). 
* We can use the `instanceof` property to confirm that this link exists
* We can achieve prototypal inheritance

<br>
<details><summary> 💡 A note on <code>Object.setPrototypeOf()</code> vs. <code>Object.create()</code></summary>
<br>
 
> Note: There are 3 ways of setting a constructor's prototype to point to another prototype:
> ```js
> // These two are the same
> Object.setPrototypeOf(RaceCar.prototype, Car.prototype);
> RaceCar.prototype.__proto__ = Car.prototype
>
> // or you can do it this way...
> RaceCar.prototype = Object.create(Car.prototype);
> RaceCar.prototype.constructor = RaceCar;
>```
> The Object.create() method creates a new object with the provided object set as the new object's prototype. Using this third approach is technically the fastest operation at scale which is why you'll see it in most examples on the internet. However, it does overwrite the `RaceCar.prototype` entirely which means that the `constructor` function is also overwritten and you'll need to reset it manually. See this [stackoverflow question](https://stackoverflow.com/questions/58377377/extends-object-setprototypeof-vs-object-create) for more info.

</details>

## Challenge

Consider the code below:

**Question 1: What pattern does this demonstrate?**

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

Refactor the factory function above to be a constructor function called `User`.

The methods `login` and `logout` should be declared on the constructor's `prototype` as inherited methods (not as own properties) following the pseudoclassical object creation pattern.

Then, declare two instances of `User` and demonstrate the usage of their properties/methods.

Finally, create a subclass constructor function called `Admin` that inherits methods from `User`. It should have one additional inherited method called `performSecretOperation` that prints a message that only `Admin` instances can use. Create an `Admin` instance and test the `performSecretOperation` method.

**Discussion Question 2: What operator can you use to check if your `Admin` instance is a descendant of `User`?**

**Discussion Question 3: What is the `.__proto__` property and what is the `.prototype` property? Which objects hold those properties?**



<details><summary>Ben's Solution</summary>

```js
function User(username) {
  this.username = username;
  this.isOnline = false;
}
User.prototype.login = function() {
  this.isOnline = true;
  console.log(`${this.username} has logged in!`);
}
User.prototype.logout = function() {
  this.isOnline = false;
  console.log(`${this.username} has logged out!`);
}

function Admin(username) {
    this.username = username;
    this.isOnline = false;
}
Admin.prototype.performSecretOperation = function() {
    console.log("Doing secret admin stuff...");
}
Admin.prototype.__proto__ = User.prototype;

const basicUser = new User("Ben");
basicUser.login();

const adminUser = new Admin("Reuben");
adminUser.login();
adminUser.performSecretOperation();

console.log(adminUser instanceof User);
console.log(adminUser instanceof Admin);
```

1. The original pattern is a factory function. 
2. We can use the `instanceof` operator to check if `adminUser` is an `Admin` and a `User`
3. The `__proto__` property of an object points to the `.prototype` property of the cosntrctor that was used to create the object. `__proto__` is a property of instances of a constructor while `prototype` is a property of constructor functions.
</details>