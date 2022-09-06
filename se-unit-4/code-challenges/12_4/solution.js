const sumSquareDifference = (num) => {
  let sum = 0;
  let sumOfSquares = 0;
  
  for(let i = 1; i <= num; i++) {
    sum += i;
  }
  
  let squareOfSum = sum**2;
  
  for(let k = 1; k <= num; k++) {
    sumOfSquares += k**2;
  }
  
  return squareOfSum - sumOfSquares;
};

const sumSquareDifference = (num) => {
  let sum = 0;
  let squaredSum = 0;
  
  for(let i=1; i<=num; i++){
      sum += i;
      squaredSum += i**2;
  }
  return sum**2 - squaredSum; 
};

// input 3
// solution: 6 operations

// Solution 2
// input 3
// solution: 3 operations

// Solution 1
// input 4
// solution: 8 steps

// Solution 2
// input 
// solution: 4 steps
