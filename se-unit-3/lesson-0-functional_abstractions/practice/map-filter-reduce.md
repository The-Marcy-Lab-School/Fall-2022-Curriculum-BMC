# Unit 3 - Lesson 0 Practice 1 - Iteration, Transformation, Selecting, Reducing
## Functional Abstraction with Higher-Order Array Methods

### Iteration: `Array.prototype.forEach`
1. Declare a constant variable, `fellows`, and initialize it with an array consisting of the names of all of the Fellows in your cohort. Then use the `Array.prototype.forEach()` method to log all of those names to the console.

2. Declare a constant variable, `madFellows`, and initialize it with a value an empty array. Iterate over your `fellows` array and add the name of each fellow to your `madFellows` array, uppercased and concatenated with three exclamation points.  

3. Next, declare a const variable, `cFellows`, and initialize it with a value of an empty array. Iterate over your `fellows` array again and add any fellows with a `c` in their name to the `cFellows` array.

4. Let's rewrite our `headAss` function, this time, using `Array.prototype.forEach`. **Note:** _The pattern does not disregard spaces and special characters and it **always** begins with an uppercase letter._
      ```javascript
      headAss('abcdef');  // "AbCdEf"
      headAss('Abc+def'); // "AbC+DeF"
      headAss('Omar Apollo is better than Frank Ocean'); // "Omar aPoLlO Is bEtTeR ThAn fRaNk oCeAn"
      ```
      
### Transformation: `Array.prototype.map`
5. Write a function that takes an array of numbers and returns a new array with each number squared:
      ```javascript
      const squared = function(numbers) {
        // your code here
      };

      squared([1, 2, 3, 4, 5]); // => [1, 4, 9, 16, 25]
      ```

6. Write a function that takes an array of words that are singular and returns an array of the same words pluralized:
      ```javascript
      const pluralize = function(words) {

      };

      pluralize(['dog', 'cat', 'worm', 'kyle']); // => ['dogs', 'cats', 'worms', 'kyles']
      ```

7. Write a function that takes an array of artist/song objects and returns an array of strings that name the song and say who it is performed by:
      ```javascript
      const songs = [
        { song: 'Phenom', artist: 'Alex Mali' },
        { song: 'Too Deep', artist: 'dvsn' },
        { song: 'Firefly', artist: 'Mura Masa' }
      ];

      const songsBy = function(songs) {
        // your code here
      };

      songsBy(songs); // => ['Phenom by Alex Mali', 'Too Deep by dvsn', 'Firefly by Mura Masa']
      ```

8. Write a function that takes an array of user objects and returns an array of just the users' first names:
      ```javascript
      const users = [
        { firstName: 'Homer', lastName: 'Simpson' },
        { firstName: 'Marge', lastName: 'Simpson' },
        { firstName: 'Bart', lastName: 'Simpson' },
        { firstName: 'Lisa', lastName: 'Simpson' },
        { firstName: 'Maggie', lastName: 'Simpson' }
      ];

      const firstNames = function(users) {
        // your code here
      };

      firstNames(users); // => ['Homer', 'Marge', 'Bart', 'Lisa', 'Maggie']
      ```

9. Write a function that takes an array of user objects and returns an array with just the users' full names:

      ```javascript
      const users = [
        { firstName: 'Homer', lastName: 'Simpson' },
        { firstName: 'Marge', lastName: 'Simpson' },
        { firstName: 'Bart', lastName: 'Simpson' },
        { firstName: 'Lisa', lastName: 'Simpson' },
        { firstName: 'Maggie', lastName: 'Simpson' }
      ];

      const fullNames = function(users) {
        // your code here
      };

      fullNames(users); // => ['Homer Simpson', 'Marge Simpson', 'Bart Simpson', 'Lisa Simpson', 'Maggie Simpson']
      ```

