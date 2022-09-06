# Practice with JavaScript Objects

### Directions
The exercises below will not be submitted as a problem set but will serve as great practice for you. Complete these exercises first and then you will be ready to move on to Problem Set 2-6!

#### Object Basics
1. Pick a penguin from [Wikipedia's List of Fictional Penguins](https://en.wikipedia.org/wiki/List_of_fictional_penguins) and create an object named `myPenguin` with properties that represent the information listed in each column on that Wikipedia page (for example: the character's name, origin, and author).

2. Use `console.log()` to print the penguin's name to the console as part of a welcome message, like `"Hello, I'm a penguin and my name is [NAME HERE]!"`

3. Write another line of code that adds a new property to your penguin called `canFly` and set it to `false`. (Note: Don't modify your penguin-creation code that you wrote above! Do this step in a separate line of code.)

4. Add a method to your penguin called `chirp` that prints to the console: `"CHIRP CHIRP!` Is this what penguins sound like?" (Note: Again, don't modify your previous code! Do this step by writing a new line of code.)

5. Add another method to your penguin called `sayHello` that prints to the console the same message from step 2 above. But this time, be sure to use the mystical, magical, all-powerful this keyword to access your penguin's name, so that way the `sayHello` method could potentially work for any penguin that has a name!

6. Next, call your penguin's `sayHello` method and make sure that it works! (Hint: if you need an example of what it looks like when you call a method of an object, look at `console.log()` -- that's how you call the `log()` method of the `console` object!)

7. Without modifying any of your previous code, change the penguin's name to `"Penguin McPenguinFace"` and then call your penguin's `sayHello` function one more time to make sure it still works.

8. Write another method called `fly`, and inside that method, use an `if / else` statement to print `"I can fly!"` to the console if your penguin's `canFly` property is `true`, or `"No flying for me!"` if its `canFly` property is `false`.
**Hint:** _Remember to use the very handy `this` keyword to access the object that your new method is currently attached to!_

9. Call your penguin's `fly` method and make sure it works!

10. Change the `canFly` property to true -- again, without modifying any of your previous code!

11. Now call your penguin's `fly` method again and make sure it works as expected!

12. Write a `for... in` loop to print each key to the console. (Hint: See [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) page for an example of this special type of loop.)

13. Write another `for... in` loop to print the value of each key to the console. (Hint: You'll need to use bracket notation to access the values this way, instead of dot notation!)

Solutions to this section [here](https://repl.it/@LearnTeachCode/Objects)

#### Arrays inside of Objects
14. Add a new property to your penguin called `favoriteFoods` and set it equal to an array containing a list of three strings.

15. Access your penguin's second favorite food and print it to the console using `console.log()`

16. Create a new variable called `firstFavFood` and set it equal to the first item in your penguin's array of favorite foods.

17. Add another food to the end of the list.

18. Print the length of your penguin's `favoriteFoods` array to the console with `console.log()`

19. Without modifying any of your previous code, write a new line of code that changes the value of the last item in the list to `"pineapples"` (overwriting the previous value).

19. Create a new variable named `lastFavFood` that will always point to the last element of your penguin's `favoriteFoods` array, no matter how many items are in the list.

20. Write a `for` loop to iterate through every food in your penguin's `favoriteFood` property and print each one to the console.

Solutions to this section [here](https://repl.it/@LearnTeachCode/Arrays-inside-Objects)

#### Objects Inside of Objects
21. Add a new property to your penguin called `outfit` and set it equal to another object with the following properties: `hat`, `shirt`, `pants`, and `shoes` -- each property should have a string as its value! (I suggest you give it a baseball cap, Hawaiian shirt, cargo shorts, and flip-flops, because wouldn't that be ridiculous?)

22. Create a new variable called `penguinHatType` and set it equal to the value of the hat in your penguin's outfit! Then print your new variable to the console.

23. Without modifying any of your previous code, write one new line of code to add an `accessory` property to your penguin's outfit and set it equal to the string `"pocket watch"` -- because penguins are classy like that!

24. Write one more line of code to change the `hat` in your penguin's outfit to `"top hat"` and override the previous value. (Again, because penguins are classy!)

25. This penguin is a freelancer who always works from home, so it doesn't actually need to wear any pants! Let's delete the `pants` property from this penguin's outfit property. (Hint: see [this page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) on the `delete` operator for examples.)

26. Write a `for... in` loop to print the value of each piece of clothing in your penguin's outfit so you can see a list of clothing items in the console.

Solutions to this section [here](https://repl.it/@LearnTeachCode/Objects-inside-objects)

#### Arrays of Objects
For these last few challenges, I'll create three penguins for you to work with. **Copy-paste this code snippet to the end of your code:**
```javascript
var gunter = {
  name: "Gunter",
  origin: "Adventure Time",
  canFly: false,
  sayHello: function () {
    console.log("QUACK!!!");
  }
};

var ramon = {
  name: "Ramón",
  origin: "Happy Feet",
  canFly: true,
  sayHello: function () {
    console.log("Estoy encantado de conocerle.");
  }
};

var fred = {
  name: "Fred",
  origin: "Sitting Ducks",
  canFly: false,
  sayHello: function () {
    console.log("Hi there!");
  }
};
```
27. Create a new variable named `penguins` and set it equal to an array that lists these three penguins! (Hint: remember you can put variable names inside an array, not just hard-coded values! And remember that variable names don't have quotes around them.)

28. Access the first penguin in the list and print it to the console using `console.log()` -- notice that you can see all the properties and methods of that object listed in the console! (Hint: remember that array indexes start counting at 0, not 1!)

29. Create a new variable called `secondPenguin` and set it equal to the second penguin in your `penguins` array.

30. Print to the console the name of the last penguin in the list.

31. Remember the penguin you created earlier, with the variable name of `myPenguin`? Add that penguin to the end of the penguins array!

32. Print the length of the penguins array to the console.

33. Write one more line of code to change the first penguin's `canFly` property to the value true (overriding its existing value).

34. Call the `sayHello` method of the first penguin in your penguins array!

35. Write a `for` loop to iterate through every penguin in the array and print the value of each penguin's name property to the console.

36. Write a `for` loop to call the `sayHello` method of every penguin in the array!

37. Write a `for` loop to iterate through every penguin in the array, and add a new property to each penguin called `numberOfFeet` with the value 2

38. Write another for loop to iterate through every penguin in the array, and for each penguin that can fly, print to the console a message containing the penguin's `name` and `" can fly!"` -- for example, `"Gunter can fly!"` or `"Ramón can fly!"` (Don't do anything for the penguins that cannot fly.)

<sup>Exercises adapted from [Learn Teach Code](https://github.com/LearnTeachCode/pair-partners/issues/42)</sup>
