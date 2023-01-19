# Hash Maps

**Essential Questions**
* How is array data stored in memory?
* How are object key-value pairs stored in memory?
* What are the benefits of storing data in an array vs an objects?
* How can we implement a Hash Maps using: (1) Arrays, (2) Objects, (3) JavaScript's built in Map class?
* What is a hash collision? When would one happen and how can be prevent them?

**Key Terms**
* Hash Map
* Hash Function
* Hash Key
* Look-up table

## Tables and Maps
* A table is made up of rows and columns
* The data in a row is all related and each column represents a different field of information
* A table with only two columns is called a **map**

Some examples of a map include:
* a table listing states and their state flowers
* a nutrition label listing ingredients and % daily value
* a report card listing classes and grades

**Q: How might an address book be like a map?**
**Q: What maps do you know of?**

## Keys and Values

* The two columns in a map are called the **keys** and the **values**
* Keys _must_ be unique. Values can be the same as each other.

**Q: Consider a report card that maps `classes` to `grades`. Which would be the key?**

## Relational Data vs. Sequential Data

* Maps don't care about the order (or "sequence") of the items it holds
* Maps only care that, given a unique key, we can accurately get the value associated with the key
    * We call this relational data — there is a relationship between each key and value
* There's a problem: computers are really good at holding sequential data and are not so good at holding relational data. It's easier to relate a data value to a number than it is to another data value
* There's a solution: computers can use we can use something called a **hash function** that turns a data value into a numbered index for an array.

**Questions**
* What are some hashing functions we can build with the tools we have so far? 
* What if we add up the number of vowels in the key? 
* What if we assign a value to every letter in the alphabet (say A=1, B=2, etc.,) and add up all of those values? 
* Does the key to a hash table need to be a string? 
* Can you define a hash function that takes a different kind of input?

## Hash Function

* A hash function takes a string (or some other type of data) as input and returns an array index as output. 