10. Write a function that takes an array of arrays that contain product information, and returns an array of objects with appropriate keys:
      ```javascript
      const products =  [
        ['Dark Chocolate Crunchies', 4.11, 3],
        ['Peppermint Poppers', 0.88, 1],
        ['Banana Bunches', 2.33, 2]
      ]

      const toObject = function(products) {
        // your code here
      };

      toObject(products); // => [
      //   { name: 'Dark Chocolate Crunchies', price: 4.11, quantity: 3 },
      //   { name: 'Peppermint Poppers', price: 0.88, quantity: 1 },
      //   { name: 'Banana Bunches', price: 2.33, quantity: 2 }
      // ] 
      ```

### Selection: `Array.prototype.filter`
11. Write a function that takes an array of numbers and returns an array of all numbers less than 10:
      ```javascript
      const lessThanTen = function(numbers) {
        // your code here
      };

      lessThanTen([1, 5, 12, 18, 94, 3, 16]); // => [1, 5, 3]
      ```

12. Write a function that takes an array of numbers and returns an array of just the even numbers:
      ```javascript
      const onlyEvens = function(numbers) {
        // your code here
      };

      onlyEvens([25, 16, 12, 99, 8, 37]); // => [16, 12, 8]
      ```

13. Write a function that takes an array of strings and returns an array of just the words that have an odd number of characters:
      ```javascript
      const onlyOddWords = function(words) {
        // your code here
      };

      onlyOddWords(['hello', 'my', 'name', 'is', 'alexa']); // => ['hello', 'alexa']
      ```

15. Write a function that takes an array of words and returns an array of just the words that are pluralized (end with 's'):
      ```javascript
      const onlyPlural = function(words) {
        // your code here
      };

      onlyPlural(['dogs', 'cat', 'humans', 'kyle']); // => ['dogs', 'humans']
      ```

16. Write a function that takes an array of characters and returns an array of just the characters that are superheroes:
      ```javascript
      const characters = [
        { character: 'Superman', hero: true },
        { character: 'Sinestro', hero: false },
        { character: 'Wonder Woman', hero: true },
        { character: 'Lex Luthor', hero: false },
        { character: 'Green Lantern', hero: true }
      ]

      const isHero = function(chars) {
        // your code here
      }; 
      ```

### Reducing: `Array.prototype.reduce()`
Try to implement the following functions using .reduce(). If you are having trouble, try implementing them using more traditional loops and see if you can refactor to use `Array.prototype.reduce`!

17. Write a function that takes an array of numbers and returns the sum of all the numbers:
      ```javascript
      const sum = function(numbers) {
        // your code here
      };

      sum([2, 4, 6]); // => 12
      ```

18. Write a function that takes an array of numbers and returns the product of all the numbers:
      ```javascript
      const product = function(numbers) {
        // your code here
      };

      product([2, 4, 6]); // => 48
      ```

19. Write a function that takes an array of words and returns a sentence (single string) with all the element strings concatenated together:
      ```javascript
      const stringConcat = function(strings) {
        // your code here
      };

      stringConcat(['Hello', 'my', 'name', 'is', 'Alexandra']); // => 'Hello my name is Alexandra'
      ```

20. Write a function that takes an array of users and returns an object with keys that are the users' names and values that are their email addresses:
      ```javascript
      const users = [
        { fullName: 'George Washington', email: 'george@us.gov' },
        { fullName: 'John Adams', email: 'john@us.gov' },
        { fullName: 'Thomas Jefferson', email: 'thomas@us.gov' },
        { fullName: 'James Madison', email: 'james@us.gov' }
      ]

      const createEmailObject = function(users) {
        // your code
      };

      createEmailObject(users); // => {
      //   'George Washington': 'george@us.gov',
      //   'John Adams': 'john@us.gov',
      //   'Thomas Jefferson': 'thomas@us.gov',
      //   'James Madison': 'james@us.gov'
      // }
      ```

Resist the urge to look at the answer until you are finished with all the problems. You can find the answers [here](https://github.com/The-Marcy-Lab-School/se-unit-3/blob/master/lesson-0-functional_abstractions/practice/map-filter-reduce-ANSWERS.js)
