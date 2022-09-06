import React, {useState} from 'react'

function App({initialCount=0, incrementBy=1}){
	const [count, setCount] = useState(initialCount);

	return (
		<React.Fragment>
			<h1>Counter App</h1>
			<button data-testid='increment' onClick={() => setCount(count + incrementBy)}>+</button>
			<button data-testid='decrement' onClick={() => setCount(count - incrementBy)}>+</button>
			<p data-testid="count">{count}</p>
		</React.Fragment>
	);
};

export default App;
