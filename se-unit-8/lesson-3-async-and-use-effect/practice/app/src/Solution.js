import React, { useState, useEffect } from 'react';
import fetchPokemon from './fetchPokemon';

const App =  () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    let isFetching = true;

    fetchPokemon()
      .then(pokemon => {
        if(isFetching){
          setPokemon(pokemon)
        }
      });

    return () => isFetching = false;
  }, [])

  if(!pokemon.length){
    return <div>...Loading</div>;
  }

  return (
    <ul>
      {pokemon.map(poke => <li key={poke.name}>{poke.name}</li>)}
    </ul>
  )


}

export default App;
