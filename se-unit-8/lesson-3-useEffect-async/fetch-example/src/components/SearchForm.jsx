/* eslint-disable react/prop-types */
const SearchForm = ({ query, setQuery }) => {
  return (
    <form>
      <input onChange={e=>setQuery(e.target.value)} type="text" placeholder="query" value={query}></input>
      <input type="submit" value="submit"></input>
    </form>
  );
}

export default SearchForm;