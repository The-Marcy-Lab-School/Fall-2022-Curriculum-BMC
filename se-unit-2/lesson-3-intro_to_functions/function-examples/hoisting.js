console.clear();

// To test hoisting, we can reference each binding at the top of the file
debugger;


// variables declared with var and function declarations 
// become global scoped if they aren't inside a function
var hoistedVar = 'beam me up scotty!';
function liftMeUp() {
    return "Weeeee";
}

let groundedLet = 'let is not hoisted';
const groundedConst = 'const is not hoisted';
const groundedFuncExpression = function() {
    return "Wait til I'm ready!";
}

const groundedArrowFunc = () => {
    return "Don't rush me"
}


console.log(hoistedVar)
console.log(liftMeUp())
console.log(groundedLet)
console.log(groundedConst)
console.log(groundedFuncExpression())
console.log(groundedArrowFunc())

