import React from 'react';
import CharacterLine from './CharacterLine';

function CharacterCategory(props) {
	const line = props.category.lines.map((line) => <CharacterLine line={line}/> );

	return (
		<div className="noselect">
			<p className="category-name">{props.category.name}</p>
			<div>{line}</div>
		</div>
	);
}

export default CharacterCategory;