const SPEED = 10;
const bodyElement = document.body;
const boxElement = document.querySelector("#box");

document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);

let x = +boxElement.style.left.slice(0, -2);
let y = +boxElement.style.top.slice(0, -2);
let directionX = 0;
let directionY = 0;

let interval = setInterval(update, 50)

function update() {
    if (KEYS_PRESSED.ArrowLeft) {
        directionX = -1;
    } 
    else if (KEYS_PRESSED.ArrowRight) {
        directionX = 1;
    }
    
    if (KEYS_PRESSED.ArrowUp) {
        directionY = -1;
    }
    else if (KEYS_PRESSED.ArrowDown) {
        directionY = 1;
    }
    
    x += SPEED * directionX;
    y += SPEED * directionY;

    // don't let the box go out of bounds
    if (x > bodyElement.clientWidth - boxElement.offsetWidth) {
        x = bodyElement.clientWidth - boxElement.offsetWidth;
    }
    if (x < 0) {
        x = 0;
    }
    if (y > bodyElement.clientHeight - boxElement.offsetHeight) {
        y = bodyElement.clientHeight - boxElement.offsetHeight
    }
    if (y < 0) {
        y = 0;
    }
    
    boxElement.style.left = `${x}px`;
    boxElement.style.top = `${y}px`;
}

const KEY = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
}

const KEYS_PRESSED = {
    ArrowLeft: false,
    ArrowUp: false,
    ArrowRight: false,
    ArrowDown: false
}

function handleKeyDown(event) {  
    KEYS_PRESSED[event.key] = true;
}

function handleKeyUp(event) {  
    KEYS_PRESSED[event.key] = false;
    if (event.which === KEY.LEFT) {
        directionX = 0;
    } else if (event.which === KEY.RIGHT) {
        directionX = 0;
    }
    
    if (event.which === KEY.UP) {
        directionY = 0;
    }
     else if (event.which === KEY.DOWN) {
        directionY = 0;
    }
}


