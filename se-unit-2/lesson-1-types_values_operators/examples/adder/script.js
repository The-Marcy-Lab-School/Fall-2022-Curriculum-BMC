// Main Program Logic
function run() {
    // Get User Input
    const num1 = prompt("choose a number");
    const num2 = prompt("choose another number!");

    // Program Logic (Act on the user input)
    const mySum = sum(num1, num2);

    // Show the user the result
    alert(`Your sum is ${mySum}!`);
}

// Helper Functions
function sum(a, b) {
    const sum = a + b; // Two different ways to convert
    return sum;
}