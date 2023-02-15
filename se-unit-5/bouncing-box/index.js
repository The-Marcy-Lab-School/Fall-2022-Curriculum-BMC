/* 
Notes:

*/    

console.log('DOM fully loaded and parsed');

////////////////////
// Variables
////////////////////
let count = 0;
let x = 0;
const boxElement = document.getElementById("box")
const pauseElement = document.getElementById("pause");
////////////////////
// Core Logic
////////////////////

/* 
setTimeout - execute code once after a delay
setInterval - execute code repeatedly with a delay between each execution
*/

setInterval(update, 50);

boxElement.addEventListener("click", handleBoxClick)
pauseElement.addEventListener("click", handlePauseClick)

////////////////////
// Helpers
////////////////////
function update() {
    console.log("tick");
    x += 10;
    boxElement.style.left = `${x}px`;
    console.log(x);
}

function handleBoxClick() {
    console.log("box was clicked");
    count++;
    boxElement.innerText = count;
}

function handlePauseClick() {
    console.log("pause button was clicked");
}