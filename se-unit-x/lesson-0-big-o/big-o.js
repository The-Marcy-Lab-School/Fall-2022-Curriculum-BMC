function arraysHaveSameValuesQuadratic(arr1, arr2) {
  // iterate through arr1,
  // for each value, check if its in arr2
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) { // includes is linear!
      continue;
    } else {
      return false;
    }
  }
  return true;
}

function arraysHaveSameValuesLinear(arr1, arr2) {
  // using an object, we can more efficiently retreive
  // the values we've seen in arr1
  const values = {};
  
  // for each value in arr1, add it to the values object
  for (let i = 0; i < arr1.length; i++) {
    const val = arr1[i];
    values[val] = true;
  }
  
  // iterate through arr2, checking to see if each value 
  // is in the values object.
  for (let i = 0; i < arr2.length; i++) {
    if (values[arr2[i]]) { // this retreival is O(1)
      continue;
    }
    else {
      return false;
    }
  }
  return true;
}

const arr1 = [];
const arr2 = [];
const arr3 = [];
const n = 100000; // change this value to see how the algorithms scale
for (let i = 0; i < n; i++) {
    let num = Math.random(); // put the same random numbers in arr1 and arr2
    arr1.push(num)
    arr2.unshift(num)
    arr3.push(Math.random()) // put a new random number in arr3
}


const startQ = Date.now();
console.log(arraysHaveSameValuesQuadratic(arr1, arr2)); // true
console.log(arraysHaveSameValuesQuadratic(arr1, arr3)); // false
const endQ = Date.now();
const elapsedQ = endQ - startQ; // elapsed time in milliseconds
console.log('quadratic:', `${elapsedQ}ms`)

const startL = Date.now();
console.log(arraysHaveSameValuesLinear(arr1, arr2)); // true
console.log(arraysHaveSameValuesLinear(arr1, arr3)); // false
const endL = Date.now();
const elapsedL = endL - startL; // elapsed time in milliseconds
console.log('linear:', `${elapsedL}ms`)

console.log(`Quadratic was ${elapsedQ - elapsedL}ms slower than Linear with n=${n} values`);