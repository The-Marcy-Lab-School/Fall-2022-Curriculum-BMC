# Execution Context

The **execution context** is WHERE code is executed.

The execution context is represented by an object: `this`

The value of `this` is the closest "parent object". 

When `this` is referenced inside of a method of an object, `this` points to the object being called on.

```js
const obj = {
    fizz: function() {
        console.log(this);
    }
}
obj.fizz(); // this refers to the `obj` object
```

When `this` is referenced in the global scope and within global functions, `this` points to the global context object:

```js
console.log(this) // this refers to the global context object

function foo() {
    console.log(this); 
}
foo(); // this refers to the global context object
```

What's going on? What is this global context object anyway?

## window, global, and globalThis

In the global context, `this` refers to the `window` object in the browser and the `global` object in Node.js

`globalThis` is another global variable that always points to the global context variable (`window` or `global`)

```js
console.log('window:', window); // An object in the browser, reference error in Node.js
console.log('global:', global); // An object in Node.js, reference error in the browser
console.log('globalThis:', globalThis); // globalThis points to the `window` in the browser and `global` in Node.js
console.log('this:', this); // points to the same thing as globalThis
```

The `window` object is the execution context in the global scope of a browser. It contains values like `window.screenX` and `window.screenY` and useful methods like `setTimeout`

```js
console.log(window.screenX);

// the `window.` part is "implied" when we reference global variables
console.log(screenY);

window.setTimeout(greet, 2000); // Invokes `greet` after 2000ms (2 seconds)

function greet() { 
    console.log("Hello World!") 
}
```

## Declaring global variables

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
    
```js
10
10
undefined
undefined
```

`w` and `x` are added to the global `window` object while `y` and `z` are not. `window.y` and `window.z` return `undefined` (instead of throwing an error) because we are accessing properties of an object.


</details>
<br>

> Note: Adding the string `"use strict"` to the top of your file turns on strict mode which prevents you from being able to declare variables without a keyword (an error is thrown: `w is not defined`)

## Declaring Global Functions

A function declared globally is also added to the global `window` object (in a browser).

```js
w = 10;         // added to the window
var x = 20;     // added to the window
let y = 30;     // not added to the window (this is good)
const z = 40;   // not added to the window (this is good)

function printNumbers() {
    // `this` refers to the `window` object
    console.log(this.w, this.x, this.y, this.z);
}

// printNumbers is technically window.printNumbers
printNumbers();         // 10 20 undefined undefined
window.printNumbers();  // 10 20 undefined undefined
```

This example illuminates why `this` refers to the global `window` object when referenced inside of a global function. _Technically_ we are invoking the global function as a method of the `window` object and when `this` is referenced inside a method it points to the object the method is called on!

## Use `call` to indirectly invoke a function and explicity set `this`

We can use `Function.prototype.call` to invoke a function on any object as if it were that object's method. The syntax looks like this:

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


/* Bonus Q: What will these print? */
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

In regular functions the `this` keyword points to the object that called the function. With arrow functions, `this` behaves differently. Most often, it points to the global `window` object. If an arrow function is defined inside of a "normal function", `this` will point to the `this` value of that function.

```js
const obj = {
  normalFunc: function() {
    console.log(this) // obj
  },
  arrow: () => {
    console.log(this) // global window
  },
  
  
  innerObj: {
    normalFunc: function() {
      console.log(this) // innerObj
    },
    arrow: () => {
      console.log(this) // still the global window
    },
  },
  
  foo() {
    let innerArrow = () => console.log(this);
    innerArrow(); // obj
  }

}

obj.normalFunc();
obj.arrow();

obj.innerObj.normalFunc();
obj.innerObj.arrow();

obj.foo();
```

To summarize, `this` in arrow functions points to the `this` object of where the arrow function is defined.

This most often becomes relevant when we start using arrow functions as callbacks within methods:

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

obj.waitThenPrintNum(); // Should print 11 but instead logs "NaN", because the property "count" is not in the window object.
```

In this example, the normal function is being invoked by `window.setTimeout` so `window` is the closest parent object. As a result, `this` points to the `window` object and `window.count` is `undefined`.

This is the perfect time to use an arrow function as a callback. With an arrow function, `this` will point to whatever the `this` value is for the context where the arrow function was defined.

```js
const obj = {
  count: 10,
  waitThenPrintNum() {

    console.log(this); // prints the `obj` object
    
    // obj.waitThenPrintNum is what defines the arrow function so `this` points to `obj`
    window.setTimeout(() => {
      this.count++;
      console.log(this.count);
    }, 3000);
    
  }
};

obj.waitThenPrintNum(); // prints 11 after 3000ms (3 seconds)
```

In this version of the code, the arrow function is defined within the function `waitThenPrintNum` whose `this` value is `obj`. Therefore, the value of `this` within the arrow function will also be `obj` and `this.count` points to `obj.count`.