import React from 'react';
import BottomDynamicHeader from '../Components/Header/BottomDynamicHeader';

import Container from "../Components/Misc/Container"

function CharacterList(props) {
	return (
		<div>
			<Container addClass="page-content">
				<h1 className="centered">Character List</h1>
				<p>Find and copy special characters for Starbase Text Panels! <span className="highlight">The font you're seeing here is what the game uses!</span></p>
			</Container>

			<BottomDynamicHeader/>
		</div>
	);
}

export default CharacterList;