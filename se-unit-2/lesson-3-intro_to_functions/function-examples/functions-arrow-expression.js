// Expression is anything that resolves to a value
// 5 + 5;
// functions are values
// functions are expressions

function max(a,b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

const myOtherMax = max;

const maxExpression = function(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}

const maxArrow = (a, b) => {
    if (a > b) {
        return a;
    }
    else {
        return b;
    };
}

/* 
When the body of an arrow function can be written in one line,
the {} can be left out.

The function will return whatever the one line resolves to.
*/
const uppercase = (str) => { return str.toUpperCase() };
const uppercase2 = (str) => str.toUpperCase();

/* 
Given a and b:
    if a is greater than b, return a
    return b otherwise
*/
const maxOneLine = (a, b) => a > b ? a : b;





/* 
When to use arrow functions — when using higher-order functions
like forEach, filter, map, or reduce
*/
const mahaba = ['ben', 'carmen', 'motun'];
const allCapsMahaba = [];

mahaba.forEach((name) => {
    const upperName = name.toUpperCase();
    allCapsMahaba.push(upperName)
});

/* 
When arrow functions have one argument, we can leave out 
the parameter parentheses. 

When arrow functions are one line, we can leave out the 
code body's curly brackets
*/

allCapsMahaba.forEach(name => console.log(name));
