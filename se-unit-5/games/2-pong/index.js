/* 
Game Begins:
* Score for both players is 0
* Both paddles at the center of the screen vertically, on opposite sides horizontally
* paddles begin stationary
* ball starts in the middle horizontally and vertically
* starting velocity is non-0

Game Ends when one player has 11 points
* Show who won the game 
* Control over paddles stops
* Ball stops moving
* +Give an option to restart the game
* +maybe change the background
* ++faster for the next round

Gameplay, on each new frame:
* the ball should move
* the paddles should move
* check to see if the ball bounces off either paddle
    * maybe do something with the angle?
* check if it collides with the top/bottom wall, bounce
* check if it collides with the left/right wall, score a point
* +if collision occurs, increase velocity 
* +pause/resume feature

User Inputs:
* separate keyboard controls for each paddle
* +control paddle with mouse?

Bonus Features:
* Versus AI (mouse control)
* single player mode, mouse controls both sides

Visual Elements
* The arena (static)
* Two paddles (animated)
* The ball (animated)
* +Score Board (static, but modified in the game)
* ++Middle Line (static)

JavaScript Data:
* x,y position of the paddles
* x,y position of the ball
* speed of the ball
* direction of the ball
* scores for both sides
* width,height of ball, paddles, arena
* center width and height

*/

////////////////////////
// Variables
////////////////////////

const ball = makeGameItem("#ball");
const paddleLeft = makeGameItem("#paddle-left");
const paddleRight = makeGameItem("#paddle-right");

const arenaElement = document.querySelector("#arena");
const scoreElement = document.querySelector("#score");
const restartElement = document.querySelector("#restart");

const MIDDLE_X = arenaElement.offsetWidth / 2;
const MIDDLE_Y = arenaElement.offsetHeight / 2;

let score = {
    left: 0,
    right: 0,
}

const KEYS_PRESSED = {
    ArrowUp: false,
    ArrowDown: false,
    KeyW: false,
    KeyS: false,
}

let animationInterval;

////////////////////////
// Initial Setup
////////////////////////

setInitialPositions();
startGame();

////////////////////////
// New Frame Logic
////////////////////////

function newFrame() {
    moveBall();
    movePaddles();
    checkPaddleCollisions();
    checkWallCollisions();
    checkForScore();
}

////////////////////////
// Event Handlers
////////////////////////

function handleKeyDown(event) {
    KEYS_PRESSED[event.code] = true;
}

function handleKeyUp(event) {
    KEYS_PRESSED[event.code] = false;
}

////////////////////////
// Helper Functions
////////////////////////

// Factory Function
function makeGameItem(selector) {
    const newGameItem = {
        element: document.querySelector(selector),
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        directionX: 0,
        directionY: 0,
        speed: 10,
    }
    newGameItem.width = newGameItem.element.offsetWidth;
    newGameItem.height = newGameItem.element.offsetHeight;

    return newGameItem;
}

// Setup Helpers
function setInitialPositions() {
    let newBallX = MIDDLE_X - (ball.width / 2)
    let newBallY = MIDDLE_Y - (ball.height / 2)
    moveGameItem(ball, newBallX, newBallY);
    
    let newPaddleLeftX = 0;
    let newPaddleLeftY = MIDDLE_Y - (paddleLeft.height / 2);
    moveGameItem(paddleLeft, newPaddleLeftX, newPaddleLeftY);

    let newPaddleRightX = arenaElement.offsetWidth - paddleRight.width;;
    let newPaddleRightY = MIDDLE_Y - (paddleRight.height / 2);
    moveGameItem(paddleRight, newPaddleRightX, newPaddleRightY);
    
    ball.directionX = Math.random() > 0.5 ? 1 : -1;
    ball.directionY = Math.random() > 0.5 ? 0.5 : -0.5;
}

// Movement Helpers
function moveGameItem(gameItem, x, y) {
    gameItem.x = x;
    gameItem.y = y;
    gameItem.element.style.left = gameItem.x + "px";
    gameItem.element.style.top = gameItem.y + "px";
}

function moveBall() {
    let newBallX = ball.x + ball.directionX * ball.speed;
    let newBallY = ball.y + ball.directionY * ball.speed
    moveGameItem(ball, newBallX, newBallY)
}

function movePaddles() {
    if (KEYS_PRESSED.KeyW) {
        paddleLeft.directionY = -1;
    } else if (KEYS_PRESSED.KeyS) {
        paddleLeft.directionY = 1;
    } else {
        paddleLeft.directionY = 0;
    }

    if (KEYS_PRESSED.ArrowUp) {
        paddleRight.directionY = -1;
    } else if (KEYS_PRESSED.ArrowDown) {
        paddleRight.directionY = 1;
    } else {
        paddleRight.directionY = 0;
    }

    let newPaddleLeftY = paddleLeft.y + paddleLeft.directionY * paddleLeft.speed
    moveGameItem(paddleLeft, paddleLeft.x, newPaddleLeftY)

    let newPaddleRightY = paddleRight.y + paddleRight.directionY * paddleRight.speed
    moveGameItem(paddleRight, paddleRight.x, newPaddleRightY)

}

// Collisions
function checkWallCollisions() {
    // top - check the top of the ball and see if it is < 0
    // if it is: invert direction Y 
    // bottom - check the bottom of the ball and see if it is > height of the arena
    // if it is: invert direction Y 
    if (ball.y <= 0 || ball.y + ball.height > arenaElement.offsetHeight) {
        ball.directionY *= -1;
    }
}

function checkPaddleCollisions() {
    if (doCollide(ball, paddleLeft) || doCollide(ball, paddleRight)) {
        ball.directionX *= -1;
    }
}

function doCollide(objA, objB) {
    let objALeft = objA.x;
    let objARight = objA.x + objA.width;
    let objATop = objA.y;
    let objABottom = objA.y + objA.height;
    
    let objBLeft = objB.x;
    let objBRight = objB.x + objB.width;
    let objBTop = objB.y;
    let objBBottom = objB.y + objB.height;

    if (objALeft < objBRight && objARight > objBLeft && objATop < objBBottom && objABottom > objBTop) {
        return true;
    } else {
        return false;
    }
}

// Scoring
function checkForScore() {
    if (ball.x <= 0) {
        // right side scores
        score.right++;
        // reset the ball position
        setInitialPositions()
        scoreElement.innerText = `${score.left} | ${score.right}`;
    }
    else if (ball.x + ball.width > arenaElement.offsetWidth) { 
        // left side scores
        score.left++;
        // reset the ball position
        setInitialPositions()
        scoreElement.innerText = `${score.left} | ${score.right}`;
    }

    // check if either player scored 11 points: if so -> end the game
    if (score.left === 11) {
        endGame();
        scoreElement.innerText += '\nLeft Player Wins!'
    } else if (score.right === 11) {
        endGame();
        scoreElement.innerText += '\nRight Player Wins!'
    }
}


// Start and End Game
function startGame() {
    animationInterval = setInterval(newFrame, 500);

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    restartElement.addEventListener("click", restartGame);
}

function restartGame() {
    endGame();
    score.left = 0;
    score.right = 0;
    scoreElement.innerText = "0 | 0";
    setInitialPositions();
    startGame();
}

function endGame() {
    clearInterval(animationInterval);

    document.removeEventListener("keydown", handleKeyDown);
    document.removeEventListener("keyup", handleKeyUp);
}