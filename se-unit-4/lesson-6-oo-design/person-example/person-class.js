class Person {
  constructor(name) {
    this.name = name;
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

class Programmer extends Person {
  constructor(name, language) {
    super(name);
    this.favoriteLanguage = language
  }
  code() {
    this.doActivity(`writing some ${this.favoriteLanguage} code.`);
  }
}
class ProgrammingTeacher extends Programmer {
  constructor(name, language) {
    super(name, language)
  }
  teach() {
    this.doActivity(`showing their ${this.favoriteLanguage} code to their class`);
  }
}

const ben = new Person("Ben", 28);
const reuben = new Programmer("Reuben", 35, "JavaScript");
const carmen = new ProgrammingTeacher("Carmen", 22, "JavaScript");

// Let's refactor the Person class so that we can pass in an entire person object to makeFriend

/* 
ben.makeFriend(reuben);
ben.makeFriend(carmen);
carmen.makeFriend(reuben);
*/