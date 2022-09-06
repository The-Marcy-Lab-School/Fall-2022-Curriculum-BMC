const fetchPokemon = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => res.json())
    .then(data => data.results);
}

export default fetchPokemon;
