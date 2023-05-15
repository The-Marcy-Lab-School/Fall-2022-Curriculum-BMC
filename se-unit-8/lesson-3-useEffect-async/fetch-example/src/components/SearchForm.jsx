/* eslint-disable react/prop-types */
const SearchForm = ({ userInput, setUserInput }) => {
  return (
    <form>
      <input onChange={e=>setUserInput(e.target.value)} type="text" placeholder="query" value={userInput}></input>
      <input type="submit" value="submit"></input>
    </form>
  );
}

export default SearchForm;