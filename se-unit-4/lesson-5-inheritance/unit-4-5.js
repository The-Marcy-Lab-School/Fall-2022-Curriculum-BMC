class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.friends = [];
    }
    makeFriend(friend) {
        this.friends.push(friend)
        console.log(`Hi ${friend}, my name is ${this.name}, nice to meet you!`);
    }
    doActivity(activity) {
        console.log(`${this.name} is ${activity}`);
    }
}
// Instantiate - to create an instance
// daniel is an instance of Person
// const daniel = new Person("Daniel", 20);
// daniel.makeFriend("Staceyann");

class Programmer extends Person {
    constructor(name, age, language) {
        super(name, age);
        this.favoriteLanguage = language
    }
    doActivity() {
        console.log(`I am writing some ${this.favoriteLanguage} code.`);
    }
}

class ProgrammingTeacher extends Programmer {
  constructor(name, age, language) {
    super(name, age, language)
  }
  doActivity() {
    console.log(`I am showing my ${this.favoriteLanguage} code to the class`);
  }
}
const reuben = new Programmer("Reuben", 35, "JavaScript");
const carmen = new ProgrammingTeacher("Carmen", 22, "JavaScript");

reuben.doActivity();
carmen.doActivity();

const programmers = [reuben, carmen]

programmers.forEach(programmer => programmer.doActivity())
