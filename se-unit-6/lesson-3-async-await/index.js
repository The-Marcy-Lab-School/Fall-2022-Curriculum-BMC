const bookListEl = document.querySelector("#books");
const topicHeaderEl = document.querySelector("#topic")
const searchInputEl = document.querySelector("#search-input");
const searchFormEl = document.querySelector("#search-form");

// async arrow function
const fetchFrom = async (url) => {
    try { // attempt error-prone code
        const response = await fetch(url) // returns
        const data = await response.json(); // convert JSON to JS object
        return data;
    }
    catch (error) { // prevent an error from crashing your code
        console.log(error);
    }
}

// Async Function Declaration
async function findBookAbout(searchTerm) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;

    const data = await fetchFrom(url); // make blocking with await
    
    bookListEl.innerHTML = "";
    data.items.forEach(item => {
        const li = document.createElement("li")
        li.innerText = item.volumeInfo.title;
        bookListEl.append(li);
    })
}

searchFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const searchTerm = searchInputEl.value;
    topicHeaderEl.innerText = `Books about ${searchTerm}`
    
    // If the search term has spaces, we need to use %20 in the query string
    searchTerm = searchTerm.replace(" ", "%20")

    // findBookAbout is an async function, but we don't need to
    // wait for it to resolve since it doesn't return anything
    findBookAbout(searchTerm);
    searchInputEl.value = '';
})

console.log("this did not wait!")
/* 
What we know about async/await?
- they are keywords that determine how functions are executed
- can be used on functions
- cleaner way to write async code that uses Promises

What does .then do?
- defines a callback method that is executed once the promise is fulfilled
    - the callback is given the resolved value of the promise
- catch defines a method that is executed once the promise is rejected

What does async/await do?
- await turns a function that returns a Promise into blocking code
- await waits for a Promise to resolve and then returns that resolved value
- async is added before the function declaration
- Any value returned from an async function is wrapped in a Promise

How do we handle errors?
- Use the `try` / `catch` syntax
*/