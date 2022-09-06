import React from 'react';

function CounterMessage(props) {
	return (
		<div className="ChildComponent">
			<h1>Counter Message</h1>
			<p>The current count is: </p>
			<p data-testid="counter">{props.count}</p>
		</div>
	);
}
export default CounterMessage;
