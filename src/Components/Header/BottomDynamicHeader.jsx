import React from 'react';
import Container from '../Misc/Container';

function BottomDynamicHeader(props) {
	return (
		<div>
			{/*The spacer that goes on the bottom of the page, 
			to make sure content doesn't remain hidden below the header.
			3x the header height just to be safe, a bit sketchy but will do the job for now*/}
			<div className="header-spacer"></div>
			<div className="header-spacer"></div>
			<div className="header-spacer"></div>
			
			{/*The header itself.*/}
			<div className="bottom-header-container">
				<Container addClass="header bottom border">
					<img src="/assets/leftclick64.png" alt="LMB"/>
					<div><span>Leftclick to copy a character.</span></div>
				</Container>
			</div>

		</div>
	);
}

export default BottomDynamicHeader;