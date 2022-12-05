# Functional Programming Day 1

#### Essential Questions
* What is functional programming and what are its benefits?
* Explain what it means that functions are _first-class citizens_ in JavaScript.
* What are _higher-order functions_ and how does this result from the concept of first-class functions?
* Thus far, how have we abstracted over _data_? How have we abstracted over _actions_ (particularly, actions performed on data)?
* How do JavaScript's higher-order array methods allow us to further leverage abstraction?

#### Vocabulary
* abstraction
* first-class functions
* higher-order functions
* callback function
* functional programming
* programming _paradigm_
* pure function
* side effects
* composability  
* (im)mutability

#### Key Methods
* `Array.prototype.forEach()` 
* `Array.prototype.map()`
* `Array.prototype.filter()`
* `Array.prototype.reduce()`
* `Array.prototype.sort()`
* `Array.prototype.some()`
* `Array.prototype.every()`

<hr>

## Review functions (5 minutes)

```js
function print(x) {
	console.log(x);
}

print("hello")
```

* What do you expect to be logged to the console?
* What happens if I change hello to "Hey"? Will we still see "hello"?

**Functions take in dynamic data. They take in some argument whose value we don't know and they do something with it.**

## First Class Citizens (15 minutes)

* In JavaScript, function's are first-class citizens. What does it mean for a value to be a first-class citizen?

```js
let foo = { name: "ben" }
print(foo);
```

* Basically, we can use function's like any other data value. 

**Referencing a funtion (not invoking it) returns a function object**

* What if we created a function and passed it to `print`?

```js
function foo() {
    return "foo"
}
print(foo);
```

* We see the function definition printed to the console. What happens if I do this?

```js
function fizzbuzz() {
    return "fizzbuzz"    
}
print(fizzBuzz)
```

* Adding in a `debugger`:

```js
function print(x) {
    debugger;
    console.log(x);
}

function fizzbuzz() {
    return "fizzbuzz";
}

debugger;

print(fizzbuzz);
print(fizzbuzz());
```

* What is the difference between passing in `fizzbuzz` and `fizzbuzz()`? 
* What is the value of `x` in each case?

## Higher Order Functions (10 minutes)
**A higher order function is a function that takes in another function as an argument.**

* If we pass in a function to `print`, then `x` is the function object.
* What happens if instead of printing `x`, we invoke it?

```js
function execute(x) {
    debugger;
    x();
}

function sayHello() {
    console.log("hello world!");
}

execute(sayHello);
// execute(sayHello());
```

## Why Pass Functions to Functions? (15 minutes)

* Why do we pass data to a function?
    * transform dynamic inputs => outputs

```js
function print3Times(data) {
    let timesExecuted = 0;
    while (timesExecuted < 3) {
        console.log(data);
        timesExecuted++;
    }
}

let greeting = "hello world!";
print3Times(greeting);
```

* Why would we ever want to pass a function to a function?
    * transform dynamic **actions** => outputs

```js
function repeat3Times(action) {
    let timesExecuted = 0;
    while (timesExecuted < 3) {
        action(); // execute the parameter now that its a function
        timesExecuted++;
    }
}

function greet() {
    console.log("hello world!");
}

function bye() {
    console.log("goodbye!")
}

repeat3Times(sayHello);
repeat3Times(sayBye);
```

We can also add in arguments that our `action` function should be invoked with.

```js
function repeat3Times(action, data) {
    debugger;

    let timesExecuted = 0;
    while (timesExecuted < 3) {
        action(data); // execute the parameter now that its a function
        timesExecuted++;
    }
}

function sayHello(name) {
    console.log("hello " + name);
}

function bye(name) {
    console.log("goodbye " + name)
}

repeat3Times(sayHello, "ben");
repeat3Times(sayGoodbye, "carmen");
```

## Challenge (15 minutes)

Write a function called `forEach` that takes in an `array` and an `action` (a function).

The function should invoke `action` once per value in the `array` with each value of the `array` as an argument.

<details><summary>solution</summary>

```js
function forEach(array, action) {
    for (let i = 0; i < array.length; i++) {
        action(array[i])
    }
}

function sayHello(name){
    console.log(`Hello ${name}!`);
}
let names = ['ben', 'carmen', 'motun']

forEach(names, sayHello);
```

</details>

<hr>

# Functional Programming Day 2

**Abstractions hide details so we can think at a higher level**

* How have we abstracted over data?

What does this code do?
```js
console.log(Math.floor(Math.random() * 6));
console.log(Math.floor(Math.random() * 6));
console.log(Math.floor(Math.random() * 6));
```

We can abstract this by writing a function `rollDice()`

```js
function rollDice() {
    console.log(Math.floor(Math.random() * 6));
}

rollDice();
rollDice();
rollDice();
```

