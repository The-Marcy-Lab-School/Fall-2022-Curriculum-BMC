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

let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
let turn = 0;
let weHaveAWinner = false;

// DOM Elements

const rowInput = document.getElementById("input-row");
const columnInput = document.getElementById("input-column");
const enterButtonElement = document.getElementById("button-enter");
const restartButtonElement = document.getElementById("button-restart");
const outcomeElement = document.getElementById("header-outcome");

////////////////////////////////////////////////////////////
// Entry Point /////////////////////////////////////////////
////////////////////////////////////////////////////////////

function submitTurn(row, column) {
    // if the row/column weren't passed to the function, get them from the input
    if (!row || !column) {
        // Get row and column from the input fields
        const valuesFromInputs = getValuesFromInput()
        if (valuesFromInputs) {
            row = valuesFromInputs.row;
            column = valuesFromInputs.column;
        } else {
            console.log(`invalid input ${row}, ${column}`);
            return;
        }

    }

    // Attempt to place the piece
    if (!isAvailableSpot(board, row, column)) {
        return;   
    }

    placePiece(board, row, column)

    // Re-render the board
    renderBoard(board);

    // Increment the turn
    turn++;

    // Check if the game is over
    weHaveAWinner = checkGameOver(board);

    if (weHaveAWinner || turn === 9) {
        renderResult(weHaveAWinner, turn);
    }
}

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
    outcomeElement.innerHTML = "";
    enterButtonElement.style.display = "block";
    restartButtonElement.style.display = "none";
}

////////////////////////////////////////////////////////////
// DOM HELPERS /////////////////////////////////////////////
////////////////////////////////////////////////////////////

function getValuesFromInput() {
    // Extract input values and convert values
    let row = rowInput.value ? Number(rowInput.value)-1 : null;
    let column = columnInput.value ? Number(columnInput.value)-1 : null;

    // Reset the input elements
    rowInput.value = '';
    columnInput.value = '';
    return { row, column };
}

function renderBoard(board) {
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            const boardValue = board[r][c];
            let tableItem = document.getElementById(`${r+1}-${c+1}`)
            tableItem.innerHTML = boardValue ? boardValue : '-';
        }
    }
}

function renderResult(weHaveAWinner, turn) {
    outcomeElement.innerHTML = getResult(weHaveAWinner, turn);
    enterButtonElement.style.display = "none";
    restartButtonElement.style.display = "block";
}

////////////////////////////////////////////////////////////
// GAME LOGIC HELPERS //////////////////////////////////////
////////////////////////////////////////////////////////////

function isAvailableSpot(board, row, column) {
    // Exit early if input is invalid or the space is taken
    if (row < 0 || row > 2 || column < 0 || column > 2 || board[row][column] !== null) {
        return false;
    }
    return true;
}


function placePiece(board, row, column) {
    // Insert turn into board
    board[row][column] = turn % 2 === 0 ? 'X' : '0';
    return board;
}

function checkGameOver(board) {
    // Check rows
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

    // for each row, check if the columns in that row match and are not null
    for (let r = 0; r < 3; r++) {
        checks[`row${r}`] =
            board[r][0] !== null &&
            board[r][0] === board[r][1] &&
            board[r][1] === board[r][2];
    }

    // for each column, check if the rows in that column match and are not null
    for (let c = 0; c < 3; c++) {
        checks[`column${c}`] =
            board[0][c] !== null &&
            board[0][c] === board[1][c] &&
            board[1][c] === board[2][c];
    }

    // Check Diagonals (NW > SE, NE > SW)
    checks.NWtoSE = board[0][0] !== null && board[0][0] === board[1][1] && board[1][1] === board[2][2];
    checks.NEtoSW = board[0][2] !== null && board[0][2] === board[1][1] && board[1][1] === board[2][0];

    // The game is over if any of the checks are true
    return Object.values(checks).includes(true);
}

function getResult(weHaveAWinner, turn) {
    if (!weHaveAWinner) {
        return "It's a tie!";
    }

    const winner = turn % 2 === 0 ?
        'O' :
        'X';

    return `Player ${winner} wins!`;
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