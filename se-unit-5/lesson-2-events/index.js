let bodyElement = document.body;
let dieElement = document.querySelector("#die");

drawDie(); // roll once initially

dieElement.addEventListener('click', drawDie); // set the event listener

function drawDie() {
    let roll = Math.floor(Math.random() * 6);
    dieElement.innerText = roll;
}


