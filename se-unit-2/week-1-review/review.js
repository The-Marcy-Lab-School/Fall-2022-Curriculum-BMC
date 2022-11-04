/* Problem 0 */
/* 
4 kinds of scope:
- global
- script
- function (local)
- block (if / loops / ~function~)

*/
debugger;
let x = 10;

function foo() {
    let x = 5;
    if (true) {
      let x = 20;
        console.log(x);      
    }
}

foo();

console.log(x);



/* Problem 1 */
/* 
Hoisted Area:

// just the declaration is hoisted
var greeting;

// same as 
var greeting = undefined;
*/

function sayItLoud() {
    // is there a greeting in here?
  console.log(`${greeting}!!!`)
}

sayItLoud();

var greeting = "Hello!"

/* Problem 2 */
debugger;

const isSunny = true;

if (isSunny) {
  let status = 'No umbrella needed!';
  console.log(status);
} else {
  let status = 'Better wear a raincoat!'
}

console.log(status);

/* Problem 3 */

debugger
const hour = 10;

function amOrPm(hour) {
    // validate inputs
    // if invalid, return and exit early
    if (hour < 0 || hour > 23) {
        return "invalid time";
    } 
    
    // is it am or pm?
    if (hour < 12) {
        return "am";
    } 
    // implicit "else" (I would recommend just using else)
    return "pm";

}

const test1 = amOrPm(10);
const test2 = amOrPm(14);
const test3 = amOrPm(20);
const test4 = amOrPm(25);

console.log(test1, test2, test3, test4)


/* Problem 4 */
function doubleArray(arr) {
    debugger;
    const newArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        const currentValue = arr[i];
        const doubledValue = currentValue * 2;
        newArr.push(doubledValue)
    }

    return arr;
}

const result = doubleArray([1, 2, 3]);
console.log(result);