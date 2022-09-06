import React from 'react';

function CounterMessage() {
	return (
		<div className="ChildComponent">
			<h1>Counter Message</h1>
			<p>The current count is: </p>
			<p data-testid="counter">{/**Your code goes here */}</p>
		</div>
	);
}
export default CounterMessage;
