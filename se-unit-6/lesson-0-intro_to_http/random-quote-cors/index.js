// Some APIs do not serve cross-origin requests.
// These APIs follow a strict CORS (Cross Origin Resource Sharing) policy
const main = async () => {
    const RANDOM_QUOTE_URL = 'https://zenquotes.io/api/random';

    const fetchData = async (url) => {
        try {
            const response = await fetch(url)
            const data = await response.json();
            
            return data;
        } catch (error) {
            return error;
        }
    }

    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = await fetchData(RANDOM_QUOTE_URL);

    // https://javascript.info/fetch-crossorigin
}

document.addEventListener("DOMContentLoaded", main);