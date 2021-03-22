import React from 'react';

function CharacterCell(props) {
	return (
		<div className="character-cell">
			{props.char}
		</div>
	);
}

export default CharacterCell;