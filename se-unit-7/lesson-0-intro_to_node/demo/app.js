// app.js
const superheroes = require('superheroes');
const supervillains = require('supervillains');
const random = require('./utils/random.js');

console.log(process.env.apikey);
console.log(process.env.port);
console.log(process.env.host);
console.log(process.env.PWD)

console.log(random.rollDie());

console.log(superheroes.random() + ' is fighting ' + supervillains.random())
console.log("hi");

