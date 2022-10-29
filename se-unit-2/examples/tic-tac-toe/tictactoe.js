console.clear();

/* 
Entry point from HTML into JavaScript
document methods to get access to HTML from JavaScript

JS:
- variables
- DOM interaction functions
- game logic functions

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
let gameOver = false;

// DOM Elements
const rowInput = document.getElementById("row");
const columnInput = document.getElementById("column");
const enterElement = document.getElementById("enter");
const restartElement = document.getElementById("restart");
const outcomeElement = document.getElementById("outcome");

////////////////////////////////////////////////////////////
// Entry Point /////////////////////////////////////////////
////////////////////////////////////////////////////////////

function submitTurn() {
    // Get inputs and place the piece
    const { row, column } = getRowColumnFromInput()
    
    // Attempt to place the piece
    const successfulPlacement = placePiece(board, row, column);
    if (successfulPlacement) {
        // Re-render the board
        renderBoard();
        
        // Increment the turn
        turn++;
        
        // Check if the game is over
        gameOver = checkGameOver(board);
        
        if (gameOver || turn === 9) {
            renderResult(gameOver, turn);
        }
    }
}

////////////////////////////////////////////////////////////
// DOM HELPERS /////////////////////////////////////////////
////////////////////////////////////////////////////////////

function getRowColumnFromInput() {
    // Extract input values and convert values
    let row = Number(rowInput.value) - 1;
    let column = Number(columnInput.value) - 1;

    // Reset the input elements
    rowInput.value = '';
    columnInput.value = '';
    
    return { row, column };
}

function renderBoard() {
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            const boardValue = board[r][c];
            let tableItem = document.getElementById(`${r+1}${c+1}`)
            tableItem.innerHTML = boardValue ? boardValue : '-';
        }
    }
}

function renderResult(gameOver, turn) {
    outcomeElement.innerHTML = getResult(gameOver, turn);
    enterElement.style.display = "none";
    enterElement.style.display = "none";
    restartElement.style.display = "block";
}

function restart() {
    gameOver = false;
    turn = 0;
    board = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];
    renderBoard();
    outcomeElement.innerHTML = "";
    enterElement.style.display = "block";
    restartElement.style.display = "none";
}

////////////////////////////////////////////////////////////
// GAME LOGIC HELPERS //////////////////////////////////////
////////////////////////////////////////////////////////////

function placePiece(board, row, column) {
    // Exit early if input is invalid or the space is taken
    if (row < 0 || row > 2 || column < 0 || column > 2 ||board[row][column] !== null) {
        alert("Invalid Input");
        return false;
    }

    // Insert turn into board
    board[row][column] = turn % 2 === 0 ? 'X' : '0';
    return true;
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

function getResult(gameOver, turn) {
    if (!gameOver) {
        return "It's a tie!";
    }

    const winner = turn % 2 === 0 
        ? 'O' 
        : 'X';

    return `Player ${winner} wins!`;
}