const fs = require('fs');

// Run this program by entering the following into the command line:
// cd into the scripts folder
// node makePairs.js <groupSize> <csv file>

/* 
process.argv contains the arguments passed to the command line
0 - node
1 - this file (makePairs.js)
2 - the first argument after makePairs.js 
3 - the roster file
*/
const groupSize = process.argv[2];
const rosterFile = process.argv[3];
if (!groupSize || !rosterFile) {
  console.log("You need a group size and rosterFile. Try node makePairs 2 roster/summer23capstone.txt")
  process.exit(1);
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

const allFileContents = fs.readFileSync(rosterFile, 'utf-8');
const roster = allFileContents.split(/,\n?/);

// made some manual pairs because of office hours
let pairs = [];

// randomize the roster
shuffleArray(roster);

while (roster.length) {                 // while there are still people in the roster
  let group = [];                       // make a new group
  for (let i = 0; i < groupSize; i++) { // loop groupSize times. on each loop:
    group.push(roster.pop());           // remove one from roster and add it to group
  }
  pairs.push(group);                    // after, add the group to the pairs array
}

console.table(pairs);


// HELPERS


const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
