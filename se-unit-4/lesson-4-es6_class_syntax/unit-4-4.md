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
// Pseudo-classical object creation pattern
function Person(name, age) {
    // owned properties
    this.name = name;
    this.age = age;
    this.friends = [];
}
Person.prototype.makeFriend = function(friend) { // inherited method
  this.friends.push(friend)
  console.log(`Hi ${friend}, my name is ${this.name}, nice to meet you!`);
}

const ben = new Person("Ben", 28);
ben.makeFriend("Ann"); // Hi Ann, my name is Ben, nice to meet you!
```

### Warmup Questions

1. What object(s) does `ben` inherit from?
2. What _property_ of `ben` can we reference to see the `Person.prototype` that it inherits from?
3. What properties does `ben` own and which properties are inherited?

<details><summary>Ben's Answer</summary>

* We say that "`ben` is a `Person`" but it is also an `Object`
* The internal `[[Prototype]]` property of `ben` points to `Person.prototype` (accessed via `ben.__proto__` and `Object.getPrototypeOf(ben)`)
* We can use the `.hasOwnProperty` to see which properties are directly owned by the instance `ben` and which are a part of the `Person.prototype`

```js
// these two point to the same thing
console.log("Person.prototype:", Person.prototype);
console.log("ben.__proto__:", ben.__proto__);

// these are true
console.log("ben is a Person:", ben instanceof Person);
console.log("ben is an Object:", ben instanceof Object);

// make, model, and sound are all properties that each instance owns
console.log("ben owns make:", ben.hasOwnProperty("make"));
console.log("ben owns model:", ben.hasOwnProperty("model"));
console.log("ben owns sound:", ben.hasOwnProperty("sound"));

// makeFriend is defined on the Person's prototype and is inherited
console.log("ben owns makeFriend:", ben.hasOwnProperty("makeFriend"));
console.log("Person.prototype owns makeFriend:", Person.prototype.hasOwnProperty("makeFriend"));
```

</details>

## ES6 Class Syntax

In object-oriented programming, constructor functions are associated with a concept called a **class**. A **class** defines a type of object by determining:
* How to create instances of that class through a `constructor` function
* What instances of that class can do through _inherited methods_

We can refactor the `Person` constructor function above using ES6 `class` syntax like so:

```js
// ES6 Class Syntax
class Person {
  constructor(name, age) {
    this.make = make;
    this.model = model;
    this.friends = [];
  }
  makeFriend(friend) { // inherited method
    this.friends.push(friend)
    console.log(`Hi ${friend}, my name is ${this.name}, nice to meet you!`);
  }
}

const ben = new Person('Ben', 28);
ben.makeFriend('Ann');
```

**Q: What differences do you notice? What similarities are there?**

<details><summary>Ben's Answer</summary>

* The `class` keyword is used to define `Person`, not the `function` keyword.
* The `Person` class just has curly braces surrounding the `constructor` function and the `makeFriend` method.
* The `constructor` function within the `Person` class is the same as the `Person` constructor function.
* We don't have to reference the `.prototype` to define `makeFriend()`
* `makeFriend()` is defined without using the `function` keyword
* When we create the instance `ben`, the syntax is the same.

</details>

### ES6 Class Syntax Under the Hood

When we use the `class` syntax, we are essentially defining a prototype object for instances of that class to inherit from. 

Some key facts about `class` syntax:

* The syntax for definine a class is `class ClassName {}`
* The `constructor` function is required and you _must_ use the `new` keyword to invoke it.
* Methods (like `makeFriend`) do NOT use the `function` keyword
* Methods (like `makeFriend`) are automatically placed on the prototype.
* References to the name of the class `Person` will return the `constructor` function

```js
class Person {
  constructor(name, age) {
    this.make = make;
    this.model = model;
    this.friends = [];
  }
  makeFriend(friend) { // inherited method
    this.friends.push(friend)
    console.log(`Hi ${friend}, my name is ${this.name}, nice to meet you!`);
  }
}

const ben = new Person('Ben', 28);
console.log(ben instanceof Person);
console.log(ben.__proto__ === Person.prototype); 

