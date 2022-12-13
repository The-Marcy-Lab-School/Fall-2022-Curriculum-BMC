# Execution Context

The **execution context** is WHERE code is executed.

The execution context is represented by an object: `this`

## globalThis, window, and this

```js
console.log('this:', this);
console.log('globalThis:', globalThis);
console.log('window:', window);
```

The `window` object is the execution context in the global scope. It contains useful methods like `setTimeout`

```js
function greet() { console.log("Hello World!") }
window.setTimeout(greet, 2000);
setTimeout(greet, 2000); // we don't need the window.

// What's going on...
function setTimeout(callback, delay) {
    // wait for the delay
    callback();
}
```

## Declaring global functions and variables

A variable declared globally with `var` or without a keyword is added to the global `window` object (in a browser). This is BAD! We want to avoid "polluting" the global window object.

```js
w = 10;         // added to the window
var x = 20;     // added to the window
let y = 30;     // not added to the window (this is good)
const z = 40;   // not added to the window (this is good)

console.log(window.w, window.x, window.y, window.z)
``` 

**Q: What is printed to the console? Why?**

<details><summary>Answer</summary>
    
```
10
10
undefined
undefined
```

`w` and `x` are added to the global `window` object while `y` and `z` are not. `window.y` and `window.z` return `undefined` (instead of throwing an error) because we are accessing properties of an object.
    
</details>

Adding the string `"use strict"` to the top of your file prevents this functionality (an error is thrown: `w is not defined`)

A function declared globally is also added to the global `window` object (in a browser).

```js
function printNumbers() {
    console.log(this);
    console.log(this.w, this.x, this.y, this.z);
}

// printNumbers is technically window.printNumbers and `this` refers to the window
printNumbers();
window.printNumbers();
```

## Use `call` to indirectly invoke a function and explicity set `this`

We can use `Function.prototype.call` to invoke a function on any object as if it were that object's method. 

```js
myFunction.call(thisValue, arguments);
```

`call` is invoked as a method of a function. It indirectly invokes that function. It accepts a value to explicitly set as the `this` value for that function's invocation as well as any arguments to be passed to that function

```js
// A pet factory function
function makePet(name, species,) {
    return {
        name: name,
        species: species,
    };
}

// instances of the factory
const bensCat = makePet("Felix", "cat");
const bensDog = makePet("Dotty", "dog");

// instead of creating a method for each pet, we create a separate function (this is NOT encapsulation)
function greet(greeting) {
    console.log(`${greeting}. My name is ${this.name}`);
}

// indirectly invoke greet using bensCat and bensDat as `this`
greet.call(bensCat, "Prrr");
greet.call(bensDog, "Woof");


/* What will these print? */
// greet("Hello");
// window.greet("Hello");
```

- **Benefit:** Only one function exists (saves memory)
- **Cost:** We lost encapsulation

If we have an array of objects, the `call` method can be used to use take advantage of `this`-style logic. We are essentially treating `this` as an automatically passed-in parameter.

```js
const users = [
    {name: "Ben", email: "ben@marcylabschool.org"},    
    {name: "Motun", email: "motun@marcylabschool.org"},    
    {name: "Carmen", email: "carmen@marcylabschool.org"},    
];

// Using `this` logic
function greet(greeting) {
    console.log(`${greeting}. My name is ${this.name}`);
}

users.forEach(user => {
    greet.call(user, "Hello")
});

// Explicitly passing in the object
function otherGreet(objWithName, greeting) {
    console.log(`${greeting}. My name is ${objWithName.name}`);
}

users.forEach(user => {
    otherGreet(user, "Hello")
});
```

## Use `bind` to create a new function with a set `this`

```
// This code has an issue
let person = {
    name: 'John',
    age: 35,
    getAge: function() {
        console.log(this.age);
    }
};

// window.setTimeout(person.getAge, 1000);
// window.setTimeout(person.getAge.bind(person), 1000)
```


## Arrow Functions ([W3Schools](https://www.w3schools.com/js/js_arrow_function.asp#:~:text=what%20about))

In regular functions the `this` keyword represents the object that called the function.

```js
const obj = {
  count: 10,
  waitThenPrintNum() {

    // window.setTimeout invokes the callback so `this` is the `window`
    window.setTimeout(function () {
      this.count++;
      console.log(this.count);
    }, 3000);
    
  }
};

obj.waitThenPrintNum(); // logs "NaN", because the property "count" is not in the window scope.
```

With arrow functions the `this` keyword always represents the object that defined the arrow function.

```js
const obj = {
  count: 10,
  waitThenPrintNum() {
    
    // obj.waitThenPrintNum is what defines the arrow function
    window.setTimeout(() => {
      this.count++;
      console.log(this.count);
    }, 3000);
    
  }
};

obj.waitThenPrintNum(); // prints 11
```