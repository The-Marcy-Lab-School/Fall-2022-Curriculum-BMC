////////////////////////////////////////////////////////////
// VARIABLE INITIALIZATION//////////////////////////////////
////////////////////////////////////////////////////////////
const board = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
]
let turn = 0;
let weHaveAWinner = false;

////////////////////////////////////////////////////////////
// ENTRY POINT /////////////////////////////////////////////
////////////////////////////////////////////////////////////
function startTurn() {
    console.clear();
    printTable(board);

    // Get row / column
    const row = Number(prompt("Enter a row — 1 | 2 | 3")) - 1;
    const column = Number(prompt("Enter a column — 1 | 2 | 3")) - 1;

    // Submit it to be processed by submitTurn
    submitTurn(board, row, column);
}

/* These two functions could easily be combined, however 
it is nice to separate the "getting the inputs" part of the
logic from the "handling the inputs" part of the logic */

function submitTurn(row, column) {
    if (weHaveAWinner) { return; } // the game is currently in an "over" state, do nothing

    // Check if the row/column spot is available. If not, exit early
    if (!isAvailableSpot(board, row, column)) {
        console.log("spot is not available");
        return;   
    }

    // The spot is available, place it on the board.
    board[row][column] = getPlayer(turn);

    // Re-render the board
    printTable(board);
    
    // Check if the game is over
    weHaveAWinner = isGameOver(board);
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

/* Returns 'X' on even-numbered turns, 'O' on odd-numbered turns */
function getPlayer(turn) {
   return turn % 2 === 0 ? 'X' : 'O';
}

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
    if (row < 0 || row > 2 || column < 0 || column > 2 || board[row][column] !== '-') { 
        return false;
    }
    return true;
}

/* 
This function checks 8 different win conditions. It checks if there are 3
matching values in each row, each column, and along the two diagonals. If
any of these values contain a matching set, it returns true; false otherwise.
*/
function isGameOver(board) {
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

    // for each row, check if the columns in that row are not '-' and all match
    for (let r = 0; r < 3; r++) {
        checks[`row${r}`] = (board[r][0] !== '-') && (board[r][0] === board[r][1]) && (board[r][1] === board[r][2]);
    }

    // for each column, check if the rows in that column are not '-' and all match
    for (let c = 0; c < 3; c++) {
        checks[`column${c}`] = (board[0][c] !== '-') && (board[0][c] === board[1][c]) && (board[1][c] === board[2][c]);
    }

    // Check Diagonals (NW > SE, NE > SW)
    checks.NWtoSE = board[0][0] !== '-' && board[0][0] === board[1][1] && board[1][1] === board[2][2];
    checks.NEtoSW = board[0][2] !== '-' && board[0][2] === board[1][1] && board[1][1] === board[2][0];

    // The game is over if any of the checks are true
    return Object.values(checks).includes(true);
}

function printTable(table) {
    console.log(`   1 2 3`);
    console.log(`1 `, ...table[0]);
    console.log(`2 `, ...table[1]);
    console.log(`3 `, ...table[2]);
    console.log('\n');
}


function announceTurn(turn) {
    console.log(`Next Up: ${getPlayer(turn)}`);
}

function announceWinner(turn) {
    const winner = getPlayer(turn);
    console.log(`Player ${winner} wins!`);
    
}

/* This function uses the infoElement to display a tie. The enter button
is replaced by the restart button as well. */
function announceTie() {
    console.log("It's a tie!");
}


function restart() {
    // Reset Variables
    weHaveAWinner = false;
    turn = 0;
    for (let r = 0; r < board.length; r++) {
        board[r] = ["-", "-", "-"]
    }
    printTable(board);
}

// Snippet do this thing where they print value returned by the last statement
'readyToPlay!';