# Unit 4 Lesson 5 Practice Set
## Prototypal Inheritance

1. What is the `constructor` property that can be accessed on all JavaScript objects?

2. Create a `Building` constructor. It should have the following properties:
      * `address`
      * `numOfFloors`
      * `squareFt`
      * `isLocked`

   `Building` instances should have the following methods available to them:
      * `unlock`, which sets the `isLocked` property to `false` and does not return anything
      * `lock`, which sets the `isLocked` property to `true` and does not return anything

   We should be able to instantiate a building as follows:
      ```javascript
      const bkCommons = new Building('7 Marcus Garvey Blvd.', 4, 4500);
      bkCommons.address;     // '7 Marcus Garvey Blvd.'
      bkCommons.numOfFloors; // 4
      bkCommons.squareFt;    // 4500
      bkCommons.isLocked;    // true
      
      bkCommons.unlock();    // undefined
      bkCommons.isLocked;    // false
      
      bkCommons.lock();      // undefined
      bkCommons.isLocked;    // true

      ```

3. Create a `School` constructor. It should inherit from `Building`. Moreover, it should have these additional properties:
      * `schoolName`

      In addition to the `Building.prototype` methods, `School`s should have the following methods available to them:
      * `ringBell`, which returns `"ding ding!"`
      * `fireDrill`, which unlocks all doors and returns `"Fire Drill active"`

4. Create a `Polygon` class. It should have the following properties:
      * `sides`, an array of side lengths
  
   It should have the following methods available to it:
      * `isRegular`, returns a `true` if the polygon is regular (all sides are congruent), `false` if not
      * `getPerimeter`, returns the perimeter of the polygon.

      We will instantiate `Polygon`s as follows:
      ```javascript
      const pentagon = new Polygon(20, 30, 10, 40, 5);
      pentagon.sides;           // [20, 30, 10, 40, 5]
      pentagon.getPerimeter();  // 105
      ```

5. Create a `Triangle` class that inherits from `Polygon`. In addition to the `Polygon` properties, `Triangle` instances should have the following properties available to it:
    * `isEqualateral`, which returns `true` if all sides are congruent
    
      In addition to `Polygon` prototype methods, `Triangle` instances should have the following available to it:
      * `isRight`, which returns `true` if the triange is a _right triangle_... yes, you have to use the Pythagorean Theorem 🤷🏾‍♂️

      We will instantiate `Square`s as follows:
      ```javascript
      const tri = new Triangle(5, 12, 13);
      tri.isEqualateral;    // false
      tri.getPerimeter;     // 30
      tri.sides;            // [5, 12, 13]
      tri.isRight();        // true
      ```

6. Create a `Rectangle` class. `Rectangle`s are initialized with only two arguments - a length and a width. In addition to inheriting from `Polygon`, instances of `Rectangle` should have the following protoype **methods**:
      
      * `getArea` that returns the area of the rectangle
      * `getPerimeter`, that returns the perimeter of the rectangle

      Example:
      ```javascript
      let rect = new Rectangle(5, 10);
      rect.sides;        // [5, 10]
      rect.getPerimeter; // 30
      rect.getArea;      // 50
      rect.isRegular;    // false
      ```

7. Create a `Square` class. It should inherit from `Rectangle` (because a square is just a special type of rectangle, right?! 🤓). `Square`s are initialized with only one argument - a side length. In addition to all methods and properties of `Polygon`s **and** `Rectangles`, instances of the `Square` class should have the following methods available to it:
      * `getArea`
      * `getPerimeter`
      * `areaOfInscribedCircle`, which returns the area of a circle inscribed within the square (blast from the past, I know... 🙀).

      Example:
      ```javascript
      let square = new Square(10);
      square.getArea();               // 100
      square.getPerimeter();          // 40
      square.areaOfInscribedCircle(); // 78.5398163
      ```

8. **Bonus:** Add a method directly to the `Triangle` object that returns the length of the hypotenuse, given the length of two legs:
      ```javascript
      Triangle.getHypotenuse(3, 4);   // 5
      Triangle.getHypotenuse(5, 12);  // 13
      Triangle.getHypotenuse(15, 36);  // 39
      ```

