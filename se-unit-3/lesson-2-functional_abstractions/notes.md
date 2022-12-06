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

let names = ['ben', 'carmen', 'motun']

function sayHello(name){
    console.log(`Hello ${name}!`);
}

// For each element in names, invoke sayHello()
forEach(names, sayHello);

// For each element in names, invoke the arrow function
forEach(names, name => {
    console.log(`Goodbye ${name}`);
});
```

</details>

<hr>

# Functional Programming Day 2

**Abstractions hide details so we can think at a higher level**

What does this code do?
```js
console.log(Math.ceil(Math.random() * 6));
console.log(Math.ceil(Math.random() * 6));
console.log(Math.ceil(Math.random() * 6));
```

We can abstract this by writing a function `rollDice()`

```js
function rollDice(sides) {
    console.log(Math.ceil(Math.random() * sides));
}

rollDice(6);
rollDice(12);
rollDice(20);
```

<details><summary>**Q: So, how do we abstract over data?**</summary>

We write functions! Parameters let us work with abstract data values.

</details>

## Arrow Functions

#### Function Definitions/Declarations
```js
function add(a, b) {
    let sum = a + b;
    return sum;
}
```

#### Function Expression
```js
const add = function(a, b) {
    let sum = a + b;
    return sum;
}
```

#### Arrow Function
```js
const add = (a, b) => {
    let sum = a + b;
    return sum;
}
```

**If the arrow function has only 1 parameter**, the parentheses around the parameter can be left out.
```js
const double = num => {
    let twice = num * 2;
    return twice;
}
```

**If the arrow function's body only has one line**, the `{}` can be left out. The arrow function will return whatever the expression evaluates to (the `return` keyword can also be left out).
```js
const double = num => num * 2;
```

## Higher-Order Array Methods

**Vocab**

* callback function — A function provided to a higher order function to be executed by the higher order function.

### For Each

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach):
The `forEach()` method executes a provided function once for each array element.

* Example 1: Print `Hello [Name]!` for each value in an array of names
    ```js
    const names = ['ben', 'carmen', 'motun'];
    
    // Print a greeting using a for loop
    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        console.log(`hello ${name}`);  
    }
    
    // Print a greeting using forEach and an arrow function expression
    const sayHello = name => console.log(`hello ${name}`);
    names.forEach(sayHello);
    
    // Or just pass the arrow function directly to forEach
    names.forEach( name => console.log(`hello ${name}`) )
    ```

* Example 2: Double the values in an array and put them into another array

    ```js
    // Double the values in numbers
    const numbers = [10, 20, 30];
    const doubleArray = [];
    numbers.forEach( number => doubleArray.push(number * 2) );
    console.log(doubleArray);
    // [20, 40, 60]
    ```

> Note: `Array.prototype.forEach` returns `undefined`

### Map

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map):
The `map()` method **creates a new array** populated with the results of calling a provided function on every element in the calling array.

* Example 1: Double the values in an array and put them into another array

    ```js
    // Double the values in numbers
    const numbers = [10, 20, 30];
    const doubleArray = numbers.map(num => num * 2);
    console.log(doubleArray); // => [20, 40, 60]
    ```
    
* Example 2: Get an array containing the length of every word in the array:

    ```js
    const names = ['ben', 'carmen', 'motun'];
    const nameLengths = names.map(word => word.length);
    console.log(nameLengths); // => [3, 6, 5]
    ```
    
* Example 3: Extract the `email` property from an array of objects

    ```js
    const users = [
        { name: "Ben", email: "ben@marcylabschool.org" },
        { name: "Carmen", email: "carmen@marcylabschool.org" },
        { name: "Motun", email: "motun@marcylabschool.org" },
    ];
    const emails = users.map(user => user.email);
    console.log(emails); 
    // [
    //   "ben@marcylabschool.org",
    //   "carmen@marcylabschool.org",
    //   "motun@marcylabschool.org",
    // ]
    ```
    
<details><summary>**Q: How can we implement the `map` function? It should take in an `array` and a `callback`**</summary>

```js
function map(arr, callback) {
  const toReturn = [];
  
  for (let i = 0; i < arr.length; i++) {
    const result = callback(arr[i]);
    toReturn.push(result);
  }
  
  return toReturn;
}
const nums = [1,2,3];
const doubled = map(nums, num => num * 2);
```

</details>

### Filter
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter):
The `filter()` method creates a **shallow copy** of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

* Example 1: Keep only the even values

    ```js
    let numbers = [1,2,3,4,5,6];
    let evens = numbers.filter(num => num % 2 === 0);
    console.log(evens); // => [2, 4, 6]
    ```
    
* Example 2: Keep only users who are NOT admins and who are at least 18

    ```js
    const users = [
        { username: "soccerKid123", isAdmin: false, age: 20 },
        { username: "iHeartPonies", isAdmin: false, age: 16 },
        { username: "skaterboi666", isAdmin: false, age: 19 },
        { username: "mrRobot", isAdmin: true, age: 25 },
    ];
    
    const selectedUsers = users.filter(user => !user.isAdmin && user.age >= 18)
    console.log(selectedUsers); 
    // [
    //   { username: "soccerKid123", isAdmin: false, age: 20 },
    //   { username: "skaterboi666", isAdmin: false, age: 19 }
    // ]
    ```
    
<details><summary>**Q: How can we implement the `filter` function? It should take in an `array` and a `test` callback**</summary>

```js
function map(arr, test) {
  const toReturn = [];
  
  for (let i = 0; i < arr.length; i++) {
    const result = test(arr[i]);
    if (result) {
        toReturn.push(result);
    }
  }
  
  return toReturn;
}
const nums = [1,2,3,4];
const evens = map(nums, num => num % 2 === 0);
```

</details>
    
### Other higher order methods
* [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
* [Some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
* [Every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
* [Sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

## Composability

The functions `map()` and `filter()` both return arrays. As a result, we can chain them together to _compose_ elegant one-line code.

* Example 1: Double the even values in an array
    ```js
    const nums = [1,2,3,4,5];
    // one at a time
    const evens = nums.filter(num => num % 2 === 0); // [2, 4]
    const doubledEvens = evens.map(num => num * 2); // [4, 8]
    
    // in one line
    const doubledEvens = nums.filter(num => num % 2 === 0).map(num => num * 2);
    // [4, 8]
    
    ```
 
* Example 2: Get the usernames of users who are admins
    ```js
    const users = [
        { username: "soccerKid123", isAdmin: false, age: 20 },
        { username: "iHeartPonies", isAdmin: false, age: 16 },
        { username: "skaterboi666", isAdmin: true, age: 19 },
        { username: "mrRobot", isAdmin: true, age: 25 },
    ];
    
    // one at a time
    const admins = users.filter(user => user.isAdmin)
    const adminUsernames = admins.map(user => user.username);
    
    // in one line
    const adminUsernames = users.filter(u => u.isAdmin).map(u => u.username);
    
    console.log(adminUsernames); // => ["skaterboi666", "mrRobot"]
    ```


<details><summary>**Q: So, how do we abstract over actions?**</summary>

We write **higher-order** functions! Callback functions as parameters let us work with abstract _actions_.

</details>