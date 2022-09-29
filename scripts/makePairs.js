let roster = [
        'Casterly',
  'Chuka',      'Clifford',  'Daniel',
  'Destiny',    'Duojay',    'Ethan',
  'Fabrizio',   'Gabriel',
  'Jacqueline', 'Jahshiek',  'Julian',
  'Kristen',    'Luis',      'Natalie',
  'Nayan',      'Nicolas',   'SJ',
  'Shaina',  'Trevon'
]

// made some manual pairs because of office hours
let pairs = {
    'Amanda': ['Arly', 'Staceyann'],
    'Vinny': 'Hamood',
}

// Go through the roster and remove 2 fellows
shuffleArray(roster);

while (roster.length) {
    const name = roster.pop()
    pairs[name] = roster.pop();
}

console.log(pairs)


// Results
const resultedPairs = {
  Amanda: [ 'Arly', 'Staceyann' ],
  Vinny: 'Hamood',
  Trevon: 'Nicolas',
  SJ: 'Shaina',
  Nayan: 'Natalie',
  Luis: 'Casterly',
  Julian: 'Jahshiek',
  Jacqueline: 'Gabriel',
  Fabrizio: 'Ethan',
  Duojay: 'Destiny',
  Daniel: 'Kristen',
  Chuka: 'Clifford'
}


// HELPERS
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}