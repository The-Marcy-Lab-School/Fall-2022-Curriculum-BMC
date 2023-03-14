function main() {

    // Set up
    const RANDOM_JOKE_URL = "https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart";
    
    const jokeElement = document.getElementById("joke");
    const punchlineElement = document.getElementById("punchline");
    
    jokeElement.innerText = 'Loading...'
    punchlineElement.innerText = 'Loading...'

    // This is our asynchronous callback. It will be executed
    // when the XMLHttpRequest gets a response
    const reqListener = (e) => {
        const response = e.target.responseText;
        const data = JSON.parse(response);

        jokeElement.innerText = data.setup;
        punchlineElement.innerText = data.delivery;
    }
      
    // This is the code that initiates the HTTP Request
    const request = new XMLHttpRequest(); // Create the request object
    request.addEventListener("load", reqListener); // assign the callback when the response is recieved
    request.open("GET", RANDOM_JOKE_URL); // initializes the request by specifying the method and URL
    request.send(); // sends the request to the server
}

document.addEventListener('DOMContentLoaded', main);