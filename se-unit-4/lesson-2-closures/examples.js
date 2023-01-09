/* 
Closures are the combination of an inner function with the variables in the surround scope
A way to preserve variables inside of functions
*/

function makeCounter() {
    
    let count = 0;
    
    function incrementCount() {
        count++;
        console.log(count);
    }
    return incrementCount;
}

const counter1 = makeCounter();
counter1() // 1
counter1() // 2
counter1() // 3

const counter2 = makeCounter();
counter2(); // 1
counter2(); // 2

counter1(); // 4




function makeFriendList() {
    const _friends = [];
    return {
        // _friends: [],
        addFriends(name) {
            // this._friends.push(name)
            debugger;
            _friends.push(name);
        }, 
        getFriends() {
          return [..._friends]; 
        }
    }
}

const bensFriends = makeFriendList();
bensFriends.addFriends("Destiny")
bensFriends.addFriends("Amanda")
bensFriends.addFriends("Maya")
const friendsList = bensFriends.getFriends();
friendsList.pop();
friendsList.pop();

console.log(bensFriends.getFriends());


function makeGreeter(name) {
    // 1st Invocation: let name = "Ben"
    // 2nd Invocation: let name = "Maya"
    function greet() {
        debugger;
        console.log(`Hello ${name}`);
    }
    return greet;
}

const greeter1 = makeGreeter("Ben")
const greeter2 = makeGreeter("Maya");

greeter1();
greeter2();

