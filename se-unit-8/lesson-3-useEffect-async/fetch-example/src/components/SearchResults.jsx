/* eslint-disable react/prop-types */
const SearchResults = ({joke}) => {
  return (
    <div className='results'>
      <h1>{joke.setup}</h1>
      <details><summary>Reveal</summary>
      
      <p>{joke.delivery}</p>

      </details>
    </div>
  )
}

export default SearchResults;