import React from 'react';
import CharacterCategory from '../Components/CharacterList/CharacterCategory';
import BottomDynamicHeader from '../Components/Header/BottomDynamicHeader';

import Container from "../Components/Misc/Container"

function CharacterList(props) {
	const list = props.database.map((category) => <CharacterCategory category={category}/>);


	return (
		<div>
			<Container addClass="page-content">
				<h1 className="centered">Character List</h1>
				<p>Find and copy special characters for Starbase Text Panels!</p>
				<p className="highlight">The font you're seeing here is the same used by the game!</p>
				<div>{list}</div>
			</Container>

			<BottomDynamicHeader/>
		</div>
	);
}

export default CharacterList;