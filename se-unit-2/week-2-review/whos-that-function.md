# Who's that function?!?!

![](assets/whos-that-function.jpg)



Below are 5 popular `Array.prototype` methods (methods that every Array automatically has). 
* `slice` ([Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)) — returns a portion of an `array`, specified by a `start` and `end` index.
* `concat` ([Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat))— receives 2 `array`  and concatenates them into a new array which is returned.
* `push` ([Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push))— adds one or more `...values` to the end of an `array` and returns the new length of the array.
* `unshift` ([Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift))- adds one `value` to the beginning of an `array` and returns the new length of the array.
* `pop` ([Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop))— removes and returns the last value of an `array`.

Each function declaration below is an implemention of a popular Array method. It's up to you to figure out which is which!

------------------------------------------

#### Function 1

```js
function x(array, ...values) {
    for (let i = 0; i < values.length; i++) {
        array[array.length] = values[i];
    }
    return array.length;
}
```

<details><summary>Answer</summary><br>

It's `Array.prototype.push`! This implementation uses the `...` parameter syntax allowing any number of arguments to be passed after the `array` as an array of `values`. It iterates through the `values`, adding each to the end of `array` before returning the resulting length.

```js
let pets = ['dog', 'cat', 'parrot'];

push(pets, 'cat', 'lizard'); // returns 5

console.log(pets); //> ['dog', 'cat', 'parrot', 'cat', 'lizard']
```

</details>

------------------------------------------

#### Function 2

```js
function x(array1, array2) {
    return [...array1, ...array2];
}
```

<details><summary>Answer</summary><br>

It's `Array.prototype.concat`! This implementation accepts two arrays and uses the `...` spread syntax to spread each array into a new array `[]` which is immediately returned.

```js
const letters = ['a', 'b', 'c'];
const nums = [1,2,3]

const result = concat(letters, nums);

console.log(result); 
//=> logs  ['a', 'b', 'c', 1, 2, 3]
```

</details>

------------------------------------------

#### Function 3

```js
function x(array) {
    let toReturn = array[array.length - 1];
    array.length--;
    return toReturn;
}
```

<details><summary>Answer</summary><br>

It's `Array.prototype.pop`! This implementation first stores the last value of the `array` in the variable `toReturn` which is later returned. It then decrements the length of the `array` which removes the last element (but we still have it in `toReturn`).

```js
let pets = ['dog', 'cat', 'parrot'];
let removed = pop(pets); // 'parrot' 

console.log(pets); // => logs ['dog', 'cat']
```

</details>

------------------------------------------

#### Function 4

```js
function x(array, start = 0, end = array.length) {
    let toReturn = [];
    for (let i = start; i < end; i++) {
        toReturn[toReturn.length] = array[i];
    }
    return toReturn;
}
```

<details><summary>Answer</summary><br>

It's `Array.prototype.slice`! This implementation accepts an `array`, a `start` value, and an `end` value. It uses the default parameter syntax to set `start` to `0` and `end` to the length of the `array`. The implementation first creates an empty array `toReturn` which will later be returned. It then iterates, starting at the `start` index and stopping before the `end` syntax. On each iteration, the value at the current index `i` from the `array` is added to the end of `toReturn`.

```js
const pets = ['dog', 'cat', 'parrot', 'lizard'];

const firstHalf = slice(pets, 0, 2); // ['dog', 'cat']
const secondHalf = slice(pets, 2); // ['parrot', 'lizard]
const petsCopy = slice(pets); // ['dog', 'cat', 'parrot', 'lizard']
```

</details>

------------------------------------------

#### Function 5

```js
function x(array, value) {
    for (let i = array.length - 1; i >= 0; i--) {
        array[i+1] = array[i];
    }
    array[0] = value;

    return array.length;
}
```

<details><summary>Answer</summary><br>

It's `Array.prototype.unshift`! This implementation only allows for one `value` to be added to the beginning of the `array`. It iterates through the `array` starting from the last index in the array. On each iteration, the value at index `i` is assigned to `array`'s next index `i + 1`. After the loop, the value at index `0` will have been assigned (saved) at index `1` and can be safely overwritten by `value`. Then, the length of the `array` is returned.

```js
array = [1,2,3,4,5]
console.log(unshift(array, 'a')) // 6
console.log(array); // ['a', 1, 2, 3, 4, 5]
```

</details>
