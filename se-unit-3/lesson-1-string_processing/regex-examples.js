// Check whether the pattern ss appears in the string Mississippi.
console.log('has ss', /ss/.test("Mississippi"));

// Check whether the letter i occurs three or more times in Mississippi.
console.log('i count', "Mississippi".match(/i/g).length);

// Find and replace all instances of the with THE in a sentence.
let sentence = 'The quick brown fox jumped over the lazy dog'
console.log('the>THE', sentence.replace(/the/ig, "THE"));

// Does a file name begin with Bob and end with .txt or .md?
let file0 = "Bob-The-Builder.txt.yo!";
let file1 = "Bob-The-Builder.txt";
let file2 = "Bob-The-Builder.md";
let file3 = "Bob-The-Builder";
let file4 = "Rob-The-Builder.txt";
let goodFileName = /^Bob\S*\.(txt|md)$/;
console.log(file0, goodFileName.test(file0))
console.log(file1, goodFileName.test(file1))
console.log(file2, goodFileName.test(file2))
console.log(file3, goodFileName.test(file3))
console.log(file4, goodFileName.test(file4))

// Does a string have any non-alphanumeric characters in it?
let nonAlphaRegex = /[^a-z]/i;
console.log('non-alpha', nonAlphaRegex.test("hello 123 abc"));

// Did the user enter a valid integer?
let integerRegex = /^-?\d+$/;
console.log('valid integer', integerRegex.test('1.5'))
console.log('valid integer', integerRegex.test('1'))
console.log('valid integer', integerRegex.test('hello1'))
console.log('valid integer', integerRegex.test('-5'))

// Are there any whitespace characters in the string?
console.log('any whitespaces', /\s/g.test('hello there'))
console.log('any whitespaces', /\s/g.test('hello'))

// Find and replace all non-alphanumeric characters in a string with -.
console.log("Hello! It's me! 123".replace(/\W/g, '-'));

// Locate all email addresses in a document.
let document = "My email is john@gmail.com but my work email is john@marcylabschool.org";
let emails = document.match(/\S+@[a-z]+\.(com|edu|gov|org)/gi);
console.log("emails", emails);

// Split a line of text into fields assuming that each whitespace character delimits two values.