# Practice Set 4.5 - SOLUTIONS

0. Polymorphism is providing an identical interface for objects of different types. For example, in JavaScript, both Number and Array data types have access to a `toString` method. Thus, we can call two different methods with the same name on two different data types and expect similar functionality. When we create custom objects, we can use identically named methods with different implementations and this would be an example of polymorphism as well:
      ```javascript
      class Circle {
        constructor(radius) {
          this.radius = radius;
        }
        
        getArea() {
          return Math.PI * this.radius**2;
        }
      }

      class Rectangle {
        constructor(length, width) {
          this.length = length;
          this.width = width;
        }

        getArea() {
          return length * width;
        }
      }

      let circ = new Circle(5);
      let rect = new Rectangle(5, 10);

      circ.getArea(); // 78.539...
      rect.getArea(); // 50
      ```

1. 
      ```javascript
      class Rectangle {
        constructor(width, length) {
          this.width = width;
          this.length = length;
        }

        getWidth() {
          return this.width;
        }

        getLength() {
          return this.length;
        }

        getArea() {
          return this.width * this.length;
        }
      }
      ```

2. 
      ```javascript
      class Square extends Rectangle {
        constructor(lengthOfSide) {
          super(lengthOfSide, lengthOfSide)
        }

        getSide() {
          return this.width;
        }
      }
      ```

3. 
      ```javascript
      class Animal {
        constructor(name, age, legs, species, status) {
          this.name = name;
          this.age = age;
          this.legs = legs;
          this.species = species;
          this.status = status;
        }
        introduce() {
          return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
        }
      }

      class Cat extends Animal {
        constructor(name, age, status) {
          super(name, age, 4, "cat", status);
        }
        introduce() {
          return `${super.introduce()} Meow meow!`;
        }
      }

      class Dog extends Animal {
        constructor(name, age, status, master) {
          super(name, age, 4, "dog", status);
          this.master = master;
        }
        greetMaster() {
          return `Hello ${this.master}! Woof, woof!`;
        }
      }
      ```

4. 
      ```javascript
      class Vehicle {
        constructor(make, model) {
          this.make = make;
          this.model = model;
        }

        info() {
          return `${this.make} ${this.model}`;
        }
      }

      class Car extends Vehicle {
        getWheels() {
          return 4;
        }
      }

      class Motorcycle extends Vehicle {
        getWheels() {
          return 2;
        }
      }

      class Truck extends Vehicle {
        constructor(make, model, payload) {
          super(make, model);
          this.payload = payload;
        }
        getWheels() {
          return 6;
        }
      }
      ```

5. To solve this problem, we will utilize the _mixin_ pattern:
      ```javascript
      const walkableMixin = {
        walk() {
          return `${this.name} ${this.gait()} forward`;
        }
      }
      ```

  In each class you should then include the `walkableMixin` like this:

  ```js
  class Person {
    constructor(name) {
      this.name = name;
      Object.assign(this, walkableMixin);
    }
  }
  ```

  Though we could have created a relationship of inheritance between all three of these classes, intuitively, we know that this would be a stretch given the potential differences in properties and behaviors of `Person`s, `Cat`s, and `Cheetah`s. Instead, this relationship with walking is best described as a `can-do` relationship and thus, a mixin is the best way to go.

6. **Note:** This is just one possible solution.
      ```javascript
      class Pet {
        constructor(animal, name) {
          this.animal = animal
          this.name = name;
        }
        info() {
          return `a ${this.animal} named ${this.name}`;
        }
      }

      class Owner {
        constructor(name) {
          this.name = name;
          this.pets = [];
        }

        addPet(pet) {
          this.pets.push(pet);
        }

        numberOfPets() {
          return this.pets.length;
        }

        printPets() {
          this.pets.forEach(pet => console.log(pet.info()));
        }
      }

      class Shelter {
        constructor() {
          this.owners = {};
        }

        adopt(owner, pet) {
          owner.addPet(pet);
          if (!this.owners[owner.name]) {
            this.owners[owner.name] = owner;
          }
        }

        printAdoptions() {
          for(let name in this.owners) {
            console.log(`${name} has adopted the following pets:`);
            this.owners[name].printPets();
            console.log("");
          }
        }
      }
      ```

7. 
      ```javascript
      class Banner {
        constructor(message) {
          this.message = message;
        }

        displayBanner() {
          console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
        }

        horizontalRule() {
          return `+-${'-'.repeat(this.message.length)}-+`
        }

        emptyLine() {
          return `| ${' '.repeat(this.message.length)} |`
        }

        messageLine() {
          return `| ${this.message} |`
        }
      }
      ```

8. 
      ```javascript
      class CircularQueue {
        constructor(size) {
          this.buffer = new Array(size).fill(null);
          this.nextPosition = 0;
          this.oldestPosition = 0;
        }

        enqueue(object) {
          if (this.buffer[this.nextPosition] !== null) {
            this.oldestPosition = this.increment(this.nextPosition);
          }
          this.buffer[this.nextPosition] = object;
          this.nextPosition = this.increment(this.nextPosition);
        }

        dequeue() {
          let value = this.buffer[this.oldestPosition];
          this.buffer[this.oldestPosition] = null;
          if (value !== null) {
            this.oldestPosition = this.increment(this.oldestPosition);
          }
          return value;
        }

        increment(position) {
          return (position + 1) % this.buffer.length;
        }
      }
      ```
9. [REDACTED FOR EXAM]

10. As we have seen in class, there is no one right answer to a question like this. In an ideal world, this would be asked in an interview setting, where you can ask clarifying questions. Make design choices to the best of your abilities.
