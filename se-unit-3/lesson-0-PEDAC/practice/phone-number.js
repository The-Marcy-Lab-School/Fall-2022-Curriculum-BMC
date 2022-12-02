// context: validate phone numbers

/* 
Input: string (anything)
Output: string (10 numbers)

Bad Numbers: return '0000000000'
* 5-781-296-6800 === bad number (11 digits not starting with 1)
* 555555 === bad number (less than 10 digits)
* anything more than 11 digits

Good Numbers: return a string of 10 digits
* Trim 1 at beginning
* remove punctuation

781-296-6800 => 7812966800
7812966800 => 7812966800
(781) 296 6800 => 7812966800
1-781-296-6800 => 7812966800

Edge Cases:
* non numeric characters we should remove from the string

cleanNumbers("919whatever621x9388")     // '9196219388'
*/

function cleanNumbers(phoneNumber) {
    let cleaned = "";
    let zeroes = '0000000000'

    // check for bad input types return '0000000000'
    if (typeof phoneNumber !== "string") {
        return zeroes;
    }

    // Remove punctuation
    cleaned = phoneNumber.replace(/[^0-9]/g, '');

    // check for less than 10 digits
    // check for more than 11 digits
    if (cleaned.length < 10 || cleaned.length > 11) {
        return zeroes;
    }

    // check for 11 digits and not starting with 1
    if (cleaned.length === 11) {
        if (cleaned[0] !== "1") {
            return zeroes;
        }
        else {
            // Trim any 1s at beginning of phoneNumbers with 11 digits
            cleaned = cleaned.slice(1);
        }
    }
    return cleaned;
}

cleanNumbers('9196219388')   // '9196219388'
cleanNumbers('919-621-9388')   // '9196219388'
cleanNumbers('919-621-')       // '0000000000'
cleanNumbers('1-347-382-4493') // '3473824493'
cleanNumbers('2-347-382-4493') // '0000000000'
cleanNumbers('919-621-938845') // '0000000000'
cleanNumbers("")                 // '0000000000'
cleanNumbers()                   // '0000000000'
cleanNumbers("919 621 9388")     // '9196219388'
cleanNumbers("whatever")         // '0000000000'
cleanNumbers("919x621x9388")     // '9196219388'
cleanNumbers([])                 // '0000000000'
