////////////////////////
// Iterative Solution
////////////////////////

function triangleSumIteration(number) {
   let tSum = 0;
   for (let i = 1; i <= number; i++) {
       tSum += i;
   }
   return tSum;
}
let tSum1 = triangleSumIteration(5); // => 1+2+3+4+5 => 15
console.log(tSum1);



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
let tSum2 = triangleSum(5);
console.log(tSum2);


/* 
Q: Which is faster? How big does the input need to be to see this difference?
*/