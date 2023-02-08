// console.log(document.body);

// window.addEventListener("load", (event) => {
    
//     ///////////////////////////////
//     // Variables
//     ///////////////////////////////
    
//     // Constants
//     const SPEED = 10;
    
//     // DOM Element Nodes
//     const bodyElement = document.body;
//     const boxElement = document.querySelector("#box");
    
//     // Box Variables
//     let x = 0;
//     let direction = 1;
    
//     // Timer
//     let interval = setInterval(update, 50)
    
//     ///////////////////////////////
//     // Timer Logic
//     ///////////////////////////////
    
    // function update() {
    //     updateBoxPosition();
    //     checkForBounces();
    // }
    
    // /////////////////////////////
    // Helper Functions
    /////////////////////////////
    
    function updateBoxPosition() {
        x += SPEED * direction;
        boxElement.style.left = `${x}px`;
    }
    
    function checkForBounces() {
        if (x > bodyElement.clientWidth - boxElement.offsetWidth) {
            direction = -1;
        }
        if (x < 0) {
            direction = 1;
        }
    }
// });

// console.log(document.body);

window.addEventListener("load", (event) => {
    ///////////////////////////////
    // Variables and Initialization
    ///////////////////////////////
    const boxElement = document.querySelector("#box");
    const pauseButton = document.querySelector("#pause");
    pauseButton.addEventListener("click", pause);
    let x = 0;
    let speedX = 10;
    let directionX = 1;
    let interval = setInterval(update, 50);
    
    ///////////////////////////////
    // Core Execution Logic
    ///////////////////////////////
    
    function update() {
        updateBoxPosition();
        checkForBounces();
    }
    
    ///////////////////////////////
    // Helper Functions
    ///////////////////////////////
    
    function pause() {
        clearInterval(interval);
    }
    
    function updateBoxPosition() {
        x += speedX * directionX;
        boxElement.style.left = `${x}px`;
    }
    
    function checkForBounces() {
        if (x > document.body.clientWidth - boxElement.offsetWidth) {
            directionX = -1;
        }
        if (x < 0) {
            directionX = 1;
        }
    }
    
});