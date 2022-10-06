const roster = [
  'Amanda',     'Arly',      'Casterly',
  'Chuka',      'Clifford',  'Daniel',
  'Destiny',    'Duojay',    'Ethan',
  'Fabrizio',   'Gabriel',   'Hamood',
  'Jacqueline', 'Jahshiek',  'Julian',
  'Kristen',    'Luis',      'Natalie',
  'Nayan',      'Nicolas',   'SJ',
  'Shaina',     'Staceyann', 'Trevon',
  'Vinny'
]

// console.log(roster.sort())
// Originally, the list wasn't alphabetized but I added the code above and copied the output from executing the file. Now I have a nicely formatted and alphabetized list. Neat!

function getRandomName() {
    const numStudents = roster.length; // get number of students
    const index = Math.floor(Math.random() * numStudents); // get a random index, rounded down
    const name = roster[index]; // get the  name at that index
    return name; // return both the name and the index
}


// Invoke the function and store the result. It is printed below.
const name = getRandomName();

// Check if the "-v" flag was provided. If so, run the 
// program 1000 times and show the histogram.
const isVerbose = process.argv[2];
if (isVerbose && isVerbose.toLowerCase() === "-v") {
    const iterations = 1000;
    const counterTable = {};
    for (let i = 0; i < iterations; i++) {
        const name = getRandomName();
        counterTable[name] = counterTable[name] ? counterTable[name]+'+' : '+'
    }
    
    
    // Before showing the result, print out some about the randomness of the program.
    console.table(counterTable);
    
    const counterValuesArray = Object.values(counterTable).map(s => s.length);
    const {smallestCount, smallestKey} = smallest(counterTable);
    const {largestCount, largestKey} = largest(counterTable);
    const range = largestCount-smallestCount;
    
    console.log(`Range: (${range})`);
    console.log(`${smallestKey} was chosen the least (${smallestCount})`)
    console.log(`${largestKey} was chosen the most (${largestCount})`)
}

//Finally, Show the result.
console.log(`YOUR WINNER IS: ${name}`);



/// HELPERS
function largest(object) {
    let largestCount = 0;
    let largestKey = '';
    
    Object.keys(object).forEach(name => {
        if (object[name].length > largestCount) {
            largestCount = object[name].length;
            largestKey = name;
        }
    })

    return {largestCount, largestKey}
}

function smallest(object) {
    let smallestCount = Infinity;
    let smallestKey = '';
    Object.keys(object).forEach(name => {
        if (object[name].length < smallestCount) {
            smallestCount = object[name].length;
            smallestKey = name;
        }
    })
    return {smallestCount, smallestKey}
}