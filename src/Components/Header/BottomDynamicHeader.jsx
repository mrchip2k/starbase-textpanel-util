import React from 'react';
import Container from '../Misc/Container';

function BottomDynamicHeader(props) {
	return (
		<div className="bottom-header-container">
			<Container addClass="header bottom border">
				<img src="/assets/leftclick64.png"/>
				<div><span>Leftclick to copy a character.</span></div>
			</Container>
		</div>
	);
}

export default BottomDynamicHeader;