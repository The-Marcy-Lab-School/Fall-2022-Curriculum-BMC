# Unit 2 Essentials Vocabulary

**Table of Contents**:
- [Expressions](#expressions)
- [Variables](#variables)
- [console.log()](#console-log())
- [Statements](#statements)
- [Conditional Statements](#conditional-statements)
    - [If Statements](#if-statements)
    - [Else Statements](#else-statements)
    - [Else If Statements](#else-if-statements)
- [Functions](#functions)
- [Function Returns](#function-returns)
- [Function Parameters and Arguments](#function-parameters-and-arguments)

## Expressions

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
Math.max(3,5)   // evaluates to 5
console.log()   // evaluates to undefined
```

## Variables

Variables are used to "store" expressions and give them a name. All of the expressions above can be stored in a variable. Declaring a variable the variable name into an expression!

The variable name is an expression? Yes! When we reference that variable name, it evaluates to (or "returns") the value it holds.

```js
const sum = 5 + 5;              
sum; // evaluates to 10
const lessThan = 3 < 10;        
lessThan; // evaluates to true
const aBeforeB = "a" < "b";     
aBeforeB; // evaluates to true
const concat = "hello" + 1;     
concat; // evaluates to "hello1"
const and = true && false;      
and; // evaluates to false
const why = 8 * "hello";        
why; // evaluates to NaN
const itsNull = null;           
itsNull; // evaluates to null
const larger = Math.max(3,5)    
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

## Statements

Statements are the most basic building block of a program. A statement makes some permananent change to our program by doing something such as storing an expression in a variable (which designates some memory for that variable) or invoking a function (which triggers other code to execute). 

Ultimately, a program is a series of statements written in a particular order to accomplish some end result. All of the following are considered statements:

* A variable declaration
* A function declaration
* A function invocation (including invoking built-ins like `console.log()`)
* An `if` statement
* A `for` / `while` / `do...while` loop

## Conditional Statements

### If Statements

If statements enable us to change up the "control flow" of our program. Control flow refers to the order in which statements are executed. Typically, every statement is executed one at a time, top-to-bottom:

```js
console.log('a'); // prints a
console.log('b'); // prints b
console.log('c'); // prints c
```

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
let flipResult = undefined; // we don't know what this will be yet!
const randomNumBetween0and1 = Math.random();
if (randomNumBetween0and1 > 0.5) {
    flipResult = 'Heads';
} else {
    flipResult = 'Tails';
}
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

We invoke a function by writing the function's name and adding parentheses after `()`. Each time we invoke a function, every line of code in that function will be executed.

> Note that all code inside the function's `{}` are indented. This improves readability.

## Function Returns

In the first section, we learned that function calls (a.k.a "function invocations") are expressions because they evaluate to a value. 

All function invocations evaluate to `undefined` unless specified with the `return` keyword. The `flipCoin()` function above has no `return` statement (a line of code using the `return` keyword) so it evaluates to `undefined`

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

const whatFlipCoinReturns = flipCoin(); 

console.log(whatFlipCoinReturns); // undefined
```

So far, this `flipCoin()` function has operated in isolation. It has no affect on the other invocations of `flipCoin()` nor does it have any affect on any other statements in our program. But what if we wanted to count how many heads are produced by all of the function invocations? How can we access the value `flipResult` produced by each function `invocation` so that we may count them?

**A `return` statement can be added to the end of a function to change what its function invocations evaluate to.** This allows us to use values created within a function _outside_ of that function.

We can count the number of heads like so:

```js
function flipCoin() {
    let flipResult = undefined;
    const randomNumBetween0and1 = Math.random();
    if (randomNumBetween0and1 > 0.5) {
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