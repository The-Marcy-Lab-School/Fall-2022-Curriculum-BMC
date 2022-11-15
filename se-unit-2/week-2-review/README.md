# unit-2-study-guide

# Variable Declaration Types
| Declaration | hoisting | scope              | reassignment |
|-------------|----------|--------------------|--------------|
| `var`       | yes      | function or global | yes          |
| `let`       | no\*     | block              | yes          |
| `const`     | no\*     | block              | no           |

\* technically `let` and `const` are hoisted but not initialized, AND if you try to reference them before they are declared, an error will be thrown... so everyone says they just aren't hoisted

# What gets hoisted
`var` and `function` *declarations* get hoisted, which means different things for functions and variables.

## Variables
```js
// What is written
1: console.log(name); // prints undefined
2: var name = 'tim';
3: console.log(name); // prints "tim"
```

```js
// JS essentially "hoists" things above even line 1
var name;
1: console.log(name); // prints undefined
2: name = 'tim';
3: console.log(name); // prints "tim"
4:
```
And so `console.log` prints `undefined` becuase the *assignment* isn't hoised, only the *declaration*. This is dumb. Why? Because `name` will be `undefined` in one place and `"tim"` in another even though there is only one assignment (`=`). It doesn't do what you think, but it also doesn't crash. 

This is why people never use `var` and use `let` or `const` instead. `let` and `const` will throw an error if you try referencing them before they are declared. 

Wait... errors are better? **Yes! We want to be notified unexpected behavior like this so we can find bugs in development quicker.**

## Function Declarations
```javascript
// What is written
1: sayHi();
2:
3: function sayHi() {
4:   console.log('Hi!');
5: }
```
```js
// Notice the *entire* declaration is hoisted
function sayHi() {
  console.log('Hi!');
}
1: sayHi();
2:
```
This code runs fine because the entire function is hoisted, so by line 1 it is already fully defined. Problems only come up if the function references outer variables that have not been defined yet:

```js
// this won't run becuase name isn't defined by line 1
1: sayHi();
2:
3: function sayHi() {
4:   console.log(`Hi ${name}!`);
5: }
6: let name = 'bob'; // notice the let declaration
```

```js
// this will run but will incorrectly print 'Hi undefined!' becuase the value isn't hoisted with the variable declaration
1: sayHi();
2:
3: function sayHi() {
4:   console.log(`Hi ${person}!`);
5: }
6: var person = 'bob'; // now declared with var
```
## Function Expressions
Also important to note, that **function declarations** are "fully" hoisted but **function expressions** are not. They only have their declaration hoisted, just like variables. This breaks things in most cases:

```js
1: sayHi();
2:
3: var sayHi = function() {
4:   console.log(`Hi ${person}!`);
5: }
```
The above won't work because this is what gets hoisted:
```js
var sayHi;
1: sayHi()
// BAD ALREADY
```
This will throw `TypeError: sayHi is not a function` becuase as of line 1, `sayHi` is not a function, but rather the primitive value `undefined`, which can't be called with `()`. This is why people again prefer function expressions over function declarations, it creates predictable errors when things are called *before* they are defined.

Of course, `let` and `const` expressions simply break because they aren't hoisted to begin with.

# Block vs Function Scope and Reaching up
`var` cares about function scoping, but not block scoping. `if...else` statements are block scoped, which means that `var` sees them as all one scope:

```js
if (Math.random() > .5) {
  var x = 2;
} else {
  var x = 3;
}

console.log(x)
```
This works just fine. But, this does not:

```js
function doIt() {
  if (Math.random() > .5) {
    var x = 2;
  } else {
    var x = 3;
  }
}

doIt();
console.log(x)
```
In order to fix this we have to take advantage of the fact that JS can reach up to higher scopes when looking for values.

```js
var x;
function doIt() {
  if (Math.random() > .5) {
    x = 2;
  } else {
    x = 3;
  }
}

doIt();
console.log(x)
```
By moving the declaration of the variable to the global scope, from the function `doIt()` can reach up to the higher scope and modify `x` _and_ we can log `x` from the global scope.

The same principle is required for `let` when we want to assign a variable inside of a block and use it outside of the block:

```js
// BREAKS
if (Math.random() > .5) {
  let x = 2;
} else {
  let x = 3;
}

console.log(x)
```

```js
// FIXED
let x;
if (Math.random() > .5) {
  x = 2;
} else {
  x = 3;
}

console.log(x)
```

