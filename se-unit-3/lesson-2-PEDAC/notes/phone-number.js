/* Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.
The rules are as follows:
If the phone number is less than 10 digits, assume that it is a bad number.
If the phone number is 10 digits, assume that it is good.
If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
If the phone number is 11 digits and the first number is not 1, then it is a bad number.
If the phone number is is more than 11 digits, assume that it is a bad number.
For bad numbers, just a return a string of 10 0s.
*/

/*
PROBLEM
- Input: string consisting of numbers and special characters
- Output: string of 10 numbers/digits
Summary - Take a string that contains digits and special characters and "clean" it so that we can return a string of 10 digits.

EXAMPLES/EDGES
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
    - Option 1: Regex -> str.replace(/\D/g, "")
 2. Check if length of strippedStr is < 10 or if strippedStr.length > 11
    - if true, return '0000000000'
 3. Check if strippedStr.length === 11 && first digit of strippedStr !== 1
    - if true, return '0000000000'
 4. return strippedStr.
*/

function cleanNumbers(str) {
  const badNum = '0000000000';
  let strippedStr = str.replace(/\D/g, "");
  if (strippedStr.length < 10 || strippedStr.length > 11) return badNum;
  if (strippedStr.length === 11 && strippedStr[0] !== '1') return badNum;
  if (strippedStr.length === 11) return strippedStr.substring(1);
  return strippedStr;
}

console.log(cleanNumbers('919-621-9 388') === '9196219388');
console.log(cleanNumbers('919-621-') === '0000000000');
console.log(cleanNumbers('2-919-621-9388') === '0000000000');
console.log(cleanNumbers('+1 (919) 621-9388') === '9196219388');
