import React from 'react';
import Container from '../Misc/Container';

function BottomDynamicHeader(props) {
	return (
		<div>
			{/*The spacer that goes on the bottom of the page, 
			to make sure content doesn't remain hidden below the header.
			2x the header height just to be safe, a bit sketchy but will do the job for now*/}
			<div className="header-spacer"></div>
			<div className="header-spacer"></div>
			
			{/*The header itself.*/}
			<Container addClass="header bottom border acrylic ">
				<button className="left open"> Open Editor </button>

				<div id="bottom-header-controls">
					<div><span>Copy character</span></div>
					<img src="/assets/mouse_bothbuttons.svg" alt="LMB"/>
					<div><span>Add to Editor</span></div>
				</div>

				<button className="right open"> Open Preview </button>
			</Container>

		</div>
	);
}

export default BottomDynamicHeader;