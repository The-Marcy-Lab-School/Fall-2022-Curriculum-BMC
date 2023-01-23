# Big-O Notation Challenges

| Runtime Name 	| Big O Notation 	| How to identify                                                                                                	|
|--------------	|----------------	|--------------------------------------------------------------------------------------------------------	|
| Constant     	| O(1)           	| No iteration                                                                 	|
| Logarithmic  	| O(log n)       	| The input size is divided in half on each iteration        	|
| Linear       	| O(n)           	| An un-nested loop over elements of an array                                             	|
| Log-Linear   	| O(n log n)     	| A O(log n) sub-algorithm is executed within a loop 	|
| Quadratic    	| O(n^2)         	| A nested loop                                                                              	|

The functions below are one of the 5 runtime efficiencies above.

For each algorithm, identify the Big-O notation.

### 1 - includes

```js
function includes(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}
```

### 2 - Push

```js
function push(arr, newValue) {
    arr[arr.length] = newValue;
}
```

### 3 - Sort

```js
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let smallest = i;
        
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        }
        
        let temp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = temp;
    }
}
```

### 4 - findIndexInSortedArray

```js
function findIndexInSortedArray(arr, target) {
    let start = 0;
    let end = arr.length - 1;
 
    while (start <= end) {
    	let mid = Math.floor((start + end) / 2);
    	
    	if (arr[mid] === target) return mid;
    	else if (target < arr[mid]) end = mid - 1;
    	else if (target > arr[mid]) start = mid + 1;
    }
    return -1;
}
```

### 5 - Slice

```js
function slice(arr, start = 0, end = arr.length) {
    const newArr = [];
    for (let i = start; i < end; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}
```

### 6 - shift

```js
function shift(arr) {
    const toRemove = arr[0]
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length--;
    return toRemove;
}
```