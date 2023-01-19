# Big O Notation

### What is runtime?

Runtime is a theoretical calculation of "how long" a particular algorithm takes to execute. "How long" can be measured by counting the number of operations / statements in the algorithm.

For example, getting the first value of an array requires just one operation:

```js
const letters = ['a', 'b', 'c'];
const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13, "..."];

function getFirstValue(arr) {
    return letters[0];
}

const firstLetter = getFirstValue(letters); // 'a'
const firstNum = getFirstValue(nums); // 1
```

### Runtime Efficiency

Notice that the same number of operations (1) can be used regardless of how big the array is. This indicates that the `getFirstValue` function uses a _very_ efficient algorithm. A less efficient algorithm might take longer as the size of the input increases.

An algorithm like this one, in which the number of operations does NOT change as the input size changes is said to have a **constant runtime**.

What about a more complicated algorithm, like determining if a value is in an array?

<details><summary>**Q: How would you write such a function? How does the size of the input impact the number of operations required?**</summary>

```js
const letters = ['a', 'b', 'c'];
const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13, "..."];

function isInArray(arr, value) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}
```

This algorithm has **linear runtime** which means that as the input increases in size, so does the _expected_ number of operations in the _worst case scenario_.

</details>

## A More Complex Algorithm

Consider the scenario: we have an array of letters in some random order and I want to know if a particular letter is in the array.

```js
const letters = ['a', 'z', 'x', 'b', y', 'c'];
```

The algorithm for solving this requires us to iterate through every single value in the array, checking if each one is the letter we are looking for:

```js
function isInArray(arr, value) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}

const letters = ['a', 'z', 'x', 'b', y', 'c'];
isInArray(letters, 'a');
isInArray(letters, 'x');
isInArray(letters, 'c');
```

<details><summary>**Q1: How many iterations of the `for` loop will occur to find the letter `'a'`? What about the letter `'x'`? What about `'c'`?**</summary>

Finding the letter `'a'` takes one iteration. Finding `'x'` takes 3 iterations. Finding `'c'` takes 6 iterations. 
</details>

<details><summary>**Q2: What is the worst-case scenario for this kind of algorithm? What is the best-case scenario?**</summary>

The best-case scenario is finding the letter at the beginning of the array. The worst-case scenario is finding the letter at the end of the array.

</details>

<details><summary>**Q3: How many iterations would it take in th worst-case scenario if there were 100 values in the array?**</summary>
In an array of 100 values, the worst-case scenario would require 100 iterations.
</details>

### Worst-Case Runtime

How can I measure the efficiency of this algorithm if the number of operations changes depending what value I happen to be looking for?

We focus on the **worst-case runtime**.

<details><summary>**Q: Why should we focus on the worst-case runtime?**</summary>

By focusing on the worst-case scenario, we can be prepared for that scenario. Maybe we are on the IT team and need to know how much computing power to provide. If we use the worst-case runtime as our benchmark, we can be prepared for anything. 

</details>

The `isInArray` algorithm has a worst-case runtime equal to the number of elements in the array. If the array has 5 elements, the worst-case scenario takes 5 operations. If the array has 100 elements, the worst-case scenario takes 100 operations.

<details><summary>**Q: If we have an array with `n` elements, what is the worst-case scenario number of operations?**</summary>

The worst-case scenario is `n` operations! This kind of runtime, where the number of operations increases at the same rate as the size of input is called **linear runtime**.

</details>


## Big O

**Big-O notation** is a short-hand notation style to help programmers (and mathematicians) indicate the runtime of an algorithm.

To figure out the Big-O notation for an algorithm, you should:
1. Count (or calculate) the number of operations required.
2. Keep only the _largest term_
3. Remove any coefficients.

Huh? Let's walk through it.

#### Step 1: Count the operations

Consider this algorithm. How many operations does it perform?

```js
function printArray(arr) {
    let i = 0;
    while (i < arr.length) {
        console.log(arr[i])
        i++;
    }
}
```

Assuming we have some input `arr` with `n` elements, the algorithm will:
* assign `i = 0` once
* check if `i < arr.length` is true `n` times
* print `console.log(arr[i])` `n` times
* increment `i++` `n` times

This means our total operations can be written as: `1 + n + n + n` operations (or `1 + 3n`). If we have an array of `10` elements, it will perform `32` operations.

#### Step 2: Keep the largest term