# Mutations and immutability
[My full article on types for more information](https://itnext.io/javascript-interview-prep-primitive-vs-reference-types-62eef165bec8?sk=dfe9e25c7edcf40e48fc96478afc2f1e)
| Data Type | *Primitive* or __Reference__|
|-----------|------------------------|
| Number    | *Primitive*            |
| String    | *Primitive*            |
| Boolean   | *Primitive*            |
| Undefined | *Primitive*            |
| Null      | *Primitive*            |
| Symbol    | *Primitive*            |
| Object    | __Reference__          |
| Array\*   | __Reference__          |

\* Arrays are technically objects, but people often act like they're different

(FYI symbols are [neat and new to JS](https://flaviocopes.com/javascript-symbols/))

- "mutate" is a fancy way to say change or alter
- You can't mutate primitive data types
- You CAN mutate Reference types

## Pass by value
- Primitives data types pass only their value, they are not related to anything when used in assignments:

```js
let a = 1 // assign the value 1 to a
let b = a // assign the value held by a (1) to b
a += 1    // increment a

// a is now 2
// b is still 1
```
Since primitive data types only pass their value, essentially what you've written is exactly the same as:

```js
let a = 1
let b = 1
a += 1
```
Which makes it immediately clear that `a` and `b` aren't actually related in any way.

## Pass by reference
Unlike primitives, which are defined as a simple value and call it a day, reference types actually only save a "pointer" or "reference" to an object stored elsewhere in memory. This means assignments actually DO link to each other:

```js
let car1 = { type: 'suv' }; // assign a reference address (#93fa57) for the object to car1
let car2 = car1;            // assign the value held by car1 (the reference address #93fa57)
car1.type = 'hybrid';       // modify the object at referencea address #93fa57

console.log(car1);     // prints { type: 'hybrid' }
console.log(car2);     // prints { type: 'hybrid' }
```

> The address #93fa57 is just an example. JavaScript doesn't necessarily use hexcode to represent its references.

Both variables are referencing the same object, a change in one means a change in both. If you want to "clone" an object, that is make an unrelated copy, you do things like use the spread operator:

```js
let car1 = { type: 'suv' }; // assign a reference address (#93fa57) for the object to car1
let car2 = { ...car1 };     // create a separate object that has the same values as car1 and assign its reference address (#8f2b36) to car2
car1.type = 'hybrid';       // mutate the object stored at reference address #93fa57

console.log(car1.type); // hybrid
console.log(car2.type); // suv
```

# Pure Functions vs. Functions with Side Effects
A **"pure"** function is one that will return the same value every time if you call it with the same arguments. 

Here is an example of an "impure" function where we want to congratulate a person on aging one year:

```js
const sayHappyBirthday = function(person) {
  person.age++;
  return `Congrats on turning ${person.age}, ${person.name}!`;
}

const tom = { name: 'tom', age: 20 };
console.log(sayHappyBirtday(tom)); // Congrats on turning 21 tom!"
```

Note that this function is permanently *mutating* tom's age, which is possible because we *passed by reference* the `tom` object. A dead giveaway that you DON'T have a pure function is that given the same arguments, the function will behave differently. In this case, if we call it again, the return value changes:

```js
const tom = { name: 'tom', age: 20 };
console.log(sayHappyBirtday(tom));
// Congrats on turning 21, tom!
console.log(sayHappyBirtday(tom));
// Congrats on turning 22, tom!
console.log(sayHappyBirtday(tom));
// Congrats on turning 23, tom!
console.log(sayHappyBirtday(tom));
// Congrats on turning 24, tom!
```
One of the easiest ways to avoid mutations is instead of passing by reference with an object, you simply pass by value with the individual pieces of primitive data:

```js
const sayHappyBirthday = function(oldAge, name) {
  oldAge++
  return `Congrats on turning ${oldAge}, ${name}!`;
}

const tom = { name: 'tom', age: 20 };
console.log(sayHappyBirthday(tom.age, tom.name));
console.log(sayHappyBirthday(tom.age, tom.name));
console.log(sayHappyBirthday(tom.age, tom.name));
console.log(sayHappyBirthday(tom.age, tom.name));
// all print 'congrats on turning 21, tom!'
```
By passing in the primitive age value *instead* of the object itself, the variables `oldAge` and `name` are assigned copies of the primitive values, _not_ references. So, when we reassign `oldAge` with the `++` operator, nothing is actually changed on our original object. Remember, when we pass by value, nothing is actually linked. (by the way, it would be best in this case to simply ADD to the value instead of reassigning it, this was just a silly example)

NOTE: sometimes you DO want to mutate an object, and that's fine! Just know what you are doing, and do it on purpose.

# Lexical Scope
Consider the following example:

```js
function logX() {
  console.log(x)
}

const x = 1;
if (Math.random() > .5) {
  const x = 2;
  logX();
} else {
  const x = 3;
  logX();
}
```

Which `x` value will be logged, 1, 2, or 3? 

Ask yourself, when you wrote `logX`, is there an `x` defined in the local function scope? No? Ok, check the scope above for an `x` declaration. Did you find one? Yes, `const x = 1`. Then that's the `x` that `logX` will ***always*** refer to. 

This kind of scope, where we resolve the existence of duplicate variable names by looking for the closest variable in the _written code_, is called **Lexical Scope** (or _Static Scope_).

> "Lexical" means "relating to the words or vocabulary of a language".

### Dynamic Scope

Some other languages use another scope strategy called **Dynamic Scope**. Whereas Lexical Scope finds the closest variable values based on how your code is written, dynamic scope assigns variables by looking for variable values where a piece code is *executed*.

In the example above, the invocation of `logX()` would look for a value `x` closest to where the function was _called_, NOT where it was defined.

So, if the random number was `.6`, then the closest `x` would be `2`. If the random number was `.2`, then the closest `x` would be `3`.

With a dynamically scoped language, it can be harder to know what the value of a variable will be if it is defined outside of a function. As a result, they typically try to keep variables defined as locally as possible.

### Why JavaScript is Lexically Scoped

JS, like most modern languages, is NOT Dynmically Scoped because it renders unpredictable results. By being Lexically Scoped it makes problems like the one below simple:

```js
1: let name = 'Laisha';
2: 
3: function greet() {
4:   let name = `Paul`;
5:   console.log(`Hi ${name}!`);
6: }
7: 
8: greet();
9: console.log(`Hello ${name}!`);
```
To determine what prints what, you just ask yourself, where is the nearest `name` defined when the code was *written*? 
- On line 5, the nearest `name` is defined on line 4, so that's the one the function will use. 
- The final log, the nearest `name` is actually defined on line 1. That's because you can never reach *down* into a scope for a definition, you can only look in your current scope and above. By default, that leaves the only `name` in our current scope as the one defined on line 1.
