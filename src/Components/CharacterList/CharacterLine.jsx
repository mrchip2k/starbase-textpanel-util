import React from 'react';
import CharacterCell from './CharacterCell';

function CharacterLine(props) {
	const lineAsArray = [...props.line]
	const buttons = lineAsArray.map((character) => <CharacterCell char={character}/>);
	return (
		<div className="character-line">
			{buttons}
		</div>
	);
}

export default CharacterLine;