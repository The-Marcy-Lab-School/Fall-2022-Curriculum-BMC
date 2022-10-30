console.clear();

/* 
- Entry point from HTML into JavaScript: submitTurn()
- document.getElementById to access HTML from JavaScript
- Global Variable Initialization
- DOM interaction functions
- Game Logic functions
*/

////////////////////////////////////////////////////////////
// GLOBAL VARIABLE INITIALIZATION //////////////////////////
////////////////////////////////////////////////////////////

// Game variables
let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
let turn = 0; // Even turns are 'X', odd turns are 'O'
let weHaveAWinner = false;

// DOM Elements
const rowInput = document.getElementById("input-row");
const columnInput = document.getElementById("input-column");
const enterButtonElement = document.getElementById("button-enter");
const restartButtonElement = document.getElementById("button-restart");
const infoElement = document.getElementById("header-info");

////////////////////////////////////////////////////////////
// Entry Point /////////////////////////////////////////////
////////////////////////////////////////////////////////////

/* 
The entry point is the only function that directly accesses and modifies
global variables. The entry point will pass their values as arguments to
helper functions as needed. Helper functions should strive to remain pure
*/
function submitTurn(row, column) {
    if (weHaveAWinner) { return; } // the game is currently in an "over" state, do nothing

    // Check if the row/column spot is available. If not, exit early
    if (!isAvailableSpot(board, row, column)) {
        return;   
    }

    // The spot is available, place it on the board.
    board[row][column] = getPlayer(turn);

    // Re-render the board
    renderBoard(board, turn);
    
    // Check if the game is over
    weHaveAWinner = checkGameOver(board);
    if (weHaveAWinner) {
        announceWinner(turn);
    } 
    // or... check if we have a tie
    else if (turn === 8) {
        announceTie();
    } 
    // Otherwise, just increment the turn and announce it
    else {
        turn++;
        announceTurn(turn)
    }
}

////////////////////////////////////////////////////////////
// GAME LOGIC HELPERS //////////////////////////////////////
////////////////////////////////////////////////////////////


/* 
This function checks if a provided row/column position is available in the board.
A row/column position may not be available if the values are outside of the board's
indices (0|1|2) or if there is a 'X' or 'O'
*/
function isAvailableSpot(board, row, column) {
    // Written left to write in increasing specificity to ensure short circuiting 
    // before the final condition. For example, if the row is 4, board[4] returns
    // undefined. As a result, the final condition will throw an error because we
    // will end up with undefined[column] and we can't index into undefined. Due 
    // to short circuiting of the || operator, if the row or column values fall out 
    // of the board's range, the condition will return false before we get to the
    // final condition.
    if (row < 0 || row > 2 || column < 0 || column > 2 || board[row][column] !== null) { 
        return false;
    }
    return true;
}

/* 
This function checks 8 different win conditions. It checks if there are 3
matching values in each row, each column, and along the two diagonals. If
any of these values contain a matching set, it returns true; false otherwise.
*/
function checkGameOver(board) {
    // Using an object is not necessary but it makes it easier to organize the
    // various checks. I can also print out the entire object at the end of 
    // the function when testing to see the entire result set of checks.
    const checks = {
        row0: false,
        row1: false,
        row2: false,
        column0: false,
        column1: false,
        column2: false,
        NWtoSE: false,
        NEtoSW: false
    };

    // for each row, check if the columns in that row are not null and all match
    for (let r = 0; r < 3; r++) {
        checks[`row${r}`] = (board[r][0] !== null) && (board[r][0] === board[r][1]) && (board[r][1] === board[r][2]);
    }

    // for each column, check if the rows in that column are not null and all match
    for (let c = 0; c < 3; c++) {
        checks[`column${c}`] = (board[0][c] !== null) && (board[0][c] === board[1][c]) && (board[1][c] === board[2][c]);
    }

    // Check Diagonals (NW > SE, NE > SW)
    checks.NWtoSE = board[0][0] !== null && board[0][0] === board[1][1] && board[1][1] === board[2][2];
    checks.NEtoSW = board[0][2] !== null && board[0][2] === board[1][1] && board[1][1] === board[2][0];

    // The game is over if any of the checks are true
    return Object.values(checks).includes(true);
}

