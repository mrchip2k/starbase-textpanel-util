import React from 'react';

function CopiedPopupText(props) {

	let visibleClass = props.isVisible ? "copied-popup-visible" : "";

	return (
		<div className={"copied-popup-container noselect " + visibleClass}>
			<div>
				<p>✔ Copied !</p>
			</div>
		</div>
	);
}

export default CopiedPopupText;