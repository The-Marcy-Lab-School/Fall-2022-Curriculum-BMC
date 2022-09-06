# Type Conversion and Coercion in JavaScript

## Type Conversions
There are times when we may want to convert a value into value of a different type. For example, you may ask the user for their age in your application. If you use the `prompt()` method, you will receive this input as a string. However, if you want to perform a mathematical operation on this value, you need a number. Let's discuss ways that we can _convert_ between types in JavaScript.

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

### Converting Strings to Numbers
We can convert strings to numbers using the following:
1. The `Number()` function:
   ```javascript
   Number("85"); // 85
   Number("0.99"); // 0.99
   Number("-919"); // -919
   Number("93cd"); // NaN
   ```

2. The `parseInt()` function can be used to convert a string into an number in the form of an integer. Note: The `parseInt()` function takes a second argument which represents the _base value_ of the number to be parsed. It is important to note that this base value does 
**not** always default to 10 so, generally, it's best to specify. More about `parseInt()` [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
   ```javascript
   parseInt("85", 10); // 85
   parseInt("0.39", 10); // 0
   parseInt("2.999", 10); // 2
   parseInt("-919", 10); // -919
   parseInt("eleven", 10); // NaN
   ```
   Notice, that `parseInt()` always returns and integer. If passed a decimal (or _float_), this function will ignore the decimal places and return the signed (positive or negative) integer.

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
   +("85"); // 85
   +("0.99"); // 0.99
   +("-919"); // -919
   +("93cd"); // NaN
   ```

### Converting to Boolean Values
Any value in JavaScript can be converted to a boolean value. In the programming world, you will often hear people refer to certain values as _truthy_ or _falsy_. These are just cute names that we use to describe values that _evaluate to_ `true` or `false`, respectively. Generally speaking, most values in a language will evaluate to `true` while a fewer number of select values will evaluate to `false`. In JavaScript, there are **six falsy values**. These values evaluate `false` while every other value evaluates to `true`.
  1. `false`
  2. `0`
  3. Any empty string (`""`, `''`, or ````)
  4. `null`
  5. `undefined`
  6. `NaN`

Since every JavaScript value can be evaluated to a boolean value, we can use any value in a conditional statement:
```javascript
let foo = 0;

if (foo) {
  console.log("foo!");
} else {
  console.log("bar");
}

// -> "bar"
```

However, there may be times when you want to explicitly convert a value to a boolean value. There are two primary ways we can do this:
1. We can use the `Boolean` function:
   ```javascript
   Boolean(null); // false
   Boolean("null"); // true
   Boolean("reuben"); // true
   Boolean(99.99); // true
   Boolean(0); // false
   Boolean(undefined); // false
   Boolean(""); // false
   Boolean(NaN); // false 
   ```

2. We can use `!!`. But hear me out to learn why this works...
`!` used as an operator is called _the logical NOT_. It returns the opposite boolean value as it's operand. Example:
  ```javascript
  !true; // false
  !false; // true
  ```
  However, if it's operand isn't a boolean value, it implicitly converts (or _coerces_) it into a boolean value first and _then_ returns the opposite value.
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

## Type Coercion
One of the most controversial features of JavaScript is _type coercion_. In other programming languages, attempting to perform operations on incompatible data types will raise an error. JavaScript on the otherhand is lenient. The language will make an assumption based on a predefined set of rules to determine how it could implicitly change (or _coerce_) the data type into one that the operation can be performed on. Though, you may be thinking, "Oh how nice of you, JavaScript. Thanks for letting me be lazy with my types 💪🏽", it actually can turn out to be a major headache when type coercion leaves you with unexpected results. For example:
```javascript
> "100" + 1 // "1001"
> ba" + + "Marcy Lab School" + "a" // "baNaNa"
> true + 100 // 101
```
Want to see more JS silliness, check out this ridiculously funny [lightning talk video](https://archive.org/details/wat_destroyallsoftware).

The good news is that, as odd as JavaScript type coercion may be, you can understand most (but, unfortunately, not all) of its oddities by remembering few important rules. Let's learn more about them below:
#### **Rule 0** - Number Conversion Rules of Thumb:
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

#### **Rule 1:** 
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

#### **Rule 2:**
When using any other arithmetic operator (`-`, `/`, `%`, `*`), both arguments are coerced to numbers and the operator is applied.
```javascript
'50' - '1' // 49
50 - '1' // 49
50 - 'one' // NaN (because 50 - NaN == NaN)
39 / true // 39
39 / false // Infinity
100 * "5" // 500
``` 

#### **Rule 3:**
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

## The Moral of the Story: Be Explicit
As you can see, implicit type coercions in JavaScript are tricky! I want you to know these rules because they will certainly come in handy when debugging in the future. Bugs resulting from incorrect types or type coercions are very common. They are so common, in fact, that people have written entirely new _flavors_ of JavaScript that _force_ you to be explicit about the types that you use. [TypeScript](https://www.youtube.com/watch?v=D6or2gdrHRE) is one of the fastest growing languages in the world for a reason!

While we won't be learning TypeScript, there are two things that you can do to save yourself (and your teammates!) some type headaches:
1. Don't rely on implicit type coercion, even when you are _certain_ that you know what the outcome will be. Be explicit!
2. Use _strict_ equality comparisons over _abstract_ equality.

In short, don't try to be cute 🙅🏿‍♂️. Instead, be clear and explicit. 