Our algorithm takes `3n + 1` operations. The largest term here is `3n` since it can grow to be quite large as our array size grows whereas `1` will always be `1` no matter the array size.

#### Step 3: Remove Coefficients

A **coefficient** is just the number that we multiply a variable by and we want to remove it. 

So far we have a runtime of `3n` so if we remove the coefficient `3` then we just are left with a runtime of `n`. 

In Big-O notation, we take the runtime and put it inside `O(runtime)` so we end up with a runtime of `O(n)`! 🎊

### Big-O Runtimes to Know:

Everything essentially boils down to 7 Big-O runtimes but the 5 below are the ones you'll most commonly encounter.

| Runtime Name 	| Big O Notation 	| Example                                                                                                	|
|--------------	|----------------	|--------------------------------------------------------------------------------------------------------	|
| Constant     	| O(1)           	| Getting the first element in an array                                                                  	|
| Logarithmic  	| O(log n)       	| Performing binary search (split the array in half, determine which half to look in, and repeat)        	|
| Linear       	| O(n)           	| Finding a value in an array                                                                            	|
| Log-Linear   	| O(n log n)     	| Repeatedly break an array into smaller and smaller parts, sort each part, then join them back together 	|
| Quadratic    	| O(n^2)         	| Selection or Bubble Sort                                                                               	|

Other runtimes include exponential (`O(2^n)`) and factorial (`O(n!)`) but we won't cover these.

![](./img/big-o-complexity-growth.jpeg)

### Big-O Runtime Challenge:

What is the Big-O notation for the algorithm below?

```js
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[i]) {
				let temp = arr[i];
        		arr[i] = arr[j];
        		arr[j] = temp; 
			}
		}
	}
}
```

https://visualgo.net/en/sorting

## Examples 

### Constant: O(1)

These operations take the same amount of time regardless of the size of the input

```js
function push(arr, value) {
    arr[arr.length] = value;
}

function pop(arr) {
    arr.length--;
}
```

### Logarithmic: O(log n)

These problems typically involve dividing the size of the input in half on each iteration. The most common example of this is a **binary search algorithm**. 

Imagine you are looking for the word "Programming" in a dictionary. We want to get to the "P" words to find it. You know the dictionary is in alphabetical order but there are thousands of pages. You wouldn't just flip through the pages from the start. That would take forever.

To find the "P" words, we can use the binary search algorithm like this.
* Go to the middle of the dictionary. You'll likely end up somewhere in the "M" range
* "Programmer" comes after "M" so we want to now focus on the subset of the dictionary from "M-Z". Now the "problem size" is 1/2 of the original dictionary
* Go to the middle of the subset "M-Z" and you'll get to around "S"
* "Programmer" comes before "S" so we want to focus on the subset of the dictionary from "M-S". Now the "problem size" is 1/4 of the original dictionary
* Go to the middle of the subset "M-S" which gets us to "P"!

With a dictionary with 26 possible letters that a word can start with, we arrived at the letter "P" in only 3 repititions!

### Linear: O(n)

As the size of the input array grows, the runtime increases by the same amount:

```js
function indexOf(arr, valueToFind) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === valueToFind) {
            return i;
        }
    }
    return -1;
}
```

### Quadratic: O(n log n)

We need to perform some logarithmic algorithm once per element in an array.

### Quadratic: O(n^2)

As the size of the input array grows, the runtime increases by a factor of n:
* an array of size 5 will require ~25 operations
* an array of size 10 (+5) will require ~100 operations (+75)
* an array of size 15 (+5) will require ~225 operations (+125)
* an array of size 20 (+5) will require ~400 operations (+275)


```js
function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let smallestIndex = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[smallestIndex]) {
				smallestIndex = j;
			}
		}
		let temp = arr[i];
		arr[i] = arr[smallestIndex];
		arr[smallestIndex] = temp;
	}
}

let arr = [3,9,2,6,8,5,7,1,4]
selectionSort(arr);
console.log(arr); // [1,2,3,4,5,6,7,8,9]


function bubbleSort(arr) {
    let iterations = 0;
    for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
		    iterations++;
			if (arr[j] < arr[i]) {
				let temp = arr[i];
        		arr[i] = arr[j];
        		arr[j] = temp; 
			}
		}
	}
	console.log(arr);
	console.log(`length: ${arr.length} — iterations: ${iterations}`)
}
```

