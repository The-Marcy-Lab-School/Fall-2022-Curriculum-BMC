import React from 'react';

function App() {
	/**
	 * Your code goes here.
	 */

	return (
		<div className="App">
			<h1>Counter App</h1>
			<button data-testid="decrementButton">-</button>
			<button data-testid="incrementButton">+</button>
			<hr></hr>
			{/**Render the counter message component here */}
		</div>
	);
}

export default App;
