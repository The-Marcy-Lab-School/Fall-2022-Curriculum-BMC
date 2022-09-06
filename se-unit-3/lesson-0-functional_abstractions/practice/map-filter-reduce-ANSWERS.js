// Question 1
const fellows = ['anne', 'carms', 'laish', 'mark', 'paul', 'peter', 'devonte', 'enmanuel', 'cielo', 'steph'];

fellows.forEach(fellow => console.log(fellow));

// Question 2
const madFellows = [];
fellows.forEach(fellow => madFellows.push(`${fellow.toUpperCase()}!!!`));

// Question 3
const cFellows = [];
fellows.forEach(fellow => {
  if (fellow.includes('c')) cFellows.push(fellow);
});

// Question 4
function headAss(word) {
  let headAssedWord = "";
  word.toLowerCase().split('').forEach((letter, index) => {
    if (index % 2 === 0) {
      headAssedWord += letter.toUpperCase();
    } else {
      headAssedWord += letter;
    }
  });

  return headAssedWord;
}

// Question 5
const squared = function(numbers) {
  return numbers.map(number => number * number);
};

// Question 6
const pluralize = function(words) {
  return words.map(word => `${word}s`);
};

// Question 7
const songsBy = function(songs) {
  return songs.map(song => `${song.song} by ${song.artist}`);
};

// Question 8
const firstNames = function(users) {
  return users.map(user => user.firstName);
};

// Question 9
const fullNames = function(users) {
  return users.map(user => `${user.firstName} ${user.lastName}`);
};

// Question 10
const toObject = function(products) {
  return products.map(product => {
    return {
      name: product[0],
      price: product[1],
      quantity: product[2]
    }
  })
};

// Question 11
const lessThanTen = function(numbers) {
  return numbers.filter(number => number < 10);
};

// Question 12
const onlyEvens = function(number) {
  return numbers.filter(number => number % 2 === 0);
};

// Question 13 
const onlyOddWords = function(words) {
  return words.filter(word => word.length % 2 !== 0);
};

// Question 14
const onlyPlural = function(words) {
  return words.filter(word => word[word.length - 1] === 's');
};

// Question 15
const isHero = function(characters) {
  return characters.filter(character => character.hero);
};

// Question 17
const sum = function(numbers) {
  return numbers.reduce((total, number) => total + number);
};

// Question 18
const product = function(numbers) {
  return numbers.reduce((total, number) => total * number);
};

// Question 19
const stringConcat = function(strings) {
  return strings.reduce((sentence, string) => `${sentence} ${string}`);
}

// Question 20
const createEmailObject = function(users) {
  return users.reduce((obj, user) => {
    obj[user.fullName] = user.email;
    return obj;
  }, {})
}