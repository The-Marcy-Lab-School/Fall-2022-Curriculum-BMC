async function main() {

    // Set up
    const RANDOM_JOKE_URL = "https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart";
    
    const jokeElement = document.getElementById("joke");
    const punchlineElement = document.getElementById("punchline");
    
    jokeElement.innerText = 'Loading...'
    punchlineElement.innerText = 'Loading...'

    // try/catch blocks provide a consistent and generic way
    // to separate the logic that handles our fulfilled and 
    // rejected promises
    try {
        const response = await fetch(RANDOM_JOKE_URL)
        const data = await response.json();

        jokeElement.innerText = data.setup;
        punchlineElement.innerText = data.delivery;
    } catch (error) {
        console.log(error);
    }
}

document.addEventListener('DOMContentLoaded', main);