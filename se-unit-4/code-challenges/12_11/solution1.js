// Option 1
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}


// Option 2
function alphabetPosition(text) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  
  return text.toLowerCase()
             .split('')
             .filter(letter => letter.match(/[a-z]/))
             .map(letter => letters.indexOf(letter) + 1)
             .join(' ');
}
