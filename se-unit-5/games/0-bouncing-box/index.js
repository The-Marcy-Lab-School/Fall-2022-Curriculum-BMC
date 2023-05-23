/* 
Notes:

*/    

console.log('DOM fully loaded and parsed');

////////////////////
// Variables
////////////////////

// DOM elements
const boxElement = document.getElementById("box")
const pauseElement = document.querySelector("#pause");

// Program Variables
let count = 0;
let x = 0;
let direction = 1;
let speed = 5;
let isPaused = false;

////////////////////
// Core Logic
////////////////////

/* 
setTimeout - execute code once after a delay
setInterval - execute code repeatedly with a delay between each execution
*/

let updateInterval = setInterval(update, 50); // 20x/second
console.log('updateInterval', updateInterval)

boxElement.addEventListener("click", handleBoxClick)
pauseElement.addEventListener("click", handlePauseClick)

////////////////////
// Helpers
////////////////////
function update() {
    console.log("tick");
    x += direction * speed;
    boxElement.style.left = `${x}px`;

    if (x + boxElement.clientWidth > document.body.clientWidth) {
        direction = -1;
    }
    if (x < 0) {
        direction = 1;
    }

    console.log(x);
}

function handleBoxClick(event) {
    console.log(event.target);
    console.log("box was clicked");
    count++;
    speed += 3;
    boxElement.innerText = count;
}

function handlePauseClick(event) {
    if (!isPaused) { // the game is running
        clearInterval(updateInterval)
        boxElement.removeEventListener("click", handleBoxClick)
        event.target.innerText = "resume";
        isPaused = true;
    } else { // the game is paused
        updateInterval = setInterval(update, 50)
        boxElement.addEventListener("click", handleBoxClick)
        event.target.innerText = "pause";
        isPaused = false;
    }
}