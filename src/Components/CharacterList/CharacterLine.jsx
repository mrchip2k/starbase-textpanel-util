import React from 'react';
import CharacterCell from './CharacterCell';

function CharacterLine(props) {
	const lineAsArray = [...props.line];

	// Generate the buttons.
	// Passes down the copyFunc function, to let the buttons run it.
	let buttons = lineAsArray.map((character, i) => 
		<CharacterCell 
			key={i}
			char={character} 
			copyFunc={props.copyFunc}
		/>
	);
	return (
		<div className="character-line">
			{buttons}
		</div>
	);
}

export default CharacterLine;