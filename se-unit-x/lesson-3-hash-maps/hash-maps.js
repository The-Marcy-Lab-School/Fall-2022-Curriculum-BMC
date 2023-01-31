const names = ['benjamin', 'maya', 'reuben'];

///////////////////////////////////
// Making a hash map using an array
///////////////////////////////////

const hashMapArray = [];

// returns the length of the str plus the number of 'e' characters
function hashFunction(str) {
    let eCount = 0;
    for (let char of str) {
        if (char.toLowerCase() === 'e') {
            eCount++;
        }
    }
    return eCount + str.length;
}

names.forEach(name => {
    let hashKey = hashFunction(name);
    hashMapArray[hashKey] = true;
});

console.log(hashMapArray);
/* 
[ <4 empty items>, true, <3 empty items>, true, true ]
*/


let hashKey = hashFunction('benjamin');
console.log(hashMapArray[hashKey]);

///////////////////////////////////
// Making a hash map using an object
///////////////////////////////////

const hashMapObject = {};

names.forEach(name => {
    hashMapObject[name] = true;
});

console.log(hashMapObject);
/* 
{ "benjamin": true, "maya": true, "reuben": true }
*/
