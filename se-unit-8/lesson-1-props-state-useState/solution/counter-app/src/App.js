import React, { useState } from 'react';
import CounterMessage from './CounterMessage';

function App() {
	let [count, setCount] = useState(0);

	const decrement = () => setCount((count -= 1));
	const increment = () => setCount((count += 1));

	return (
		<div className="App">
			<h1>Counter App</h1>
			<button data-testid="decrementButton" onClick={decrement}>
				-
			</button>
			<button data-testid="incrementButton" onClick={increment}>
				+
			</button>
			<hr></hr>
			<CounterMessage count={count} />
		</div>
	);
}

export default App;
