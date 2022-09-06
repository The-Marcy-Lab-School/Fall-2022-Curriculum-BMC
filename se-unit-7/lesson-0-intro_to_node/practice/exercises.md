# Lesson 0 - Practice Exercises

## Intro to Node.js and NPM

### Exercise 1:

Open a new terminal.

Execute the following command from your command line to create two files in your project:
`touch marcy.js lab.js`

Code the following within `marcy.js`

```javascript
const exportFromSecondFile = require('./lab.js'); /*NOTE: here we use the relative path*/
console.log('content exported from secondFile:', exportFromSecondFile);
```

Run the file marcy.js from your command line by executing the command `node marcy.js`.

**Describe what you notice and give details for why the output looks the way it does.**

### Exercise 2:

Within the `lab.js` file, place three random key value (string values) pairs on the `module.exports`.
For example: `module.exports.fellows = "awesome"`

Again, run the file `marcy.js` from your command line by executing the command `node marcy.js`.

**Describe what you notice and give details for why the output looks the way it does.**

### Exercise 3:

Within the `lab.js` file, define a function called `getFavoriteNumber`, which must return your favorite integer.

Add a new key `favoriteNumber` to the `module.exports` object and use the invocation of your function as the value like so: `module.exports.getFavoriteNumber = getFavoriteNumber`.

Again, run the file `marcy.js` from your command line by executing the command `node marcy.js`.

**Describe what you notice and give details for why the output looks the way it does.**

### Exercise 4:

Comment out your current code within `marcy.js`.
Beneath your commented out code, require the `lab.js` file multiple times.

```js
require('./lab.js'); 
require('./lab.js'); 
require('./lab.js'); 
```

Go into `labs.js` and add a random console.log statement that you'd like to see appear in your terminal.

**Before running the marcy.js file, make a prediction about what you might see as the output**

Run `node.marcy.js` from the command line.

**How many times what your statement logged to the console and why? Reference the [node.js docs](https://nodejs.org/docs/latest/api/modules.html#modules_caching) to learn more about caching**
