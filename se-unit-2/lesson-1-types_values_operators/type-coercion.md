# Type Conversion and Coercion in JavaScript

**Table of Contents**
- [Type Conversions](#type-conversions)
   - [Converting Strings to Numbers](#converting-strings-to-numbers)
   - [Converting Numbers to Strings](#converting-numbers-to-strings)
   - [Truthy and Falsey — Converting to Boolean Values](#truthy-and-falsey-converting-to-boolean-values)
      - [A Weird (But Quick) Boolean Conversion Approach](#a-weird-but-quick-boolean-conversion-approach)
   - [The Rules of Automatic Type Coercion](#the-rules-of-automatic-type-coercion)
      - [Rule 0](#rule-0)
      - [Rule 1:](#rule-1)
      - [Rule 2:](#rule-2)
      - [Rule 3:](#rule-3)
   - [Equality Operators](#equality-operators)
      - [The Moral of the Story: Be Explicit](#the-moral-of-the-story-be-explicit)
   - [Logical Operators](#logical-operators)
      - [And](#and)
      - [Or](#or)
      - [Short Circuiting (Be cautious of this)](#short-circuiting-be-cautious-of-this)
      - [Not](#not)

## Type Conversions
You are writing a simple application that asks the user for 2 numbers and then prints their sum. It looks like this:

```js
let num1 = prompt("choose your first number");
let num2 = prompt("choose your first number");
let sum = num1 + num2;

console.log(`The sum of ${num1} and ${num2} is ${sum}`);
```

There's a problem though, when the user enters `2` and `3`, they are told the sum is `23`. Huh?!

Let's use the `typeof` operator to see the type of the value returned by `prompt()`


```js
const num = prompt("choose a number");
console.log(typeof num); // String
```

The `prompt` function returns a string. So, when we write `num1 + num2` we are concatenating those two strings, not performing addition on their values! **We need to convert the type of `num1` and `num2` from strings to numbers**.

---

**💻 Practice:** Fix [the program](https://replit.com/@BenSpector/string-to-number#index.js) using one of the String to Number conversion techniques below.

---

### Converting Strings to Numbers

There are 4 ways we can convert strings to numbers.
1. The `Number()` function:
   ```javascript
   Number("85"); // 85
   Number("0.99"); // 0.99
   Number("-919"); // -919
   Number("93cd"); // NaN
   ```

2. The `parseInt()` function can be used to convert a string into an number in the form of an integer. Note: The `parseInt()` function takes a second argument which represents the _base value_ of the number to be parsed. It is important to note that this base value does 
**not** always default to `10` so, generally, it's best to specify. More about `parseInt()` [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
   ```javascript
   parseInt("1001", 10); // 1001
   parseInt("1001", 2); // 9 (8 + 1)
   parseInt("0.39", 10); // 0
   parseInt("2.999", 10); // 2
   parseInt("-919", 10); // -919
   parseInt("eleven", 10); // NaN
   ```
   > Notice, that `parseInt()` always returns and integer. If passed a decimal (or _float_), this function will ignore the decimal places and return the signed (positive or negative) integer.

3. The `parseFloat()` function will return a _float_ or a number with a decimal if one is present; otherwise, it will return an integer. Like `parseInt()`, `parseFloat()` takes an optional second argument `radix` which represents the numerical base of the number to be parsed.
   ```javascript
   parseFloat("85", 10); // 85
   parseFloat("85.0", 10); // 85
   parseFloat("85.1", 10); // 85.1
   parseFloat("-85.1", 10); // -85.1
   parseFloat("eleven.1", 10); // NaN
   ``` 
**Note:** For all three of these functions, if the string cannot be converted to a number, the function returns `NaN`.

4. The _unary plus operator_, `+`, works just like the `Number` function:
   ```javascript
   +"85"; // 85
   +"0.99"; // 0.99
   +"-919"; // -919
   +"93cd"; // NaN
   +"5" + +"10" // 15
   ```

### Converting Numbers to Strings
We have two options at our disposal to convert numbers to strings.
1. We can use the `toString()` method:
   ```javascript
   (0).toString(); // "0"
   (99.99).toString(); // "99.99"
   (-125.97).toString(); // "-125.97"
   ```

2. We can use the `String` function:
   ```javascript
   String(0); // "0"
   String(99.99); // "99.99"
   String(-125.97); // "-125.97"
   ```

### Truthy and Falsey — Converting to Boolean Values
We can convert values to Booleans using the `Boolean` function:

```javascript
// The six falsey values
Boolean(null); // false
Boolean(""); // false (same with any other empty string)
Boolean(0); // false
Boolean(undefined); // false
Boolean(NaN); // false 
Boolean(false); // false 

// Everything else is truthy
Boolean(true); // true
Boolean({}); // true
Boolean([]); // true
Boolean(99.99); // true
Boolean("reuben"); // true
Boolean("null"); // true
```

In the programming world, you will often hear people refer to certain values as _truthy_ or _falsy_. These are just cute names that we use to describe values that _evaluate to_ `true` or `false` when _coerced_ (made to change). 

Boolean coercion most commonly occurs when we write `if` statements. If a non-boolean value is provided as the condition of an `if` statement, the JavaScript interpreter will automatically coerce the value. 

```js
if ("" || 0 || null || undefined || NaN) {
    console.log("Will this print?")   
} else {
    console.log("Nope!")
}
```

In this example, we use automatic coercion to let us check to see if the `name` variable holds a falsey value before printing the name.

```js
let name = prompt("what is your name?");

if (name) { // Instead of if (name !== "")
    console.log(`Hello ${name}`);
} else {
    console.log(`No name was provided`)
}
```

As we learned, the `prompt` function returns a string. However, `if` statements expect a Boolean value, so it converts `name` from a String to a Boolean. If the string is empty, it will not greet the user. 

**Caution!** Beware of using this approach too liberally. Without care, you can run into unexpected behavior:

```js
function getArrayValueAtIndex(array, index) {
   if (!array || !index) {
      return "Missing arguments"
   }

   return array[index];
}

const fruits = ['apples', 'banana', 'cherry'];
const result1 = getArrayValueAtIndex(fruits, 2); // 'cherry'
const result2 = getArrayValueAtIndex(fruits, 0); // 'apple'... right?

console.log(result1, result2); // "cherry", "Missing arguments" 

```



#### A Weird (But Quick) Boolean Conversion Approach

We can use `!!value`. Hear me out to learn why this works...
`!` used as an operator is called _the logical NOT_. It returns the opposite boolean value as it's operand. Example:
  ```javascript
  !true; // false
  !false; // true
  ```
  However, if its operand isn't a boolean value, it implicitly converts (or _coerces_) it into a boolean value first and _then_ returns the opposite value.
  ```javascript
  !("test"); // false... because "test" is truthy and the `!` returns the opposite
  !(0); // true
  !(100); // false
  !(null); // true
  ```
  Thus, since `!` evaluates truthiness and returns the opposite boolean value, we can just use it again to return the original equivalent boolean value. Because of its brevity, you will see this used more often than the `Boolean` function:
  ```javascript
  !!(null); // false
  !!("positive"); // true
  !!("negative"); // true
  !!(undefined); // false
  !!(""); // false
  !!(0); // false

  let foo = NaN;
  !!foo; // false;
  ```

### The Rules of Automatic Type Coercion
One of the most controversial features of JavaScript is _type coercion_. 

In other programming languages, attempting to perform operations on incompatible data types will raise an error. Instead, JavaScript will try to make it work. But this can give us some unexpected results:

```javascript
> "100" + 1 // "1001"
> ba" + + "Marcy Lab School" + "a" // "baNaNa"
> true + 100 // 101
```

The language will make an assumption based on a **predefined set of rules** to determine how it could _coerce_ (force to change) the data type into one that the operation can be performed on. 

> Want to see more JS silliness? Check out this funny [lightning talk video](https://www.destroyallsoftware.com/talks/wat).

#### Rule 0

Number Conversion Rules of Thumb:
* If it looks like a number, it gets cast as a number.
  ```javascript
  Number('5'); // 5
  +(134.7); // 134.7
  ```
* `true` converts to `1`.
* `false` and `null` convert to `0`.
* Empty strings and white space convert to `0`.
  ```javascript
  Number(''); // 0
  +(' '); // 0
  Number("    "); // 0
  +('\n'); //0
  ```
* Everything else (including `undefined`) convert to `NaN`.

#### Rule 1:
When using the binary plus `+` operator, if one or more arguments is a string, both arguments will be converted to strings and concatenated together. Otherwise, both arguments will be coerced into numbers and added using addition operator.
```javascript
'abc' + 123 // "abc123"
789 + 'xyz' // "789xyz"
null + "orama" // "nullorama"
"he's " + undefined // "he's undefined" 
null + true // 1
false + 50 // 50
undefined + true // NaN
```

#### Rule 2:
When using any other arithmetic operator (`-`, `/`, `%`, `*`), both arguments are coerced to numbers and the operator is applied.
```javascript
'50' - '1' // 49
50 - '1' // 49
50 - 'one' // NaN (because 50 - NaN == NaN)
39 / true // 39
39 / false // Infinity
100 * "5" // 500
``` 

#### Rule 3:
Object coercion is weird and doesn't play nicely across browsers. We will go more in depth on object coercion later in the course but, for now, it's important to know that **objects are often (but not always) converted to strings**. You will often see objects converted to strings in the form of `[object Object]`. Arrays converted to strings return a comma-separated list of elements, by default.
```javascript
42 + {} // "42[object Object]"
["paul", "peter", "cielo"] + 100 // "paul,peter,cielo100"
```

## Equality Operators
There are two operators that we can use to test for equality in JavaScript:
1. The **strict equality operator**, `===`:
   This operator only returns `true` if boths operands are of the same type _and_ the same value. In other words, no type coercion is performed when using the strict equality operator.
   **Note:** You may also hear this called the _identity operator_.
   ```javascript
   3 === 3   // true
   3 === '3' // false
   "true" === true // false
   true === true // true
   1 + 5 === 6 // true
   1 + 5 === '6' // false
   ```

2. The **abstract equality operator**, `==`:
   This operator converts the operands if they are not of the same type, then applies a strict comparison. Generally speaking, strings, numbers, and booleans are converted to numbers before comparison:
   ```javascript
   85 == "85" // true
   0 == false // true (because false converts to 0)
   1 == true // true
   85 == 'eighty-five' // false (because 'eighty-five' converts to NaN)
   false == "  " // true (because the whitespace string converts to 0)
   ```

   `null`, `undefined`, and `NaN` have different rules.
   * `null` and `undefined` are strictly equal to themselves and abstractly equal to each other. They are not abstractly equal to no other value.
   ```javascript
   null == undefined // true
   undefined == null // true
   null == null // true
   undefined == undefined // true
   null === null // true
   undefined === undefined // true
   null == false // false
   undefined == false // false
   null == 0 // false
   undefined == '' // false
   ```
   * `NaN` is neither strictly nor abstractly equal to any value. Not even itself 😳. **`NaN` is the only JavaScript value that is not equal to itself.**
   ```javascript
   NaN == 0 // false
   NaN == NaN // false
   NaN === NaN // false
   NaN !== NaN // true

   Math.sqrt(-1) // NaN
   Math.sqrt(-1) == NaN // false... bruh
   ```
   **Note:** To check if a number is `NaN` we can use the `Number.isNaN()` method.
   ```javascript
   Number.isNaN(NaN); // true
   Number.isNaN(Math.sqrt(-1)); // true
   ```

### The Moral of the Story: Be Explicit
As you can see, implicit type coercions in JavaScript are tricky! I want you to know these rules because they will certainly come in handy when debugging in the future. Bugs resulting from incorrect types or type coercions are very common. They are so common, in fact, that people have written entirely new _flavors_ of JavaScript that _force_ you to be explicit about the types that you use. [TypeScript](https://www.youtube.com/watch?v=D6or2gdrHRE) is one of the fastest growing languages in the world for a reason!

While we won't be learning TypeScript, there are two things that you can do to save yourself (and your teammates!) some type headaches:
1. Don't rely on implicit type coercion, even when you are _certain_ that you know what the outcome will be. Be explicit!
2. Use _strict_ equality comparisons over _abstract_ equality.

In short, don't try to be cute 🙅🏿‍♂️. Instead, be clear and explicit. 

## Logical Operators

### And

`&&` is the AND operator. It returns `true` if both operands evaluate to `true`.

```js
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
```

### Or

`||` is the OR operator. It returns `true` if either of its operands evaluate to `true`.

```js
console.log(true && true); // true
console.log(true && false); // true
console.log(false && true); // true
console.log(false && false); // false
```

#### Short Circuiting (Be cautious of this)

**Using the `&&` operator**: If the first operand is `false`, it won't evaluate the second operand to save time, since the operator already knows that both sides can't be `true`. This is useful for concisely writing conditional logic. For example, The two pieces of code below produce the same result.

```js
const condition = true;
if (condition) {
    console.log("It was true!"); // Prints "It was true!"
}

condition && console.log("It was true!"); // Prints "It was true!"
```

If `condition` were `false`, then the `if` statement would be skipped. Similarly, the `&&` operator will _short circuit_, meaning it won't execute the `console.log` statement since it knows that both sides can't be `true`.

**When the `||` operator** is used with non-Boolean values, instead of returning `true`, it will return the first _truthy_ value. 

```js
console.log('a' || 'b'); // 'a'
console.log(3 || true); // 3
console.log(0 || 'hi'); // 'hi'
console.log(undefined || 'Boo!'); // 'Boo!'
```

This can be useful if we want to set a default value. Imagine we have a function that might return a value, or it might return `undefined`. We want to store the result in a variable `result` if the function returns a value, but if it returns `undefined` we can set a default of `'banana!'`.

```js
const result = inconsistentFunction() || 'banana!';
```


* If `inconsistentFunction()` returns `undefined`, the `||` operator will return the first truthy value, in this case the string `'banana!'`. 

### Not

The `!` operator returns the opposite boolean value 