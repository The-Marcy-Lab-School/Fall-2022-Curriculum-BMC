// Both of these functions use similar algorithms

// given an array and a value, return the index of the value in the array
function indexOf(array, value) {
    // assume we haven't found the value from the start
    let index = -1;

    // loop through all strings
    for (let i = 0; i < array.length; i++) {
        // grab the current value
        // if current value is the one we're looking for
        // set the current i as the index
        if (array[i] === value) {
            index = i;
            break;
        }
    }

  return index;
}

let arr = ['a', 'b', 'c'];
console.log(indexOf(arr, 'b')); // => 1
console.log(indexOf(arr, 'd')); // => -1

// Given any number of strings, return the longest
function longestString(...strings) {
    // strings = array of strings
    console.log(strings);

    // assume we haven't found the longest string from the start
    let longest = '';

    // loop through all strings
    for (let i = 0; i < strings.length; i++) {
        // grab the current string
        let currentString = strings[i];

        // if current string is longer than the longest one we've found
        // set the current string as the longest
        if (currentString.length > longest.length) {
            longest = currentString;
        }
        
    }

    return longest;
}
console.log(longestString('ben', 'motun', 'carmen', 'casterly')) //casterly
console.log(longestString('the', 'quick', 'brown', 'fox')) // quick
console.log(longestString()) // ''
console.log(longestString(532)) // ''
console.log(longestString('hello', 532)) // 'hello'

/* 


*/