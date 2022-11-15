/* 
1. Read carefully. Use example to help understand the instructions
2. Copy example into code. Write a function outline with the right number of parameters
3. Make a second example invocation
4. Think about solving the problem, optimize later
5. Am i making a decision? 
6. If i'm working with a string/array, do I need to iterate?

    Iterate through each word in the sentence. For each word:
        if (word is a number word) {
            convert it to a digit
        } else {
            leave it as is
        }
        concatenate the word/digit to the end of digitSentence

What we did well:
* read carefully
* googled
* planned
* coding a little, testing a little
* thinking about edge cases - make the function work, come back to it later
*/

// convert each number word in the string into a digit number
function wordToDigit(sentence) {
    let digitSentence = '';
    let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let numberToDigit = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5, // 'Five'
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    }
    
    // get the words from sentence 
    // beware of the last word having punctuation
    let words = sentence.split(' ');
    let punctuationTypes = [',', '!', '.', '?', ':', ';'];

    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i];
        
        let punctuation = '';
        let lastChar = currentWord[currentWord.length - 1];
        if (punctuationTypes.includes(lastChar)) {
            currentWord = currentWord.slice(0, -1);
            punctuation = lastChar;
        }

        if (numbers.includes(currentWord.toLowerCase())) {
            // convert it to a digit
            currentWord = numberToDigit[currentWord.toLowerCase()]
        }
        
        digitSentence += " " + currentWord + punctuation;
    }
    console.log(digitSentence);
    return digitSentence;
}


wordToDigit('Please call me at Five five five one two three? four. Thanks!');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

wordToDigit('My zip code is one one two zero five?');
// "My zip code is 1 1 2 0 5"
