# Async/Await

Quick facts:
* `async` and `await` are a modern alternative to using `Promise` objects and the `then` / `catch` syntax.
* `async`/`await` allow us to write code in a more synchronous-like manner
* `async`/`await` utilize the more generic `try`/`catch` syntax to handle errors

### The way we _used_ to fetch:

Suppose we wanted to find all books about cheese. We could use the Google Books Api with the following URL:

```
https://www.googleapis.com/books/v1/volumes?q=cheese
```
* The host is `https://www.googleapis.com/books/v1/volumes`
* The query parameter is `q=cheese`

Below is a typical example of how we might fetch that data and print it using Promises and the `then` and `catch` methods:

```js
function findBookAbout(searchTerm) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;

    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

findBookAbout('cheese')
```

But, what if I told you there is a better way? One of the issues with this current approach is that writing callback functions is a bit of a pain. 

The `async`/`await` operators make this much cleaner. Check this out:
* First, we have to label the `findBookAbout` as an `async` function. This alllows us to use the `await` keyword inside.
* Next, we remove the `.then` method calls and instead `await` each Promise.

```js
async function findBookAbout(searchTerm) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;

    const response = await fetch(url); 
    const data = await response.json();
    console.log(data);
}

findBookAbout('cheese')
```

The `await` operator is used to wait for a Promise to get its fulfilled value. This allows us to write code in a synchronous-like style.
* In the example above, the fulfilled value is returned and stored in the variable `response`. Only after this Promise is fulfilled do we move on to the next line of code.
* Since `response.json()` also returns a Promise, we can `await` it and store the fulfilled value in `data`.
* The `await` operator must be used inside a function that is marked as `async`. Note that the function `findBookAbout` now has the `async` keyword in front.

### An example with arrow functions


```js
const findBookAbout = async (searchTerm) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;

    const response = await fetch(url); 
    const data = await response.json();
    console.log(data);
}

findBookAbout('cheese')
```

### But what about errors?

To handle errors using the `async`/`await` keywords, we turn to a more generic technique: `try` and `catch`. These keywords can be used to try to execute some error-prone code and catch any kind of error that may get produced. 

```js
async function findBookAbout(searchTerm) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;
    
    // wrap the error-prone code in a try {} block
    try {
        const response = await fetch(url); 
        const data = await response.json();
        console.log(data);
    }
    // and catch any errors that are thrown
    catch (error) {
        console.log(error);
    }
}

findBookAbout('cheese')
```

`try` and `catch` are more generic, making our code simpler overall!

### A generic `fetchFrom` method

We can refactor our code a bit by introducing a generic `fetchFrom` method that we can reuse throughout our program.

```js
const fetchFrom = async(url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

const findBookAbout = async (searchTerm) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;
    
    const data = await fetchFrom(url); 
    if (data !== null) {
        // do stuff with the data!
        console.log(data);
    }
}

findBookAbout('cheese')
```