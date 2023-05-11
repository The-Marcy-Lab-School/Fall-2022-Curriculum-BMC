import './App.css'
import { useState, useEffect } from 'react'
import SearchForm from './components/SearchForm'
import SearchResults from './components/SearchResults'

const RANDOM_JOKE_URL = "https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart";
const getApiUrl = (query) => {
  if (!query) {
    return RANDOM_JOKE_URL;
  }
  return RANDOM_JOKE_URL + `&contains=${query}`;
}


function App() {
  
  const [query, setQuery] = useState('');
  const [joke, setJoke] = useState({ delivery: '', setup: ''});

  useEffect(() => {
    const fetchData = async () => {
      try {
          const url = getApiUrl(query);
          const response = await fetch(url)
          const { delivery, setup } = await response.json();
          setJoke({ delivery, setup });
      } catch (error) {
          console.log(error);
      }
    }
    fetchData();
  }, [query])

  return (
    <>
      <SearchForm setQuery={setQuery}/>
      <SearchResults joke={joke}/>
    </>
  );
}

export default App
