import React from 'react';

const ChildComponent = () => {
	console.log('CHILD RE_RENDER');

	return (
		<div>
			{/**Render the title prop here */}
			<p>Child Component!</p>
			<p>Static Array</p>
			{/**Render the array prop here */}
		</div>
	);
};

export default React.memo(ChildComponent);