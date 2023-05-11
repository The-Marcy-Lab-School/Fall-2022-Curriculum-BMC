import BadCounter from './components/BadCounter';
import GoodCounter from './components/GoodCounter';
import './App.css'

const App = () => {
  return (
    <>
      <h2>Bad Counter</h2>
      <BadCounter />
      <h2>Good Counter</h2>
      <GoodCounter />
    </>
  )
}

export default App;