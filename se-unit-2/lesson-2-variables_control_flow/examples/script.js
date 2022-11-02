/*
Agenda:
- Walk through the code, looking at each function using the debugger
- Fellows pair up and discuss questions
- Come back together

Notes:
- The purpose of variables
    - to make data more readable
    - to reuse data
    - to track a value
- constant variables 
- 

Questions:
- How does having the MAX_FLIPS and TARGET_FLIPS constants benefit our program?
- Why is it that runCoinToss() and howManyFlipsTo500() can both
have variables called numHeads?
- In howManyFlipsTo500(), what does 'break' do? 
- In howManyFlipsTo500ForLoop(), what is the error?
*/


const MAX_FLIPS = 1000;
const TARGET_HEADS = 500;

/////////////////////////////
// Helper Function
/////////////////////////////

/* This function will randomly return "Heads" or "Tails" */
function flipCoin() {
    const randomDecimalBetween0And1 = Math.random();
    
    if (randomDecimalBetween0And1 > 0.5) {
        return "Heads";
    } else {
        return "Tails";
    }
}

/////////////////////////////
// Main Functions 
/////////////////////////////

/* This function will flip a coin 1000 times, counting how 
many heads and how many tails were flipped. */
function runCoinToss() {
    let numHeads = 0;
    let numTails = 0;
    
    for (let flips = 0; flips < MAX_FLIPS; flips++) {
        const result = flipCoin();
        
        if (result === "Heads") {
            numHeads++;
        } else if (result === "Tails") {
            numTails++;
        }
    }
    
    alert(`There were ${numHeads} heads and ${numTails} tails`);
}

/* 
This function will attempt to flip 500 heads before reaching 1000 total 
flips. Can it make it? Or will the loop stop before reaching 500!
*/
function howManyFlipsTo500() {
    let numHeads = 0;
    let flips = 0;
    
    while (numHeads < TARGET_HEADS) {
        const result = flipCoin();
        if (result === "Heads") {
            numHeads++;
        }
        
        flips++;
        
        if (flips === MAX_FLIPS) {
            console.log("didnt make it!")
            break;
        }
    }
    
    
    alert(`You got ${numHeads} heads in ${flips} flips!`);
}







/* 
This function will attempt to flip 500 heads before reaching 1000 total 
flips. Can it make it? Or will the loop stop before reaching 500!
*/
function howManyFlipsTo500ForLoop() {
    let numHeads = 0;

    for (let flips = 0; flips < MAX_FLIPS; flips++) {
        const result = flipCoin();
        if (result === "Heads") {
            numHeads++;
        }

        if (numHeads === TARGET_HEADS) {
            break;
        }
    }
    
    
    alert(`You got ${numHeads} heads in ${flips} flips!`);
}
