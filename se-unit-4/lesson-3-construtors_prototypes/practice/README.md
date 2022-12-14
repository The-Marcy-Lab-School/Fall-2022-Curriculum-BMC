# Unit 4 Lesson 3 Practice
## Constructors, Prototypes, and the Pseudo-Classical Object Creation Pattern


1. What naming convention do we use to indicate that a function is a _constructor_?

2. What will the following code produce? Why? How do we fix it?

      ```javascript
      function Dog() {
        this.bark = function() {
          console.log("Woof Woof!");
        };
      }

      const juanPablo = Dog();

      juanPablo.bark(); // ?
      ```

3. What is the `__proto__` property?

4. Use a constructor function to create a `Teacher` object. `Teacher` instances should have a `name`, `subject`, and `school`. `Teacher`s should have a `teach` method that simply returns `"Sit down!"`.

5. In the pseudo-classical object creation pattern, why do we add methods to the constructor function's prototype instead of defining them directly within the body of the function?

6. What does the following code produce? Why? How do we fix it?
      ```javascript
      const RECTANGLE = {
        area: function() {
          return this.width * this.height;
        },
        perimeter: function() {
          return 2 * (this.width + this.height);
        },
      };

      function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.area = RECTANGLE.area();
        this.perimeter = RECTANGLE.perimeter();
      }

      const rect1 = new Rectangle(2, 3);
      console.log(rect1.area);
      console.log(rect1.perimeter);
      ```

7. Write a constructor function `Circle`, that takes a radius as an argument. You should be able to call an `area` method on the created objects to get the circle's area. Test your implementation with the following code:
      ```javascript
      const a = new Circle(3);
      const b = new Circle(4);

      console.log(a.area().toFixed(2)); // => 28.27
      console.log(b.area().toFixed(2)); // => 50.27
      ```

8. Follow the steps below:

  * Create an object called `shape` that has a `getType` method.
  * Define a `Triangle` constructor function whose prototype is `shape`. Objects created with `Triangle` should have four own properties: `a`, `b`, `c` (representing the sides of a triangle), and `type`.
  * Add a new method to the prototype called getPerimeter.
  * Test your implementation with the following code:
      ```javascript
      const t = new Triangle(3, 4, 5);
      t.constructor;                 // Triangle(a, b, c)
      shape.isPrototypeOf(t);        // true
      t.getPerimeter();              // 12
      t.getType();                   // "triangle"
      ```

9. Since a constructor is just a function, it can be called without the `new` operator, and this can lead to unexpected results and errors especially for inexperienced programmers.

      Write a constructor function that can be used with or without the `new` operator, and return the same result in either form. Use the code below to check your solution:

      ```javascript
      function User(first, last) {
        // ...
      }

      const name = 'NAME IN GLOBAL SCOPE'
      const user1 = new User('John', 'Doe'); 
      const user2 = User('John', 'Doe');

      console.log(name);         // => Jane Doe
      console.log(user1.name);   // => John Doe
      console.log(user2.name);   // => John Doe
      ```

      **Hint:** In the constructor function, first check the value of `this` to see if it is an instance of the constructor function. Since, if it's called with the `new` operator JavaScript sets the value of `this` behind the scenes. Given that, check if it's used as a regular function (invoked without the `new`), if it is invoke itself with the `new` operator and return the result. If it is used as a constructor function, run the rest of the code in the function.
      
10. Use the pseudo-classical object creation pattern to create a `SavingsAccount` constructor. `SavingsAccount` instances should be initialized with a balance of `0`. They should also have three methods:
  * `showBalance`, which returns the current balance of the account
  * `depositFunds` which takes a number parameter and adds it to the current balance. If `depositFunds` is called with an argument that is _not_ a positive number, it should log, "`Please include a deposit amount that is greater than 0`" then it should return the current balance.
  * `withdrawFunds`, which takes a number argument, and subtracts it from the current balance. If `withdrawFunds` is called with number that is _greater_ than the current balance, it should log `"Insufficient Funds"` and return the current balance. 
