import React from 'react';
import CharacterCell from './CharacterCell';

function CharacterLine(props) {
	const lineAsArray = [...props.line];

	// Generate the buttons.
	// Passes down the showCopiedPopup (showPopupFunc) function, to let the buttons run it.
	let buttons = lineAsArray.map((character) => 
		<CharacterCell char={character} showPopupFunc={props.showPopupFunc}/>
	);
	return (
		<div className="character-line">
			{buttons}
		</div>
	);
}

export default CharacterLine;