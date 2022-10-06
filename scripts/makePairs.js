// Run this program by entering the following into the command line:
// cd into the scripts folder
// node makePairs.js <groupSize>

/* 
process.argv contains the arguments passed to the command line
0 - node
1 - this file (makePairs.js)
2 - the first argument after makePairs.js 
*/
const groupSize = process.argv[2];

let roster = [
 'Amanda','Arly', 'Casterly','Staceyann',
'Chuka',      'Clifford',  'Daniel',
'Destiny',    'Duojay',    'Ethan',
'Fabrizio',   'Gabriel',
'Jacqueline', 'Jahshiek',  'Julian',
'Kristen',    'Luis',      'Natalie',
'Nayan',      'Nicolas',   'SJ',
'Shaina',  'Trevon', 'Vinny', 'Hamood'
]

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
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}