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
console.log(`YOUR WINNER IS: ${name}`);