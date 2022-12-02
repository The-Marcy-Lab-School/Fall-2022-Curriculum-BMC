/* 
vowels: aeiou
consonants: bcdfghjklmnpqrstvwxyz

input: string with just one character
output: Boolean

isConsonant('a') => false
isConsonant('d') => true
isConsonant(5) => false
isConsonant() => false

Algorithm:
1. Clean Inputs: make sure inputs are strings of length 1
2. Check if the input is a consonant
    Approach 1: Create a string of consonants and check to see if that string contains our character
    Approach 2: Use regular expression with the test method
*/
function isConsonant(char) {
    if (typeof char === 'string' && char.length === 1) {
        // we have a good input
        // let consonants = 'bcdfghjklmnpqrstvwxyz';
        // let capitalConsonants = 'BCDFGHJKLMNPQRSTVWXYZ';
        // return consonants.includes(char) || capitalConsonants.includes(char);
        // return consonants.includes(char.toLowerCase());

        return /[bcdfghjklmnpqrstvwxyz]/i.test(char);

    } else {
        return false;
    }
}

console.log(isConsonant('5'));
console.log(isConsonant('a'));
console.log(isConsonant('d'));
console.log(isConsonant('!'));
console.log(isConsonant('D'));
console.log(isConsonant());

/* 
input: string
output: number of vowels in the string

Examples:
countVowels("Regex is a friendly foe") => 8
countVowels('Hello') => 2
countVowels("rainy") //returns 2
countVowels("hello there") => 4

Regex Methods: match, replace, test

Algorithm:
* match the vowels in str -> store them in an array
* return array.length

*/
function countVowels(str) {
    const count = str.match(/[aeiou]/ig).length
    return count;
}

console.log(countVowels("Regex is a friendly foe")) // => 8
console.log(countVowels('Hello')) // => 2
console.log(countVowels("rainy")) //returns 2
console.log(countVowels("hello there")) // => 4


/* 
A valid IP address must be in the form of A.B.C.D, where A,B,C and D are numbers from 0-255.

Input: string
output: boolean

Examples:
isIPAddress("42.567.1.83") => false
isIPAddress("69.120.17.4") => true
isIPAddress("123.4.5.34") => true
isIPAddress("333.222.111") //=> false
isIPAddress("1234") //=> false
isIPAddress(“lmnop”) //=> false
isIPAddress("") //=>false

Algorithm:
A good input will have:
* 4 distinct numbers separated by a "."
* Each number is between 0 and 255

Split method will divide a string into an array
* Split the IP address by the "." to give us 4 elements
Example: "42.567.1.83".split('.') => [ '42', '567', '1', '83' ]

For each value in the split array:
* Convert the value to a number
* Check if each converted value is between 0-255
*/
function isIPAddress(str) {
    let regex = /\d+\.\d+\.\d+\.\d+/g
    // return early if str does not match regex pattern
    if (!regex.test(str)) {
        return false;
    }

    // Split the IP address by the "." to give us 4 elements
    const numbersArr = str.split('.');

    // make sure there are 4 numbers
    if (numbersArr.length !== 4) {
        return false;
    }

    // For each value in the split array:
    for (let i = 0; i < numbersArr.length; i++) {
        // * Convert the value to a number
        let number = Number(numbersArr[i]);
        // * Check if each converted value is between 0-255
        if (number < 255 || number < 0) {
            return false;
        }
    }
    return true;
}

/* 
* Regex is great for checking string patterns
* Regex is not great at checking for specific numeric values
*/