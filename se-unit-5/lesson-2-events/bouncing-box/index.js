const SPEED = 10;
const bodyElement = document.body;
const boxElement = document.querySelector("#box");

let x = 0;
let direction = 1;

let interval = setInterval(update, 50)

function update() {
    x += SPEED * direction;
    boxElement.style.left = `${x}px`;

    if (x > bodyElement.clientWidth - boxElement.offsetWidth) {
        direction = -1;
    }
    if (x < 0) {
        direction = 1;
    }
}

