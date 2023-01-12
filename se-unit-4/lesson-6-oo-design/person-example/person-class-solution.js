console.log("Connecting Classes with Other Classes");

class Person {
  constructor(name) {
    this.name = name;
    this.friends = [];
  }
  makeFriend(personObj) {
      if (this.friends.includes(personObj)) {
          return;
      } else {
        this.friends.push(personObj);
        personObj.makeFriend(this);
        console.log(`Hi ${personObj.name}, my name is ${this.name}, nice to meet you!`);
      }
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

const ben = new Person("Ben");
const reuben = new Programmer("Reuben", "JavaScript");
const carmen = new ProgrammingTeacher("Carmen", "JavaScript");

// Let's refactor the Person class so that we can pass in an entire person object to makeFriend
reuben.makeFriend(ben);
carmen.makeFriend(ben);

/* 
ben.makeFriend(reuben);
ben.makeFriend(carmen);
carmen.makeFriend(reuben);
*/

console.log(ben);