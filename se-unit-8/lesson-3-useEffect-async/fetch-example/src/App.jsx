import './App.css'
import { useState, useEffect } from 'react'

const RANDOM_JOKE_URL = "https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart";
const getApiUrl = (query) => {
  return (query) 
    ? RANDOM_JOKE_URL + `&contains=${query}`
    : RANDOM_JOKE_URL
};
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

function App() {

  const [query, setQuery] = useState('');
  const [joke, setJoke] = useState({ delivery: '', setup: ''});

  useEffect(() => {
    const doFetch = async () => {
      const url = getApiUrl(query);
      const { delivery, setup } = await fetchData(url);
      setJoke({ delivery, setup });
    }
    doFetch();

  }, [query])

  return (
    <>
      <form>
        <input onChange={e=>setQuery(e.target.value)} type="text" placeholder="query" value={query}></input>
        <input type="submit" value="submit"></input>
      </form>
      
      <div className='results'>
        <h1>{joke.setup}</h1>
        <details><summary>Reveal</summary>
        
        <p>{joke.delivery}</p>

        </details>
      </div>
    </>
  );
}

export default App
