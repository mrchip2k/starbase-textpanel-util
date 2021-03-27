import React from 'react';

function Container(props) {
	return (
		<div className={`container ${props.addClass}`}>
			{props.children}
		</div>
	);
}

export default Container;