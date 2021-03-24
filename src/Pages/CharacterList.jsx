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
			copiedPopupX : "100px",
			copiedPopupY : "100px",
		};
		
		this.showCopiedPopup = this.showCopiedPopup.bind(this);

		// Generate the character list.
		// Passes down the showCopiedPopup function, to let the buttons run it.
		this.list = this.props.database.map((category) => 
			<CharacterCategory category={category} showPopupFunc={this.showCopiedPopup}/>
		);
	}

	showCopiedPopup(boundingClientRect) {

		//midpoint between .left and .right
		const resultX = boundingClientRect.left - 
		(boundingClientRect.left-boundingClientRect.right)/2

		//.top gives height to start from
		const resultY = boundingClientRect.top-20
		//For later: window.innerHeight
		
		this.setState({ 
			copiedPopupVisible: true,
			copiedPopupX : resultX, 
			copiedPopupY : resultY
		});

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
				
				<CopiedPopupText 
				isVisible={this.state.copiedPopupVisible}
				left={this.state.copiedPopupX}
				top={this.state.copiedPopupY}
				/>
				<BottomDynamicHeader/>
			</div>
		);
	};
}

export default CharacterList;