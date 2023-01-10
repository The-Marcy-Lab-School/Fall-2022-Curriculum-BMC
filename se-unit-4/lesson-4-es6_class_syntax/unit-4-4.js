// "use strict"

console.log("ES6 Classes");

/* 
Person:
- Properties: 
    - name: string
    - age: number
    - friends: array
- Methods
    - makeFriend
    - greet
*/

// Prototype relates to inheritance
// Prototype is like a blueprint we can make instances from
// The .prototype property is an object on a constructor function
// The .prototype property contains the methods that all instances inherit from


// separation of concerns
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.friends = [];
// }
// Person.prototype.makeFriend = function(friend) {
//     this.friends.push(friend);
// }
// const ben = new Person("Ben", 28);

// how is the value of this determined?
// - execution context
// - based on the object that the method is called on

// const reuben = new Person("Reuben", 35);

// ben.makeFriend("Maya");
// reuben.makeFriend("Ann");

// what is .__proto__?
// - goes hand-in-hand with prototype
// - property of objects (instances of a constructor)
// - returns the .prototype property of the constructor that made the instance




///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////




// const ben = new Person("Ben", 28);
// ben.makeFriend("Ann");
// ben.greet();

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.friends = [];
    }
    
    makeFriend(friend) {
        this.friends.push(friend)
        console.log(`Hi ${friend}, my name is ${this.name}, nice to meet you!`)
    }
    
    greet() {
        console.log('hi')
    }
}

/// Refactor Challenge

// class User {
//     constructor(username) {
//         this.username = username;
//         this.isOnline = false;
//     }
    
//     login(){
//         this.isOnline = true;
//         console.log(`${this.username} has logged in!`);
//     }
    
//     logout () {
//       this.isOnline = false;
//       console.log(`${this.username} has logged out!`);
//     }
// }


// const userBen = new User("Ben");
// userBen.login();
// userBen.logout();


