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

////////////////////////////////
// Count Down
////////////////////////////////

function countDownIterative(n) {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}

/*
1) make an if/else conditional chain for your base case and recursive case
2) figure out what the smallest problem is - that's your base case
3) solve the problem for the base case
4) test the base case
5) write out examples with larger "problems"
6) Identify patterns between the examples
7) Try to define the problem for ANY input
*/
function countDown(n) {
  if (n === 1) {
    // base case
    console.log(1);
  } else {
    // recursive case
    countDown(n - 1);
    console.log(n);
  }
}
// countDown(5);

function countUp(n) {
  if (n === 1) {
    // base case
    console.log(1);
  } else {
    // recursive case
    countUp(n - 1);
    console.log(n);
  }
}
// countUp(5);

// countDown(1);
// countDown(2)


////////////////////////
// Reverse a string
////////////////////////

function reverse(str) {
  if (str.length <= 1) {
    return str;
  } else {
    
  }
}
console.log(reverse('a')); // ==> 'a'
console.log(reverse('ab')); // ==> 'ba'
console.log(reverse('abc')); // ==> 'cba'
console.log(reverse('abcd')); // ==> 'dcba'

// last character + reverse(the rest of the characters)

////////////////////////
// Fibonacci
////////////////////////

// Fibonacci
// 0 1 1 2 3 5 8 13 21 ...

function fib(n) {
    if (n < 0) return;
    if (n <= 1) {
        return n;
    } else {
        return fib(n-2) + fib(n-1);
    }
}

console.log(fib(3))
console.log(fib(4))
console.log(fib(5))

/*
fib(0) => 0 // base cases
fib(1) => 1 // base cases
fib(2) => 1 = fib(0) + fib(1)
fib(3) => 2 = fib(1) + fib(2)
fib(4) => 3 = fib(2) + fib(3)
fib(5) => 5 = fib(3) + fib(4)
fib(n) => fib(n-2) + fib(n-1) // recursive case

*/


// What is the smallest problem?





////////////////////////
// Decimal to Base X
////////////////////////

const decimalToBase = (num, base) => {
 let str = "";
 while (num > 0) {
   str = (num % base) + str;
   num = Math.floor(num / base);
 }
 return str;
}
decimalToBase(8, 2); // 1000


const toStr = (n, base) => {
    if (n < base) { // base case
        return n;
    }
    else { // recursive case
        return toStr(Math.floor(n / base), base) + n % base;
    }
};

/*
// Base Case:
// - if n is less than the base
// - the values stay the same

toStr(0, 2) --> '0'
toStr(1, 2) --> '1'
toStr(2, 2) --> '10'   === toStr(1, 2) + '0' --> '1' + 0 
toStr(3, 2) --> '11'   === toStr(1, 2) + '1' --> '1' + 1 
toStr(4, 2) --> '100'  === toStr(2, 2) + '0' --> '10' + 0 
toStr(5, 2) --> '101'  === toStr(2, 2) + '1' --> '10' + 1 
toStr(6, 2) --> '110'  === toStr(3, 2) + '0' --> '11' + 0
toStr(7, 2) --> '111'  === toStr(3, 2) + '1' --> '11' + 1

- Any toStr(n, base) can be defined in terms of a smaller n with the same base
1. toStr(6, 2) - n=6, base=2
2. divide n by the base, rounded down: Math.random(6/2) -> 3
3. find the toStr() value for that number with the same base: toStr(3, 2) -> '11'
4. get the remainder of n/base: 6%2 -> 0
5. add results from step 3 + step 4 -> '11' + 0 -> '110'

1. toStr(7, 2) - n=7, base=2
2. divide n by the base, rounded down: Math.random(7/2) -> 3
3. find the toStr() value for that number with the same base: toStr(3, 2) -> '11'
4. get the remainder of n/base: 7%2 -> 1
5. add results from step 3 + step 4 -> '11' + 1 -> '111'

toStr(0, 3) --> '0'
toStr(1, 3) --> '1'
toStr(2, 3) --> '2'
toStr(3, 3) --> '10'    === toStr(1, 3) + 0 --> '1' + 0
toStr(4, 3) --> '11'    === toStr(1, 3) + 1 --> '1' + 1
toStr(5, 3) --> '12'    === toStr(1, 3) + 2 --> '1' + 2
toStr(6, 3) --> '20'    === toStr(2, 3) + 0 --> '2' + 0
toStr(7, 3) --> '21'    === toStr(2, 3) + 1 --> '2' + 1
toStr(10, 3) --> '101' (9 + 0 = 1)

1. toStr(10, 3) - n=10, base=3
2. divide n by the base, rounded down: Math.random(10/3) -> 3
3. find the toStr() value for that number with the same base: toStr(3, 3) -> '10'
4. get the remainder of n/base: 10%3 -> 1
5. add results from step 3 + step 4 -> '10' + 1 -> '111'

toStr(n, base) === toStr(Math.random(n/base), base) + n%base;

toStr(0, 4) --> '0'
toStr(1, 4) --> '1'
toStr(2, 4) --> '2'
toStr(3, 4) --> '3'
toStr(4, 4) --> '10'

toStr(n, base) === toStr(Math.floor(n/base), base) + n%base
*/





/*
Base 16
ff 00 00

Base 10
4259 --> 4260 --> 4261 --> .... --> 4269 --> 4270 
- 4 x 1000
- 2 x 100
- 5 x 10
- 7 x 1

Base 2
1011011
- 1 x 64
- 0 x 32
- 1 x 16
- 1 x 8
- 0 x 4
- 1 x 2
- 1 x 1

Base 3
- 0 => 0
- 1 => 1
- 2 => 2
- 3 => 10
- 4 => 11
- 5 => 12
*/