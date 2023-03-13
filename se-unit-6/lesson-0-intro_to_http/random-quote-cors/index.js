// Some APIs do not serve cross-origin requests.
// These APIs follow a strict CORS (Cross Origin Resource Sharing) policy

const RANDOM_QUOTE_URL = 'https://zenquotes.io/api/random';

const quoteElement = document.getElementById('quote');

try {
    const response = await fetch(RANDOM_QUOTE_URL)
    const data = await response.json();
    
    console.log(data);
} catch (error) {
    console.log(error);
}

// https://javascript.info/fetch-crossorigin
