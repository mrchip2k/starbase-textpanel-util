import React from 'react';
import CharacterCategory from '../Components/CharacterList/CharacterCategory';
import CopiedPopupText from '../Components/CharacterList/CopiedPopupText';
import BottomDynamicHeader from '../Components/Header/BottomDynamicHeader';

import Container from "../Components/Misc/Container"

class CharacterList extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			copiedPopupVisible : false,
		};
		
		this.showCopiedPopup = this.showCopiedPopup.bind(this);

		// Generate the character list.
		// Passes down the showCopiedPopup function, to let the buttons run it.
		this.list = this.props.database.map((category) => 
			<CharacterCategory category={category} showPopupFunc={this.showCopiedPopup}/>
		);
	}

	showCopiedPopup() {
		console.log("lmao")
		console.log(this);
		
		this.setState({ copiedPopupVisible: true });

		setTimeout(() => {
			this.setState({ copiedPopupVisible: false });
		}, 100); //how long the popup is kept stable on screen, before starting the fadeaway animation. Too short and it won't even show up. (CSS class is added and removed again before a render happens)
	};

	

	render() {
		return (
			<div>
				<Container addClass="page-content">
					<h1 className="centered">Character List</h1>
					<p>Find and copy special characters for Starbase Text Panels!</p>
					<p className="highlight">The font you're seeing here is the same used by the game!</p>
					<p>Tip: Keep in mind a lot of characters look "thin" and are not as readable on a tiny text panel placed far away from the player's point of view.</p>
					<div>{this.list}</div>
				</Container>
				
				<CopiedPopupText isVisible={this.state.copiedPopupVisible}/>
				<BottomDynamicHeader/>
			</div>
		);
	};
}

export default CharacterList;