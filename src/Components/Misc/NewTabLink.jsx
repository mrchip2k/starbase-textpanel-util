import React from 'react';

function NewTabLink(props) {
	return (
		<a href={props.href} target="_blank" rel="noopener noreferrer">
			{props.children}
		</a>
	);
}

export default NewTabLink;