/* Returns 'X' on even-numbered turns, 'O' on odd-numbered turns */
function getPlayer(turn) {
   return turn % 2 === 0 ? 'X' : 'O';
}


////////////////////////////////////////////////////////////
// DOM HELPERS /////////////////////////////////////////////
////////////////////////////////////////////////////////////

/* 
This function uses the board's data representation (a 2D array)
to update the DOM's board presentation (buttons arranged in a table).
Each piece of the board in the DOM is a button with an id in the form
"row-column" where the row and column values are values between 1-3.

For example, the center position is: `<button id="2-2">`
*/
function renderBoard(board) {
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            // Get the value from the board 2D array
            const boardValue = board[r][c];

            // Get the corresponding table element (ids are 1-indexed so add 1)
            let tableItem = document.getElementById(`${r+1}-${c+1}`)

            // Render the boardValue if not null, or '-' if null
            tableItem.innerHTML = boardValue ? boardValue : '-';
        }
    }
}

/* This function uses the infoElement to display who's turn it is */
function announceTurn(turn) {
    infoElement.innerHTML = `Turn: ${getPlayer(turn)}`
}

/* This function uses the infoElement to display the winner. The enter 
button is replaced by the restart button as well. */
function announceWinner(turn) {
    const winner = getPlayer(turn);
    infoElement.innerHTML = `Player ${winner} wins!`;
    enterButtonElement.style.display = "none";
    restartButtonElement.style.display = "block";
}

/* This function uses the infoElement to display a tie. The enter button
is replaced by the restart button as well. */
function announceTie() {
    infoElement.innerHTML = "It's a tie!";
    enterButtonElement.style.display = "none";
    restartButtonElement.style.display = "block";
}

/* This function resets the game variables, and resets the DOM elements */
function restart() {
    // Reset Variables
    weHaveAWinner = false;
    turn = 0;
    board = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];

    // Reset DOM elements
    renderBoard(board);
    announceTurn(turn);
    enterButtonElement.style.display = "block";
    restartButtonElement.style.display = "none";
}

/* TESTS */
/* 
console.log(getResult(false, 9)) // Should be a tie
console.log(getResult(true, 9)) // X Wins
console.log(getResult(true, 4)) // O Wins

const testBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]
console.log(placePiece(testBoard, 2, 2));
console.log(placePiece(testBoard, 2, 2));
console.log(placePiece(testBoard, 4, 4));

console.log(placePiece([
    [null, null, null],
    [null, null, null],
    [null, null, null],
], 2, 2));

console.log(checkGameOver([
    [null, 'X', null],
    [null, 'X', null],
    [null, 'X', null]
]))

console.log(checkGameOver([
    ['X', null, null],
    ['X', null, null],
    ['X', null, null]
]))

console.log(checkGameOver([
    ['X', null, null],
    ['X', null, null],
    ['X', null, null]
]))

console.log(checkGameOver([
    ['X', 'X', 'X'],
    [null, null, null],
    [null, null, null]
]))

console.log(checkGameOver([
    [null, null, null],
    ['X', 'X', 'X'],
    [null, null, null]
]))

console.log(checkGameOver([
    [null, null, null],
    [null, null, null],
    ['X', 'X', 'X']
]))

console.log(checkGameOver([
    ['X', null, null],
    [null, 'X', null],
    [null, null, 'X']
]))

console.log(checkGameOver([
    [null, null, 'X'],
    [null, 'X', null],
    ['X', null, null]
]))

console.log(checkGameOver([
    [null, null, null],
    [null, null, null],
    [null, null, null],
]))
*/