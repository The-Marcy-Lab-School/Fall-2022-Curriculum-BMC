const CounterDisplay = ({ count }) => {
  return <p>{count}</p>
}

const Counter = ({count}) => {
  return (
    <div>
      <button>+</button>
      <button>-</button>
      <CounterDisplay count={count}/>
    </div>
  )
}

const App = () => {
  
  const count = 5;

  return (
    <Counter count={count}/>
  )
}