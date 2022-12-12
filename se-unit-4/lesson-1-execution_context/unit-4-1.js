console.clear();

// The execution context is WHERE code is executed.
// The execution context is represented by an object accessible via `this`

/////////////////////////////////
// globalThis, window, and this
/////////////////////////////////

/* Window is the `globalThis` value in a browser */
console.log('this:', this);
console.log('globalThis:', globalThis);
console.log('window:', window);

function sayHello() {
    console.log("Hello World!");
}
setTimeout(sayHello, 2000)

/* What's going on...
function setTimeout(callback, delay) {
    // wait for the delay
    callback();
}
*/


///////////////////////////////////////////
// declaring global functions and variables
///////////////////////////////////////////

/* 
A variable declared globally with `var` or without a keyword is added to the global `window` object (in a browser)

"use strict" prevents this functionality
*/

w = 10;         // added to the window
var x = 20;     // added to the window
let y = 30;     // not added to the window (this is good)
const z = 40;   // not added to the window (this is good)

function foo() {    // the function foo is added to the window
    var fizz = "fizz";
    return fizz;
}
foo();              // really we are invoking window.foo

/* 
A function declared globally is added to the global `window` object (in a browser)

SO.... printNumbers is technically window.printNumbers and `this` refers to the window
*/
function printNumbers() {
    console.log(this);
    console.log(this.w, this.x, this.y, this.z);
    
}

/* What will these print? */
// printNumbers();
// window.printNumbers();


///////////////////////////////////////////////////////
// Use call to invoke a function and explicity set this
///////////////////////////////////////////////////////

/* 
A factory function is a function we use to manufacture objects
*/
function makePet(name, species,) {
    return {
        name: name,
        species: species,
    };
}

const bensCat = makePet("Felix", "cat");
const bensDog = makePet("Dotty", "dog");

function greet(greeting) {
    debugger;
    console.log(`${greeting}. My name is ${this.name}`);
}
/* What will these print? */
// greet("Hello");
// window.greet("Hello");


/*
We can use Function.prototype.call to invoke a function on any object as if it were that object's method
*/
// greet.call(bensCat, "Prrr");
// greet.call(bensDog, "Woof");



/* invoke greet on all of the objects in this array */
const users = [
    {name: "Ben", email: "ben@marcylabschool.org"},    
    {name: "Motun", email: "motun@marcylabschool.org"},    
    {name: "Carmen", email: "carmen@marcylabschool.org"},    
]

function otherGreet(objWithName, greeting) {
    console.log(`${greeting}. My name is ${objWithName.name}`);
}

users.forEach(user => {
    greet.call(user, "Hello")
})


/* 
Benefit: Only one function exists (saves memory)
*/

///////////////////////////////////////////////////////
// Use bind to create a new function with a set context
///////////////////////////////////////////////////////

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


/* Arrow Functions

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#using_call_bind_and_apply

*/

const obj = {
  count: 10,
  doSomethingLater() {
    console.log(this);
    setTimeout(function () { 
      this.count++;
      console.log(this.count);
    }, 300);
  },
};


// obj.doSomethingLater();