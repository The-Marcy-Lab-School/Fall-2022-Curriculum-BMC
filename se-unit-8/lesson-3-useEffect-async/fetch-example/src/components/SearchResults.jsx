/* eslint-disable react/prop-types */
const SearchResults = ({joke}) => {
  return (
    <div className='results'>
      <h1>{joke.setup}</h1>
      <p>{joke.delivery}</p>
    </div>
  )
}

export default SearchResults;