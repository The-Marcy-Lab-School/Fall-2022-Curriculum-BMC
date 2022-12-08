console.clear();

/* 
Vocab:
- Objects
    - Properties    
    - Methods
- this
- factory functions
*/
// A method is a function that exists in an object. Array methods:
// array.push, array.reverse(), array.splice, array.pop





// Factory Function
// A function that returns an object with particular set of properties and methods
// - helper function that simplifies our code by making it easier to create many objects with the same properties
// DRY - DONT REPEEAT YOURSELF

function makeBusiness(name, address) {
    return {
        name: name,
        address: address,
        getDirection: function() {
            console.log(`Navigating to the ${this.name} at ${this.address}`)
        }
    }
}

// we can use factory functions to create "instances" of the factory object
const marcyLabSchool = makeBusiness("The Marcy Lab School", '882 3rd Ave 11th floor, Brooklyn, NY 11232')
const gravesendPizza = makeBusiness("Gravesend Pizza", "181 34th St, Brooklyn, NY 11232");

// this, when used in a method, refers to the object that the method is called on
gravesendPizza.getDirection() // this refers to gravesendPizza
marcyLabSchool.getDirection() // this refers to marcyLabSchool


// We can change the values of the object and our methods will work with the updated value!
gravesendPizza.name = gravesendPizza.name.toUpperCase()
gravesendPizza.getDirection() 

// Instead of creating these objects manually with custom code for the greet method...

// let person1 = {
//     firstName: "Ben",
//     lastName: "Spector",
//     email: "ben@marcyLabSchool.org",
//     hobbies: ['coding', 'soccer', 'music'],
//     isInstructor: true,
//     heightInches: 71,
//     greet: function(name) {
//         console.log(this);
//         console.log(`Hello ${name}. My name is ${person1.firstName}`);
//     }
// }


// let person2 = {
//     firstName: "Reuben",
//     lastName: "Ogbanna",
//     email: "reuben@marcyLabSchool.org",
//     hobbies: ['coding', 'lifting weights', 'being a boss'],
//     isInstructor: false,
//     heightInches: 71,
//     greet: function(name) {
//         console.log(this);
//         console.log(`Hello ${name}. My name is ${person2.firstName}`);
//     }
// }

// make a factory function

function makePerson(first) {
    return {
        firstName: first,
        greet: function(name) {
            console.log(`Hello ${name}. My name is ${this.firstName}`);
        }
    }
}

const person1 = makePerson("Ben");
const person2 = makePerson("Reuben");

person1.greet("Maya");
person2.greet("Ann");


// This gets really powerful if we use an array of names to create a person object for each!
const names = ["Maya", "Ann", "Carmen", "Motun", "Gabe"];
const people = names.map(name => makePerson(name));
console.log(people)