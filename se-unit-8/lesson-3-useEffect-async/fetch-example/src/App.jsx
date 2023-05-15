import './App.css'
import { useState, useEffect } from 'react';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

/* 
This file contains the entire application UI. Try refactoring it using the `SearchForm`
and `SearchResults` components to break up the application's UI logic.
*/

const JOKE_API_URL = "https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart";

// URL constructor helper function
const getApiUrlWithQuery = (query = '') => {
  return JOKE_API_URL + `&contains=${query}`
};

// Fetching helper function
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

/* 
1. App renders with two pieces of state: userInput, joke
2. onChange event occurs, updating userInput
3. a re-render is triggered
4. on the re-render, the component checks if userInput changed
5. if it did, run the effect again 
*/

function App() {
  const [userInput, setUserInput] = useState('');
  const [joke, setJoke] = useState({ delivery: '', setup: ''});

  useEffect(() => {
    const doFetch = async () => { 
      const url = getApiUrlWithQuery(userInput);
      const responseData = await fetchData(url);
    
      if (responseData) {
        const { delivery, setup } = responseData;
        setJoke({ delivery, setup });
      }
    }
    // React wants us to define this function rather than call async code directly
    doFetch(); // and we just call the function immediately
 
  }, [userInput]); // re-run the effect when `query` changes

  return (
    <>
      {/* SearchForm */}
      <SearchForm userInput={userInput} setUserInput={setUserInput}/>
      
      {/* SearchResults */}
      <SearchResults joke={joke}/>
    </>
  );
}

export default App
