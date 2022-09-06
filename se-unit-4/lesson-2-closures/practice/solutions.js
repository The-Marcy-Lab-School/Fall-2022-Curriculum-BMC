// Question 1
/*
 We call a function a closure when it creates an enclosed scope that can only be accessed by the function or object method that is returned by the function.
*/

// Question 2
function makeCounter() {
  let count = 0;       // declare a new variable
  return function() {
    count += 1;        // references count from the outer scope
    console.log(count);
  };
}

// Question 3
/* On line 8, of the code snippet, we initialize a variable calculateSum and assign a value of the function returned when the function sum is invoked. Thereafter, every invocation of calculate sum is referencing the variable initialValue that was initialized when we invoked sum. Since we only invoke sum one time, initialValue is only initialized one time. Thus, the value does not change.
 */

// Question 4

// Question 5
const makeFriendList = function() {
  const friends = [];
  
  return {
    addFriend(friend) {
      friends.push(friend);
      return `${friend} successfully added.`;
    },
    removeFriend(friend) {
      if (!friend.includes(friend)) return `${friend} not found.`;

      friends.splice(friends.indexOf(friend), 1);
      return `${friend} successfully removed.`
    }
    displayFriend() {
      console.log(friends);
    }
  }
};

// Question 6
function makeCounterLogger(start) {
  return function(finish) {
    if (start > finish) {
      for (let i = start; i >= finish; i -= 1) {
        console.log(i);
      }
    } else {
      for (let i = start; i <= finish; i += 1) {
        console.log(i);
      }
    }
  };
}