console.log(typeof Person); // function
console.log(Person.prototype); // { constructor: f, makeFriend: f }
console.log(Person === Person.prototype.constructor); // true
```

**Question: What properties do instances of the `Person` class "own"? What is inherited?**

<details><summary>Ben's Answer</summary>

* `name`, `age`, and `friends` are "own" properties
* `constructor` and `makeFriend` are inherited methods from the `Person` prototype

</details>

### Refactor Challenge

Convert the psuedoclassical object creation pattern below into ES6 class syntax

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

const userBen = new User("Ben");
userBen.login();
userBen.logout();
```

<details><summary>Solution</summary>

```js
class User {
  constructor (username) {
    this.username = username;
    this.isOnline = false;
  }
  login() {
    this.isOnline = true;
    console.log(`${this.username} has logged in!`);
  }
  logout() {
    this.isOnline = false;
    console.log(`${this.username} has logged out!`);
  }
}

const userBen = new User("Ben");
userBen.login();
userBen.logout();
```

</details>

**Question: What are the benefits of ES6 `class` syntax compared to the pseudo-classical object creation pattern?**

<details><summary> Ben's Answer </summary>

* Cleaner syntax
* Don't need to manually fuss with the `.prototype` property

</details>

## Other types of Methods and Properties

### Static

Static Methods are methods that are called directly on the class itself and are NOT methods of instances.

Some common examples include:

```js
Object.getPrototypeOf()
Object.setPrototypeOf()
Object.keys()
Object.values()
Array.isArray()
```

To make a method static, just add the `static` keyword in front of the method name:

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.friends = [];
  }
  
  makeFriend(friend) { // inherited method
    this.friends.push(friend)
    console.log(`Hi ${friend}, my name is ${this.name}, nice to meet you!`);
  }
  
  static makeLoner(person) {
    person.friends = [];
  }
}

const ben = new Person("Ben", 28);
ben.makeFriend("Maya");
ben.makeFriend("Reuben");
console.log(ben.friends); // ["Maya", "Reuben"]
Person.makeLoner(ben);
console.log(ben.friends); // []
```

### Private Properties and Methods

We can add `#` infront of any property/method to make it private (usable only within the class's methods and not accessible outside).

```js
class Person {
  
  #friends; // declare a private "field"

  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.#friends = []; // make the property private
  }
  makeFriend(friend) {
    this.#friends.push(friend) // we can use it inside the class
    console.log(`Hi ${friend}, my name is ${this.name}, nice to meet you!`);
  }
  doActivity(activity) {
    console.log(`${this.name} is ${activity}`);
  }
}

const ben = new Person("Ben", 28);
ben.makeFriend("Maya");
console.log(ben.#friends); // SyntaxError
```

### Getter & Setter

The `get` syntax binds an object property to a function that will be called when that property is looked up. This can be useful if we want to give users access to private fields but want to control _how_ that access is given.

```js
class Person {
  
  #friends = []; // declare a private "field"

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  makeFriend(friend) {
    this.#friends.push(friend); // we can use it inside the class
    console.log(`Hi ${friend}, my name is ${this.name}, nice to meet you!`);
  }
  doActivity(activity) {
    console.log(`${this.name} is ${activity}`);
  }

  get friends() {
    return this.#friends.slice();
  }
}

const ben = new Person("Ben", 28);
ben.makeFriend("Maya");
ben.makeFriend("Reuben");

// our getter makes a copy
const bensFriends = ben.friends;
console.log(bensFriends);
bensFriends.pop();
console.log(bensFriends);

// the original is unchanged
console.log(ben.friends);
```

The `set` syntax binds an object property to a function to be called when there is an attempt to set that property. Used in combination with `get`, we can create fully private properties.

```js
class Person {
  
  #name;
  
  constructor(name) {
    this.#name = name
  }
  
  set name(name) {
    if (name === this.#name) {
      console.log("new name must be different")
      return;
    }
    this.#name = name;
  }
  
  get name() {
    return this.#name;
  }
}
```