import React, { useState } from 'react';
import './App.css';
import ChildComponent from './components/ChildComponent';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<header className="App-header">
				<h1>Count: {count}</h1>
				<p>
					<button
						type="button"
						onClick={() => {
							setCount(count + 1);
						}}>
						ADD
					</button>
				</p>
				<ChildComponent />
			</header>
		</div>
	);
}

export default App;