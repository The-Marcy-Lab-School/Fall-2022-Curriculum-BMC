import React, { useState } from 'react';

const DocumentTitle = () => {
	const [value, setValue] = useState('page title');
	return (
		<div>
			<input value={value} onChange={(e) => setValue(e.target.value)} />
		</div>
	);
};