// Question 0
// Arrays are objects. Strict equality for objects only evaluates to true if both operands are the same object. Even though these objects have identical values, they are two disctinct objects.

// Question 1
const onlyOdd = numArr => numArr.filter(num => num % 2 !== 0);
console.log(onlyOdd([1, 2, 3, 4, 5]).length === 3);

// Question 2
const reverseWord = word => word.split('').reverse().join('');
console.log(reverseWord('abc') === 'cba');

// Question 3
const average = numArr => numArr.reduce((sum, num) => sum + num) / numArr.length;
console.log(average([3, 7, 5, 15, 10]) === 8);

// Question 4
const player = {
  name: 'LeBron James',
  age: 36,
  sport: 'basketball',
  sayName: function() {
    console.log(player.name); // We will learn a better way of doing this today 😉
  },
};

// Question 5
for (prop in player) {
  console.log(`${prop}: ${player[prop]}`);
};

// Question 6
const removeVowels = word => word.replace(/[aeiou]/i, '');
console.log(removeVowels('hat') === 'ht');

// Question 7
const makeUpper = wordArr => wordArr.map(word => word.toUpperCase());

// Question 8
const isAllTruthy = arr => arr.every(el => !!el);
console.log(isAllTruthy([1, 2, 3, 4]) === true);
console.log(isAllTruthy([0, 2, 3, 4]) === false);
