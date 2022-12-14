console.log("closures!");

// const user = {
//     name: "ben spector",
//     email: "ben@marcylabschool.org",
//     friends: [
//         "motun", "carmen"
//     ],
//     addFriend(name) {
//         this.friends.push(name)
//     },
//     printThis() {
//         console.log(this)
//     }
// }

// user.addFriend("Vinny");
// user.printThis();

// function makeVault(code) {
//     return {
//         _secretCode: code, // _ means that this is a "private value" and shouldn't be changeds
//         open: function(code) {
//             if (code === this._secretCode) {
//                 console.log("access granted")
//             }
//             else {
//                 console.log("access denied")
//             }
//         }
//     }
// }
// const myVault = makeVault(12345);
// myVault.open(12345);

// function getRandomPrinter() { // outer function
//     // a closure is created around this variable
    
//     const randomValue = Math.random();
//     console.log(`creating a random printer for ${randomValue}`);
    
//     function printRandom() { // inner function
        
//         console.log(randomValue);
//         // this reference saves a reference to randomValue that would otherwise be lost when the function finishes
//     };
    
//     // the returned function will retain a reference to the closure variables
//     return printRandom;
// }

// const randomPrinter1 = getRandomPrinter();
// randomPrinter1();
// randomPrinter1();
// randomPrinter1();

// const randomPrinter2 = getRandomPrinter();
// randomPrinter2();


// function makeCounter() {

//     // a closure is created "around" this variable
//     let count = 0;
    
//     // the returned object will retain a reference to count, even after it is returned from the function.
//     return {
//         getCount() {
//             return count;
//         },
//         increment() {
//             count = count + 1;
//         }
//     }
// }



// // each instance has its own count value
// const counter1 = makeCounter();
// const counter2 = makeCounter();

// counter1.increment();
// counter1.increment();
// counter1.increment();

// counter2.increment();

// console.log(counter1.getCount()); // 3
// console.log(counter2.getCount()); // 1

function makeVault(code) {
    
    let _secretCode = code;
    
    return {
        
        open: function(code) {
            if (code === _secretCode) {
                console.log("access granted")
            }
            else {
                console.log("access denied")
            }
        }
    }
}
const myVault = makeVault(12345);
myVault.open(12345);

const myVault2 = makeVault("hello");
myVault2.open("hello");



function makeContacts () {
    const contactList = [];
    return {
        getContacts () {
            console.log(contactList);
        },
        addContact (contact) {
            contactList.push(contact);
        },
        deleteFriend (friend) {
            contactList.filter((index) => index != friend);
        }
    };
}
