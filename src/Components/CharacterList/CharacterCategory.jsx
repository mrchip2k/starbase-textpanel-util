import React from 'react';
import CharacterLine from './CharacterLine';

function CharacterCategory(props) {
	// Generate the lines.
	// Passes down the copyFunc function, to let the buttons run it.
	let lines = props.category.lines.map((line, i) => 
		<CharacterLine 
			key={i}
			line={line} 
			copyFunc={props.copyFunc}
		/> 
	);

	return (
		<div className="noselect">
			<p className="category-name">{props.category.name}</p>
			<div className="telegrama">{lines}</div>
		</div>
	);
}

export default CharacterCategory;