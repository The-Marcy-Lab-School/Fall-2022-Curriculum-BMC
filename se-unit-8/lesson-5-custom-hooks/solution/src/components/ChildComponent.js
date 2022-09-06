import React, { useEffect } from 'react';

const ChildComponent = (props) => {
	console.log('CHILD RE_RENDER');
	useEffect(() => {
		props.fetchData('users');
	}, [props]);
	return (
		<div>
			<h2>{props.title}</h2>
			<p>Child Component!</p>
			<p>Static Array</p>
			<p>{props.array}</p>
		</div>
	);
};

export default React.memo(ChildComponent);