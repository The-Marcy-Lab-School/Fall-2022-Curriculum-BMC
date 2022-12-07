# Methods We Can Use To Convert Data

```js
// A function is anything that is a function object
function add(a, b) {
    return a + b;   
}

// a method is a function object that is attached to another data value
const array = [1,2,3]
array.push(4)
// push is a method because it is attached to the array
```

#### Array to Array

* `Array.prototype.map`
* `Array.prototype.filter`
* `Array.prototype.concat`
* `Array.prototype.slice`


#### Array to String

* `Array.prototype.join`

#### Array to Boolean

* `Array.prototype.some`
* `Array.prototype.every`

#### Array to Any

* `Array.prototype.reduce`

#### String to Array

* `String.prototype.split`

#### String to String

* `String.prototype.toUpperCase`
* `String.prototype.toLowerCase`
* `String.prototype.substring`
* `String.prototype.charAt`

#### String to Boolean

* `String.prototype.includes`
* `Regex.prototype.test`

#### String to Number

* `String.prototype.indexOf`
* `String.prototype.charCodeAt`
* `String.prototype.length`