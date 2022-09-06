// Question 1
function areAllNumbers(arr) {
  return arr.every(element => typeof element === "number");
}

// Question 2
function hasAnyPrimes(numbers) {
  return numbers.some(number => isPrime(number));
}

function isPrime(num) {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

// Question 3
function hasPerfectSquares(numbers) {
  return numbers.some(num => Math.sqrt(num) % 1 === 0);
}

// Question 4
function ascendingSort(numbers) {
  return numbers.sort((a, b) => a - b);
}

// Question 5
function alphabeticalOrder(words) {
  return words.sort();
}

// Question 6
function sortByVowels(words) {
  return words.sort((word1, word2) => countVowels(word1) - countVowels(word2)); 
}

function countVowels(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return word.split('').filter(letter => vowels.includes(letter)).length;
}

// Question 7
function sortByGrade(grades) {
  return grades.sort((student1, student2) => student2.grade - student1.grade)
}