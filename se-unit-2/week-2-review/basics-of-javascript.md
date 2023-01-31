# Unit 2 Essentials Vocabulary

**Programmer's Mindset:** There is a solution out there. I just need to find it.

> How can I...

**Table of Contents**:
- [Expressions are values](#expressions-are-values)
- [Statements](#statements)
- [Variables](#variables)
- [console.log()](#console-log())
- [Conditional Statements](#conditional-statements)
    - [Control Flow](#control-flow)
    - [If Statements](#if-statements)
    - [Else Statements](#else-statements)
    - [Else If Statements](#else-if-statements)
- [Functions](#functions)
- [Function Returns](#function-returns)
- [Function Parameters and Arguments](#function-parameters-and-arguments)
- [Loops](#loops)
    - [While](#while)
    - [For Loops](#for-loops)
    - [Counting Backwards](#counting-backwards)
    - [Skipping Values](#skipping-values)
- [Arrays and Objects](#arrays-and-objects)
    - [Objects](#objects)
    - [Arrays](#arrays)
    - [Mutability of Arrays and Objects](#mutability-of-arrays-and-objects)
- [Iteration](#iteration)

## Expressions are values

Expressions are any piece of code that **returns** or **evaluates to** a data value (a string, number, boolean, `null`, `undefined`, BigInt, Symbol, object, or function).

All of the following are considered expressions:

```js
5 + 5;          // evaluates to 10
3 < 10;         // evaluates to true
"a" < "b";      // evaluates to true
"hello" + 1;    // evaluates to "hello1"
true && false;  // evaluates to false
8 * "hello";    // evaluates to NaN
null;           // evaluates to null
undefined;      // evaluates to undefined
"8"             // evaluates to "8"
true ? 'a' : 'b'// evaluates to 'a'
Math.max(3,5)   // evaluates to 5
console.log()   // evaluates to undefined
```

## Statements

Statements are the most basic building block of a program. A statement makes some permananent change to our program by doing something such as storing an expression in a variable (which designates some memory for that variable) or invoking a function (which triggers other code to execute). 

Ultimately, a program is a series of statements written in a particular order to accomplish some end result. All of the following are considered statements:

* A variable declaration
* A function declaration
* A function invocation (including invoking built-ins like `console.log()`)
* An `if` statement
* A `for` / `while` / `do...while` loop

## Variables

Variables are named identifiers that "point to" data values or expressions. All of the expressions above can be pointed to by a variable. When we create a variable and have it point to an expression, the result of that expression is stored in memory. 

We can retreive the value that a variable points to by referencing the variable's name/identifier.

Declaring a variable turns the variable _name_ into an expression! The variable name is an expression? Yes! When we reference that variable name, it evaluates to (or "returns") the value it points to.

```js
const sum = 5 + 5;
sum; // evaluates to 10
const lessThan = 3 < 10;
lessThan; // evaluates to true 
const aBeforeB = "a" < "b";
aBeforeB; // evaluates to true
const concat = "hello" + 1;
concat; // evaluates to "hello1
const and = true && false;
and; // evaluates to false
const why = 8 * "hello";
why; // evaluates to NaN
const itsNull = null
itsNull; // evaluates to null 
const ternResult = true ? 'a' : 'b'
ternResult; // evaluates to 'a'
const larger = Math.max(3,5);
larger; // evaluates to 5
const nada = console.log()
nada; // evaluates to undefined
```

Variables declared using the `const` keyword can't be reassigned. Attempting to do so will throw a `TypeError`

```js
const age = 27;
age++; // This throws a TypeError
```

If we need to reassign the value held by a variable, use the `let` keyword instead:

```js
let age = 27;
age++; // age now evaluates to 28
```

## `console.log()`

Our computer can evaluate our expressions but we won't see any of its work when we run our programs. Developers use the built-in function `console.log()` to see what our expressions evaluate to.

```js
const sum = 5 + 5;              
console.log(sum); // prints 10
const lessThan = 3 < 10;        
console.log(lessThan); // prints true
const aBeforeB = "a" < "b";     
console.log(aBeforeB); // prints true
const concat = "hello" + 1;     
console.log(concat); // prints "hello1"
const and = true && false;      
console.log(and); // prints false
const why = 8 * "hello";        
console.log(why); // prints NaN
const itsNull = null;           
console.log(itsNull); // prints null
const larger = Math.max(3,5)    
console.log(larger); // prints 5
const nada = console.log()      
console.log(nada); // prints undefined
```

`console.log()` is purely used for testing! If you take a look at the console for any web application, you'll notice that there aren't any console messages. This is a good thing!

A developer typically uses `console.log()` to confirm the value of some expression (often stored in a variable or returned by a function). Once they have confirmed that value, they will delete the `console.log()` from their code.

When you are working as a Software Engineer, if you submit code with `console.log()` statements, it tells your manager that you haven't finished testing yet. They will reject your code and tell you to remove the `console.log()`s!

Take a look at [my snake game](https://benspector3.github.io/snake/) ([index.js file](https://github.com/benspector3/snake/blob/main/index.js)) and notice that there aren't any `console.log()` statements in the `index.js` file!

## Conditional Statements

### Control Flow

**Control flow** refers to the order in which statements are executed. Typically, every statement is executed one at a time, top-to-bottom:

```js
console.log('a'); // prints a
console.log('b'); // prints b
console.log('c'); // prints c
```

Conditional statements alter the "control flow" of our program. They allow us to execute a statement only IF the right conditions are met:

```js
// These two lines always get executed
let weather = 'rainy';
console.log('The forecast today is ' + weather);

// This conditional statement will only execute one of the following statements
if (weather === 'rainy') {
    console.log('Remember your umbrella!');
} else if (weather === 'sunny') {
    console.log('Remember your sunscreen!');
} else if (weather === 'snowy') {
    console.log('Remember your scarf!');
}

// This is always executed.
console.log("Have a great day!");

```

### If Statements

`if` statements change the control flow by making some statements execute only IF a certain **boolean expression** evaluates to `true`.

```js
console.log("This always happens first");

const booleanExpression = true;
if (booleanExpression === true) {
    console.log("This only happens if booleanExpression is true");
}

console.log("This always happens last");
```

Boolean expressions are any value that evalutes to `true` or `false`. The program below uses the `>` operator to determine if a user is old enough to access mature content.

```js
console.log("This always happens first");

const userAge = 16;

if (userAge >= 18) {
    console.log("Access Granted");
}

console.log("This always happens last");
```

### Else Statements

Sometimes we need a backup plan if an `if` statement does not execute. 

An `else` statement can be inserted immediately after (and only after) an `if` statement. The statements inside an `else` statement's code block `{}` will only be executed if the previous `if` statement(s) did NOT execute.

```js
console.log("This always happens first");

const userAge = 16;

if (userAge >= 18) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}

console.log("This always happens last");
```

Note: trying to write an `else` statement on its own will throw an error: `SyntaxError: Unexpected token 'else'`

### Else If Statements

Sometimes we need to check additional conditions inside of our `else` statements. The program below denies access to our user if they are under `18` UNLESS they are also an admin.

```js
console.log("This always happens first");

const userAge = 16;
const isAdmin = true;

if (userAge >= 18) {
    console.log("Access Granted");
} else {
    if (isAdmin) {
        console.log("Special Admin Access Granted");
    } 
    else {
        console.log("Access Denied");
    }
}

console.log("This always happens last");
```

In this example, the `else` statement has its own nested `if` / `else` chain.

We can simplify this logic using the `else if` combination of keywords:

```js
console.log("This always happens first");

const userAge = 16;
const isAdmin = true;

if (userAge >= 18) {
    console.log("Access Granted");
} else if (isAdmin) {
    console.log("Special Admin Access Granted");
} else {
    console.log("Access Denied");
}

console.log("This always happens last");
```

Note: often `else if` and `else` statements will begin after (and on the same line) as the closing `}` of the previous conditional statement.

## Functions

Functions encapsulate a series of statements and give that code a name. 

```js
function functionName() {
    // statements go here
}
```

This lets us re-use those statements by "invoking" the function.

```js
functionName() // this invokes a function called functionName
```

For example, the following statements will simulate flipping a coin and print the result to the console:

```js
// Create a variable to hold the result
let flipResult = undefined;

// Get the random result
const randomNumBetween0and1 = Math.random();
if (randomNumBetween0and1 > 0.5) {
    flipResult = 'Heads';
} else {
    flipResult = 'Tails';
}

// print the result
console.log(flipResult); // prints either 'Heads' or 'Tails'
```

If I wanted to flip two coins, I _could_ copy all of the statements and paste it below. _Or_ I could wrap the statements in a function and invoke the function twice:

```js
function flipCoin() {
    let flipResult = undefined;
    const randomNumBetween0and1 = Math.random();
    if (randomNumBetween0and1 > 0.5) {
        flipResult = 'Heads';
    } else {
        flipResult = 'Tails';
    }
    console.log(flipResult); // prints either 'Heads' or 'Tails'
}

flipCoin(); // invoke the function once
flipCoin(); // invoke the function again
```

This code uses the `function` keyword to declare new function called `flipCoin` that takes no _parameters_ and has a code block `{}` containing all of the code from the prior example. 

We **invoke** a function by writing the function's name and adding parentheses after `()`. Each time we invoke a function, every line of code in that function will be executed.

> Note that all code inside the function's `{}` are indented. This improves readability.

## Function Returns

In the first section, we learned that function calls (a.k.a "function invocations") are expressions because they evaluate to a value. 

All function invocations evaluate to `undefined` unless specified with the `return` keyword. The `flipCoin()` function above has no `return` statement (a line of code using the `return` keyword) so it evaluates to `undefined`

```js
function flipCoin() {
    let flipResult = undefined;
    if (Math.random() > 0.5) {
        flipResult = 'Heads';
    } else {
        flipResult = 'Tails';
    }
    console.log(flipResult); // prints either 'Heads' or 'Tails'
}

const whatFlipCoinReturns = flipCoin(); 

console.log(whatFlipCoinReturns); // undefined
```

So far, this `flipCoin()` function has operated in isolation. It has no affect on the other invocations of `flipCoin()` nor does it have any affect on any other statements in our program. But what if we wanted to count how many heads are produced by all of the function invocations? How can we access the value `flipResult` produced by each function `invocation` so that we may count them?

**A `return` statement can be added to the end of a function to change what its function invocations evaluate to.** This allows us to use values created within a function _outside_ of that function.

We can count the number of heads like so:

```js
function flipCoin() {
    let flipResult = undefined;
    if (Math.random() > 0.5) {
        flipResult = 'Heads';
    } else {
        flipResult = 'Tails';
    }
    return flipResult; // return the result (instead of printing it with console.log())
}

// store each returned value in a variable
const firstFlip = flipCoin(); 
const secondFlip = flipCoin(); 
const thirdFlip = flipCoin(); 

// then count them
const numHeads = 0;
if (firstFlip === "Heads") {
    numHeads++;
}
if (secondFlip === "Heads") {
    numHeads++;
}
if (thirdFlip === "Heads") {
    numHeads++;
}

console.log(numHeads);
```

## Function Parameters and Arguments

Functions can accept inputs that can change how the function operates. Consider this simple function:

```js
function add2and3() {
    return 2 + 3;
}

const result = add2and3(); // evaluates to 5 and assigns 5 to result
```

This function is rigid — it will always evaluate to `5`. We can make it more flexible by introducing a _parameter_. 

A **parameter** is a placeholder. It is a variable that exists only within the function it is declared in and is redeclared each time the function is invoked. The value it is assigned depends on the **argument** (a data value) provided in the function invocation.

```js
function add2andX(x) {
    return 2 + x;
}

const result1 = add2andX(5); // invoke add2andX with an argument 5. result1 evaluates to 7
const result2 = add2andX(8); // invoke add2andX with an argument 8. result2 evaluates to 10
```

We can add multiple parameters, separated by commas:

```js
function add(x, y) {
    return x + y;
}

const result1 = add(4, 3); // invoke add with the arguments 4 and 3. result1 evaluates to 7
const result2 = add(8, 2); // invoke add with the arguments 8 and 2. result2 evaluates to 10
```

## Loops

We often have some code that we want to run many times. Maybe, we want to flip a coin 1000 times.

The function `flipCoin()` made it possible to re-use the coin-flipping logic, but we still had to invoke the function each time we wanted to use it. Imagine writing a program that has 1000 function calls to the same function!

Loops are how we automatically repeat a block of code a specific number of times (or until some condition is met).

### While

A `while` loop is the most basic loop. It's syntax is similar to an `if` statement:

```js
while (booleanExpression === true) {
    // do something
    // eventually make booleanExpression false
}
```

If the boolean expression is `true`, the `while` loop will execute the code block. However, instead of doing this once, after it executes the code block it will loop back to check the condition again. It will keep checking the condition and executing the block until the boolean expression is `false`.

We can make our program call `flipCoin()` 1000 times by:
* introducing a `count` variable that increments on each loop
* making sure that the `count` variable doesn't go over `1000`

We can also keep track of the number of `"Heads"` by introducing a `heads` variable.

> Note: We've simplified the `flipCoin()` function so that it uses the ternary operator to return either `"Heads"` or `"Tails"`. 

```js
function flipCoin() {
    return Math.random() > 0.5 ? "Heads" : "Tails";
}

// start the count at 1
let count = 1;
let heads = 0;

// check the boolean expression count <= 1000
while (count <= 1000) {
    // add 1 or 0 depending on what flipCoin() returns
    heads += flipCoin() === "Heads" ? 1 : 0;

    // increment
    count++;
}
```

There is also a `do...while` loop that will _always_ execute the code block first and _then_ will check the condition to see if it should go again:

```js
do {
    // do something
} while (booleanExpression === true)
```

### For Loops

Note the three steps that are essential to making the `while` loop run exactly 1000 times:
1. Declare a `count` variable to **start** at `1`
2. Check if the **boolean expression** `count <= 1000` is `true`
3. **Increment** the `count` variable by `1`

These three steps are so commonly used that a different loop was created to condense the syntax: the `for` loop:

```js
for (start; booleanExpression; increment) {
    // do something
}
```

To recreate the code above using a `for` loop, we could write:

```js
function flipCoin() {
    return Math.random() > 0.5 ? "Heads" : "Tails";
}

let heads = 0;

//      start      boolean expression  increment
for (let count = 1;   count <= 1000;    count++) {
    heads += flipCoin() === "Heads" ? 1 : 0;
}
```

Now, what used to be three lines of code:
1. `let count = 1;`
1. `count <= 1000;`
1. `count++;`

has been condensed into one: 

```js
for (let count = 1; count <= 1000; count++) {}
```

### Counting Backwards

We can use these three steps (start, boolean expression, increment) to loop in different depending on our needs.

If I wanted to count backwards and, say, print the numbers `10` down to `1`, I could write:

```js
for (let count = 10; count >= 1; count--) {
    console.log(count);
}
```

### Skipping values

Let's say I wanted to count from `1` up to `10` but skip all the even numbers. I could either write:

```js
for (let count = 1; count <= 10; count++) {
    if (count % 2 === 0) { // if count is even...
        continue; // continue on to the next loop
    } else { // otherwise print
        console.log(count);
    }
}
```

or...

```js
for (let count = 1; count <= 10; count++) {
    if (count % 2 === 1) { // if its odd...
        console.log(count);
    }
}
```

or...

```js
// increment count by 2 now
for (let count = 1; count <= 10; count += 2) {
    console.log(count);
}
```

## Arrays and Objects

Up until now, our variables could only hold onto one value at a time. This can be pretty limiting, particularly once we start dealing with large programs with a lot of data.

### Objects

**Objects** are a _complex data type_ — meaning they are a collection of values that can be stored in a single variable.

Objects look like this:

```js
// this is an empty object
const emptyObj = {};

// this is an object with one property
const user = { email: "ben@marcylabschool.org" };

// this is an object with 2 properties and 1 method.
const myCat = {
    name: "Felix",
    age: 10,
    makeSound: function() {
        console.log("Meow");
    }
}
```
* Every object is created using curly brackets `{}`
* Values in an object are paired with a **key** with a colon `:` in between. Each **key:value pair** is separated by a comma `,`.
* We refer to a key:value pair whose value is a primitive data type as a **property**.
* We refer to a key:value pair whose value is a function as a **method**.

To reference the values of an object, we can use **bracket notation**:

```js
const myCat = {
    name: "Felix",
    age: 10,
    makeSound: function() {
        console.log("Meow");
    }
}

console.log(`My cat's name is ${myCat["name"]}`);
// My cat's name is Felix

console.log(`${myCat["name"]} is ${myCat["age"]}`);
// Felix is 10

console.log("Hi Felix!");
myCat["makeSound"]();
// Hi Felix
// Meow
```

Notice that the keys of the object are written as strings!

We can also use **dot notation** to reference the properties and methods of an object. It is easier to write and easier to read than bracket notation, but it doesn't work in all cases.

```js
const myCat = {
    name: "Felix",
    age: 10,
    makeSound: function() {
        console.log("Meow");
    }
}

console.log(`My cat's name is ${myCat.name}`);
// My cat's name is Felix

console.log(`${myCat.name} is ${myCat.age}`);
// Felix is 10

console.log("Hi Felix!");
myCat.makeSound();
// Hi Felix
// Meow
```

Times when bracket notation _must_ be used and dot notation won't work:
* keys written as strings with space in between
* keys written as strings starting with non-alphanumeric characters
* keys written as numbers
* keys referenced with variables

```js
const myObj = {
    "a key": 10,
    "!!!": 20,
    0: 30,
    "a": 40
}

const myKey = "a";
console.log(myObj["a key"]);    // 10
console.log(myObj["!!!"]);      // 20
console.log(myObj[0]);          // 30
console.log(myObj[myKey]);      // 40

console.log(myObj.a key);       // error
console.log(myObj.!!!);         // error
console.log(myObj.0);           // error
console.log(myObj.myKey);       // undefined
```

Note that `myObj.myKey` returns `undefined`. This is because `.myKey` is a valid key name to use with dot notation but there is no value in the object with that key so it returns `undefined`.

### Arrays

Often, we want to create objects that have a particular order. Suppose we wanted to make an object to represent the batting order of the New York Yankees:

```js
const battingOrder = {
    0: 'Torres',
    1: 'Judge',
    2: 'Rizzo',
    3: 'Stanton'
}
```

While this works, there is a special kind of object called an **Array** that is designed specifically for this purpose and whose syntax is simpler.

The same object, written as an array looks like this:

```js
const battingOrder = ['Torres', 'Judge', 'Rizzo', 'Stanton'];
```
* An array is created using square brackets `[]`
* The values (or **elements**) of an array are simply written separated by commas. 
* By default the first value has a key (or **index**) of `0`, the second has an index of `1`, and so on.

Like objects, we can reference the values in an array using **bracket notation** and providing the index of the value we want:

```js
const battingOrder = ['Torres', 'Judge', 'Rizzo', 'Stanton'];

const atBat = battingOrder[0];
const onDeck = battingOrder[1]
console.log(`${atBat} is at bat!`);
console.log(`${onDeck} is on deck!`);
// 'Torres is at bat!'
// 'Judge is on deck!'
```

We can use variables to help us count indexes too:

```js
const battingOrder = ['Torres', 'Judge', 'Rizzo', 'Stanton'];

let i = 0; // i is short for "index"
const atBat = battingOrder[i];
const onDeck = battingOrder[i+1]
console.log(`${atBat} is at bat!`);
console.log(`${onDeck} is on deck!`);
// 'Torres is at bat!'
// 'Judge is on deck!'
```

All arrays have a dynamic property called `length` that tells us the number of values in the array. We can use this value to help count indexes from the back of the array:

```js
const battingOrder = ['Torres', 'Judge', 'Rizzo', 'Stanton'];

console.log(`There are ${battingOrder.length} batters!`);
// There are 4 batters

const last = battingOrder[battingOrder.length-1];
const secondToLast = battingOrder[battingOrder.length-2];
console.log(`${last} is last!`);
console.log(`${secondToLast} is second to last!`);
// 'Stanton is last!'
// 'Rizzo is second to last'
```

### Mutability of Arrays and Objects

All objects (including arrays) are _mutable_ meaning their contents can be changed without changing the variable that they are held by.

We do so by referencing a particular value and then reassigning (`=`) that value.

```js
const myObj = {a: 10, b: 20};
myObj.a = 100;
myObj.b++;
console.log(myObj);
// { a: 100, b: 21 }

const myArr = [30, 40, 50];
myArr[0] = 'hi';
myArr[1] += 5;
console.log(myArr);
// ['hi', 45, 50]
```

Note that the variables `myObj` and `myArr` are declared using `const` and this code _doesn't_ throw an error. 

We're not actually reassigning the variable itself — only the values inside the object.

## Iteration

Iteration is the most beautiful combination of computing power and large data. It is the act of taking an array or object, and referencing each value in the array one at a time, and performing some action with each value.

Essentially, we can apply some change to EVERY value in an array, no matter how large, in only a few lines of code.

**Example:** Imagine that we had an array of usernames that we needed to all be lowercase. To do this, I might write:

```js
const usernames = ['BenSpector3', 'CarmCarm', 'MoBu'];
usernames[0] = usernames[0].toLowerCase();
usernames[1] = usernames[1].toLowerCase();
usernames[2] = usernames[2].toLowerCase();
console.log(usernames);
// [ 'benspector3', 'carmcarm', 'mobu' ]
```

Now, imagine that the array had 1000 usernames! Again, we can turn to loops to make this much easier for us.

Note that the code to lower-caseify a value in the array is the same each time with only one difference: the index changes from `0` to `1` to `2`. This looks like counting with a loop!

The same solution can be written using a loop like this:

```js
const usernames = ['BenSpector3', 'CarmCarm', 'MoBu'];
for (let i = 0; i < usernames.length; i++) {
    usernames[i] = usernames[i].toLowerCase();
}
console.log(usernamess);
// [ 'benspector3', 'carmcarm', 'mobu' ]
```

* This solution uses a counting variable `i` which is short for "index". It starts at `0` because the first index of every array is `0`.
* The boolean expression `i < usernames.length` makes sure that the index that we count up to is the last index of the array. Since the array's last index is always one less than the `usernames.length` property, if `i < usernames.length`, we will never go past the end of the array.
* Inside the code block, we reference `usernames[i]`. This is the key to making the code block reference a _different_ value on each loop. As `i` increments, `usernames[i]` will change!

**Objects can be iterated through as well** but it is much less common. This is mostly because objects typically represent a single person/place/thing whose values are all different types. As a result, it is not common to perform the same action on every value of an object.

That said, it can be done using a `for...in` loop. This example prints every key and value in the object.

```js
const user = {
    name: "Ben",
    email: "ben@marcylabschool.org",
    id: 123,
    isAdmin: true
}

for (let key in user) {
    console.log(key + ": " + user[key]);
}
// name: "Ben"
// email: "ben@marcylabschool.org"
// id: 123
// isAdmin: true
```
