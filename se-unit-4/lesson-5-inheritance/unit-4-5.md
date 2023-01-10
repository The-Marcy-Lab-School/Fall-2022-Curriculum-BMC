# Inheritance

**Inheritance** is a pillar of object-oriented programming. It describes a relationship between two classes: a **subclass** that inherits methods from a **superclass**. As a result, instances of the sub-class can use methods defined in a super-class. 

**Question: What are two of JavaScript's essential data types that demonstrate inheritance? Which is the subclass and which is the superclass?**

<details><summary>Answer</summary>

The `Array` class is a sub-class of the `Object` class which is the super-class.

Every Array inherits methods from the `Array.prototype` which inherits methods from the `Object.prototype`. Therefore, all arrays can use `Object.prototype` methods like `toString()`.

</details>
<br>

### Inheritance Chain

Inheritance can exist in a chain in which a sub-sub-class can inherit from a sub-class which inherits from a super-class.

![](./practice/diagram1.png)

**Question: What is the inheritance relationship between the `Professor` class and the `Person` class? What about the `GraduateStudent` class and the `Person` class?**

### Establishing Inheritance Between Custom Classes

Imagine we have our `Person` class and we want to make a subclass called `Programmer`. It will inherit the properties and methods of the superclass `Person` but it will have additional properties and behaviors that only instances of `Programmer` will have.

To do this, we use the `extends` and `super` keywords to define our `Programmer` class:

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.friends = [];
  }
  makeFriend(friend) { // inherited method
    this.friends.push(friend)
    console.log(`Hi ${friend}, my name is ${this.name}, nice to meet you!`);
  }
  doActivity(activity) {
    console.log(`${this.name} is ${activity}`);
  }
}

class Programmer extends Person {
  constructor(name, age, language) {
    super(name, age);
    this.favoriteLanguage = language
  }
  code() {
    super.doActivity(`writing some ${this.favoriteLanguage} code.`);
  }
}

const reuben = new Programmer("Reuben", 35, "JavaScript")
reuben.makeFriend("Ben");
reuben.doActivity("running");
reuben.code();

console.log(reuben instanceof Programmer);
console.log(reuben instanceof Person);
```

**Question 1: What does `extends` do?**

**Quesiton 2: What does `super` do?**

**Question 3: What do we know about the relationship between a `Programmer` and a `Person`?**

<details><summary>Ben's Answer</summary>

* `extends` sets `Person.prototype` as the prototype for `Programmer.prototype`
* `super()` calls the `Person` constructor function using its own value of `this`
* `super.doActivity` calls the `Person`'s `doActivity` method using its own value of `this`
* `Programmer` is said to be a **subclass** of `Person`. 
* `Person` is said to be a **superclass** of `Programmer`.
* `Programmer` will inherit properties and methods 
from `Person`
* Instances of `Programmer` are also instances of `Person`

</details>

## Polymorphism

Polymorphism is a concept in object-oriented programming where multiple types of objects share "signatures" (they have the same property and method names even if their values/implementations are different).

The impact of polymorphism is that our program can reliably use different types of objects in the same way if they all descend from the same parent class.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.friends = [];
  }
  makeFriend(friend) { // inherited method
    this.friends.push(friend)
    console.log(`Hi ${friend}, my name is ${this.name}, nice to meet you!`);
  }
  doActivity(activity) {
    console.log(`${this.name} is ${activity}`);
  }
}

class Programmer extends Person {
  constructor(name, age, language) {
    super(name, age);
    this.favoriteLanguage = language
  }
  code() {
    super.doActivity(`writing some ${this.favoriteLanguage} code.`);
  }
}

class ProgrammingTeacher extends Programmer {
  constructor(name, age, language) {
    super(name, age, language)
  }
  teach() {
    super.doActivity(`showing their ${this.favoriteLanguage} code to their class`);
  }
}

const ben = new Person("Ben", 28);
const reuben = new Programmer("Reuben", 35, "JavaScript");
const carmen = new ProgrammingTeacher("Carmen", 22, "JavaScript");

const people = [ben, reuben, carmen];

// Ben, reuben, and carmen are all hanging out
// Maya enters the room and wants to be friends with everyone!
// Because everyone is a Person, we can do this:
people.forEach(person => person.makeFriend("Maya"))
```

**Challenge: Refactor the `makeFriend` method so that instead of adding a friend's name, it takes in a Person object**

<details><summary>Ben's Solution</summary>

We only have to modify the `Person` class and all subclasses will inherit the new behavior. Instead of passing in a friend's name, pass in the entire Person object and have both friends add each other to the friend list.

</details>