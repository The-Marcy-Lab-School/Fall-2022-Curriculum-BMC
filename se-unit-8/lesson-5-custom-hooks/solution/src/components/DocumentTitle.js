import React, { useState, useEffect } from 'react';

export const useDocumentTitle = (title) => {
	useEffect(() => {
		document.title = title;
	}, [title]);
};

const DocumentTitle = () => {
	const [value, setValue] = useState('page title');
	useDocumentTitle(value);
	return (
		<div>
			<input value={value} onChange={(e) => setValue(e.target.value)} />
		</div>
	);
};

export default DocumentTitle;