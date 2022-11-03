/* 
Scope
- Functions can be nested inside of other functions. Each function creates a 
new scope
- var variables and functions are function-scoped, NOT block scoped
- let and const variables are block scoped

Hoisting
- var variables are hoisted (their declaration only though)
- let and const variables are not hoisted
- function declarations are hoisted
*/
function runHighScore() {
    let highScore = 100;
    let newScore = prompt(`Current High Score: ${highScore}. Enter your score!`);
    
    highScore = max(highScore, newScore);
    alert(`The high score is: ${highScore}`);
   
    // Helper Functions are typically written as function declarations. This lets
    // us put them at the bottom of a file and keep the core logic at the top.
    function max(num1, num2) {
        if (num1 > num2) {
            return num1;
        } else {
            return num2;
        }
    }
      
}