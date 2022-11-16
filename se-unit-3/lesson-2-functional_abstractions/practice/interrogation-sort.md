# Unit 3 - Functional Abstraction with Higher-Order Array Methods

### Interrogation: `Array.prototype.every` and `Array.prototype.some`
1. Write a function that checks whether all elements of an array are Numbers.

      ```javascript
      areAllNumbers([1, 5, 6, 7, '1']);             // false
      areAllNumbers([1, 5, 6, 7, 1]);               // true
      areAllNumbers([1, 5, 6, 7, NaN]);             // false
      ```

2. Write a function that takes an array and tests for any prime numbers.

      ```javascript
      hasAnyPrimes([123, 11, 8, 3]);  // true 
      hasAnyPrimes([2, 4, 6, 8]);  // false
      hasAnyPrimes([17]);  // true 
      ```

3. Write a function that takes an array and tests for any perfect squares.
      ```javascript
      hasPerfectSquares([4, 9, 16, 25]); // true
      hasPerfectSquares([2, 10, 50, 75]); // false
      hasPerfectSquares([-4, -9, -16, -25]); // true
      ```

### Sorting: `Array.prototype.sort`
4. Write a function that sorts a list of numbers in ascending order.
      ```javascript
      ascendingSort([3, 55, 12, 9]); // [3, 9, 12, 55]
      ascendingSort([-33, -50, 1, 0]); // [-50, -33, 0 1]
      ```

5. Write a function that sorts an array of first names by alphabetical order.
      ```javascript
      alphabeticalOrder(['carl', 'ben', 'amy']); // ['amy', 'ben', 'carl']
      ```

6. Write a function that sorts an array of words by the number of vowels in the word.
      ```javascript
      sortByVowels(['babe', 'favorite', 'a', 'reader']); // ['a', 'babe', 'reader', 'favorite'];
      sortByVowels(['bob', 'a', 'regular', 'soon']); // ['bob', 'a', 'soon', 'regular'];
      ```

7. Write a function that sorts an array of student objects based on their final grades from highest to lowest. 

      ```javascript
      var studentGrades = [
        { name: 'StudentA', grade: 90.1 },
        { name: 'StudentB', grade: 92 },
        { name: 'StudentC', grade: 91.8 },
        { name: 'StudentD', grade: 95.23 },
        { name: 'StudentE', grade: 91.81 },
      ];

      function compareGrades(student1, student2) {
        if (student1.grade < student2.grade) {
          return 1;
        } else if (student1.grade > student2.grade) {
          return -1;
        } else {
          return 0;
        }
      }

      studentGrades.sort(compareGrades);
      
      // [{ name: 'StudentD', grade: 95.23 },
      //  { name: 'StudentB', grade: 92 }
      //  { name: 'StudentE', grade: 91.81 },
      //  { name: 'StudentC', grade: 91.8 },
      //  { name: 'StudentA', grade: 90.1 }]

 
Resist the urge to look at the answer until you are finished with all the problems. You can find the answers [here](https://github.com/The-Marcy-Lab-School/se-unit-3/blob/master/lesson-0-functional_abstractions/practice/interrogation-sort-ANSWERS.js)
