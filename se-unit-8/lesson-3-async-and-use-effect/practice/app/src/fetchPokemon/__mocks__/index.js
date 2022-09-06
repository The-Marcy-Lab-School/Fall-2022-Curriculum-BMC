const pokemon = [
  {name: 'bulbasaur'},
  {name: 'pikachu'},
  {name: 'charizard'}
]

export default function fetchPokemon(){
  return new Promise((resolve, reject) => {
  return resolve(pokemon)
  })
 }
