async function main() {
    // So far, if we want data to be represented in our application, we've stored it 
    // in the same place as the code that uses it:

    // const jokes = [
    //     {setup: "How much did your chimney cost?", delivery: "Nothing, it was on the house."},
    //     {delivery: "Tooth Hurty-ey", setup: "What time did the man go to the dentist?"},
    //     {delivery: "The dock!", setup: "Where do you go when you're sick on a boat?"},
    //     {delivery: "All I did was take a day off.", setup: "I can't believe I got fired from the calendar factory."},
    //     {delivery: "A meowtain", setup: "What do you call a pile of kittens?"},
    // ]

    // const randomIndex = Math.floor(Math.random() * jokes.length);

    // const { delivery, setup } = jokes[randomIndex];

    // But with APIs, the source of the data can be another computer!

    const RANDOM_JOKE_URL = "https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart";

    const fetchData = async (url) => {
        try {
            const response = await fetch(url)
            const data = await response.json();
            
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    const { delivery, setup } = await fetchData(RANDOM_JOKE_URL);

    const jokeElement = document.getElementById("joke");
    const punchlineElement = document.getElementById("punchline");

    jokeElement.innerText = setup;
    punchlineElement.innerText = delivery;

// HTTP is the "transfer protocol" that enables computers to transfer data via the internet
}

document.addEventListener('DOMContentLoaded', main);