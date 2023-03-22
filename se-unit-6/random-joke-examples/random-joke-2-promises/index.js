function main() {
    // Set up
    const RANDOM_JOKE_URL = "https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart";
    
    const jokeElement = document.getElementById("joke");
    const punchlineElement = document.getElementById("punchline");
    
    jokeElement.innerText = 'Loading...'
    punchlineElement.innerText = 'Loading...'


    // The `fetch` method returns a Promise object that represents
    // the eventual completion of an asynchronous operation
    const promise = fetch(RANDOM_JOKE_URL);

    // Every promise has a `then()` method that takes in a callback
    // that is executed when the Promise is fulfilled. `then()` also
    // returns a Promise meaning that `then()` calls can be chained.
    promise
        .then(response => response.json())
        .then(data => {
            jokeElement.innerText = data.setup;
            punchlineElement.innerText = data.delivery;
        })
        .catch(error => console.log(error));
    // Every promise also has a `catch()` method that takes in a 
    // callback that is executed when the Promise is rejected.
    // You should ALWAYS handle errors when using Promises
    
}

document.addEventListener('DOMContentLoaded', main);