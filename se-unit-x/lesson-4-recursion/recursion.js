////////////////////////
// Iterative Solution
////////////////////////

let target = 10;

function triangleSumIteration(number) {
   let tSum = 0;
   for (let i = 1; i <= number; i++) {
       tSum += i;
   }
   return tSum;
}
console.time("iterative")
let tSum1 = triangleSumIteration(target); // => 1+2+3+4+5 => 15
console.log(tSum1);
console.timeEnd("iterative")

////////////////////////
// Recursive Solution
////////////////////////

function triangleSum(x) {
  if (x === 1) { // base case
    return 1;
  }
  else { // recursive case
    return x + triangleSum(x - 1)
  }
}

// Where should I put the debugger to see how this function invocation works?
console.time("recursive")
let tSum2 = triangleSum(target);
console.log(tSum2);
console.timeEnd("recursive")


/* 
Q: Which is faster? How big does the input need to be to see this difference?
*/


////////////////////////
// Fibonacci
////////////////////////