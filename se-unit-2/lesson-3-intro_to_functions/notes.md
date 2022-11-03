# Functions 

## Essential Questions

### Why are functions a key feature of any programming language?
- Less repetition
- Break up our program into smaller pieces
- Define reusable functionality (abstraction through parameters and arguments)


```js
function rollDice(numSides) {
  let diceRoll = Math.ceil(Math.random() * numSides)
  console.log(diceRoll)
}


rollDice(6); // roll 6 sided
rollDice(20); // roll 20 sided
```

### What is the difference between a function argument and a function parameter?
- parameter is a placeholder (shadow/understudy)
- argument is the actual value to take a parameter's place (star)

### How do we declare functions in JavaScript?
- function declaration (using function keyword)

```
function name(param1, param2) {
    return "something"
}
```

- function expression (storing an anonymous function in a variable)

```js
const name = function(param) {
    return "something";
}
```

- arrow function (also storing a function in a variable using () => {} syntax)

```js
const name = (param) => "something";
```

### How does a function declared using function declaration notation differ from a function declared as function expression?

- function declarations are hoisted
- function expressions / arrow functions are NOT

### What are arrow functions? In what ways are they similar to function expressions? In what ways are they different?

- arrow functions are used mostly when passing functions as arguments:
- arrow functions and function expressions are both stored in variables

```js
const mahaba = ['ben', 'carmen', 'motun]
```

### What does hoisting mean and how does it impact the way that we write our JavaScript programs?

Hoisting is a behavior of JavaScript where **Function Declarations** are pulled to the top of their respective scope. This means that we can call functions _before_ we declare them. 

This code will work:

```js
sayHello("Ben"); // prints "Hello Ben"

function sayHello(name) {
    console.log(`Hello ${name}`);   
}
```

### How does JavaScript handle extra arguments during function invocation? What about missing arguments?

- JavaScript ignores extra arguments
- JavaScript treats missing arguments as `undefined`

## Tips & Best Practices
* Declare all new variables at the top of their scope (if you can)
* Use function declaration syntax to create helper functions at the bottom of your file.
* Use arrow functions instead of function expressions for cleaner syntax


### Other Notes

Declaration vs. Initialization

```
// Declaration
let age;

console.log(age); // undefined

// Initialization (assignment)
age = 27; 

console.log(age); // 27


// Declaration + Initialization
const name = 'ben';
```
