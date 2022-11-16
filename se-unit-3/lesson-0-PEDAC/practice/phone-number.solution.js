/*
Problem
- Summary: Take a string that contains digits and special characters and "clean" it so that we can return a string of 10 digits.
- Input: string consisting of numbers and special characters
- Output: string of 10 numbers/digits

Examples
cleanNumbers('919-621-9388'); // '9196219388'
cleanNumbers('919-621-');     // '0000000000'
cleanNumbers('2-919-621-9388'); // '0000000000'
cleanNumbers('+1 (919) 621-9388'); // '9196219388'

Edge Cases
cleanNumbers('whatever');   // '0000000000'
cleanNumbers('0000000000'); // '0000000000'
cleanNumbers('19292348871x8322); // '0000000000'
cleanNumbers(''); // '0000000000'

Data Structure
- Strings

Algorithm
 1. Strip string of non-numeric characters
    - Regex -> str.replace(/\D/g, "")
 2. Check if length of strippedStr is < 10 or if strippedStr.length > 11
    - if true, return '0000000000'
 3. Check if strippedStr.length === 11 && first digit of strippedStr !== 1
    - if true, return '0000000000'
 4. return the last 10 digits of strippedStr.
*/


function cleanNumbers(str) {

}

// We will only see true logged to the console if your functions works correctly
console.log(cleanNumbers('919-621-9 388') === '9196219388');
console.log(cleanNumbers('919-621-') === '0000000000');
console.log(cleanNumbers('2-919-621-9388') === '0000000000');
console.log(cleanNumbers('+1 (919) 621-9388') === '9196219388');
