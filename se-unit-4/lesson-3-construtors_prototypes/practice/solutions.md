# Unit 4 Lesson 3 Practice Set - SOLUTIONS

1. Constructor function names are capitalized.
      ```javascript
      function Person() {
        // constructor function for a Person instance
      }
      ```

2. This code will throw a `TypeError` because `bark` is an undefined property on `juanPablo`. This is the case because the `Dog` constructor function was invoked without the `new` operator and since there is no explicit return value, the return value is `undefined`. As a result, the value assigned to `juanPablo` is `undefined` and, consequently calling `juanPablo.bark()` results in an error since it is attempting to call the `bark` method on `undefined`. We can fix this by ensuring that we call our constructor function with the `new` operator.
      ```javascript
      function Dog() {
        this.bark = function() {
          console.log("Roof Roof!");
        };
      }

      const juanPablo = Dog();

      juanPablo.bark(); // ?
      ```

3. `__proto__`, often pronounced "_dunder_-proto" is an object property that points to an object's prototype object. `__proto__` is a standard ES6 property. We can also check for an object's prototype object with `Object.getPrototypeOf(obj)` method or the object's internal `isPrototypeOf(obj)` property.

4. 
      ```javascript
      function Teacher(name, subject, school) {
        this.name = name;
        this.subject = subject;
        this.school = school;
      }

      Teacher.prototype.teach = function() {
        return 'Sit down!';
      };
      ```

5. By defining a method on a constructor's prototype, we avoid creating object instances with copies of the same method. By storing the method on the prototype, we have one common method that we can change once and have that change reflected in all instances of the constructor function.

6.  
      ```javascript
      NaN
      NaN
      ```
      `this` in `RECTANGLE.area` and `RECTANGLE.perimeter` functions is set to the `RECTANGLE` object when they are called. Since `RECTANGLE` does not define `width` and `height` properties, both methods return `NaN`.
      
      We can fix this in two ways.
      1. Let's pass the `RECTANGLE.area` property as a function and set `this.area` as a method.
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
        this.area = RECTANGLE.area;
        this.perimeter = RECTANGLE.perimeter;
      }

      const rect = new Rectangle(4, 10);
      rect.area(); // 40
      rect.perimeter(); // 28
      ```

      Notice, though, that `area` and `perimeter` went from being properties to methods in this solution. And we know that we typically set methods as properties on the constructor's prototype. Here is another solution that leaves `area` and `perimeter` as _properties_ of the object instance.

      2. Use `call` to invoke the `RECTANGLE.area`/`RECTANGLE.perimeter` methods and use their return values as the property value for `this.area` and `this.perimeter`. Since we are using `call` we can explicitly set the execution context to `this`.
      ```javascript
      const RECTANGLE = {
        area: function() {
          return this.width * this.height;
        },
        perimeter: function() {
          return 2 * (this.width + this.height);
        }
      };

      function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.area = RECTANGLE.area.call(this);
        this.perimeter = RECTANGLE.perimeter.call(this);
      }

      const rect1 = new Rectangle(2, 3);
      rect1.area; // 6
      rect1.perimeter; // 10
      ```

7. 
      ```javascript
      const Circle = function(radius) {
        this.radius = radius;
      };

      Circle.prototype.area = function() {
        return Math.PI * this.radius * this.radius;
      };
      ```

8. 
      ```javascript
      var shape = {
        getType: function() {
          return this.type;
        },
      };

      function Triangle(a, b, c) {
        this.type = 'triangle';
        this.a = a;
        this.b = b;
        this.c = c;
      }

      Triangle.prototype = shape;
      Triangle.prototype.getPerimeter = function() {
        return this.a + this.b + this.c;
      };

      Triangle.prototype.constructor = Triangle;
      ```
  We must remember to manually set the `constructor` property of the `Triangle.prototype`. Typically, this is done for you automatically, when we use the `new` operator with a constructor function. The function's prototype object will automatically have a property constructor pointing to the function. However in this case, since we _reassigned_ the Triangle function's prototype to `shape`, we lost that constructor reference. Therefore we have to set it back manually.

  Note also that we placed the `getPerimeter` method on the object assigned to the prototype property of the `Triangle` function so that all `Triangle` instances can share this method (behavior).

9. 
  ```javascript
  function User(first, last){
    if (!(this instanceof User)) {
      return new User(first, last);
    }

    this.name = first + ' ' + last;
  }

  const name = 'Jane Doe';
  const user = User('John', 'Doe');

  console.log(name);        // => Jane Doe
  console.log(user.name);   // => John Doe
  ```

  Constructor functions built this way are called **"scope-safe constructors"**. Most of JavaScript's built-in constructors, such as `Object`, `Regex` and `Array`, are scope-safe.

  ```javascript
  new Object();          // Object {}
  Object();              // Object {}
  new Array(1, 2, 3);    // [1, 2, 3]
  Array(1, 2, 3);        // [1, 2, 3]
  ```

10.
  ```javascript
  function SavingsAccount() {
    this.balance = 0;
  }

  SavingsAccount.prototype.showBalance = function() {
    return this.balance; 
  };

  SavingsAccount.prototype.depositFunds = function(funds) {
    if (funds <= 0) {
      console.log('Please include a deposit amount that is greater than 0.')
      return this.balance;
    }

    this.balance += funds;
    return this.balance;
  }

  SavingsAccount.prototype.withdrawFunds = function(funds) {
    if (funds > this.balance) {
      console.log('Insufficient Funds');
      return this.balance;
    }

    this.balance -= funds;
    return this.balance;
  }
  ```
