# Review

For each of the following:
1. predict what will happen. 
2. Then, run the code!
3. Did you prediction match reality?

We'll do the first one together.

## Problem 0

```js
let x = 10;

console.log(x);

if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
}

console.log(x + z);
```

## Problem 1.1

```js

function sayItLoud() {
  console.log(`${greeting}!!!`)
}

let greeting = "Hello!"

sayItLoud();

```

## Problem 1.2

```js
function sayItLoud() {
  console.log(`${greeting}!!!`)
}

sayItLoud();

let greeting = "Hello!"
```

## Problem 1.3

```js
let greeting = "Hello!"

sayItLoud();

function sayItLoud() {
  console.log(`${greeting}!!!`)
}
```

## Problem 2

```js
const isSunny = true;

if (isSunny) {
  let status = 'No umbrella needed!';
} else {
  let status = 'Better wear a raincoat!'
}

console.log(status);
```

## Problem 3

```js
const hour = 10;

function amOrPm() {
    if (hour < 0 || hour > 23) {
        return "invalid time";
    }
    
    if (hour < 12) {
        return "am";
    } else {
        return "pm";
    }
}

const test1 = amOrPm(10);
const test2 = amOrPm(14);
const test3 = amOrPm(20);
const test4 = amOrPm(25);
```

## Problem 4 

Remember, google is your friend! People often will copy and paste their errors to seek out help

```js
function doubleArray(arr) {
    debugger;
    for (let i = 0; i < arr.length; i++) {
        arr.push(arr[i] * 2)
    }

    return arr;
}

const result = doubleArray([1, 2, 3]);
```
