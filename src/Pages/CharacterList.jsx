import React from 'react';
import CharacterCategory from '../Components/CharacterList/CharacterCategory';
import CopiedPopupText from '../Components/CharacterList/CopiedPopupText';
import BottomDynamicHeader from '../Components/Header/BottomDynamicHeader';

import Container from "../Components/Misc/Container"
import InvisibleCopyTextbox from '../Components/Misc/InvisibleCopyTextbox';
import VersionBadge from '../Components/Misc/VersionBadge';

class CharacterList extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			copiedPopupVisible : false,
			copiedPopupX : "100px",
			copiedPopupY : "100px",
			character : "ඞ",
		};
		
		this.copyFunc = this.copyFunc.bind(this);

		this.copyTextboxRef = React.createRef();

		// Generate the character list.
		// Passes down the copyFunc function, to let the buttons run it.
		this.list = this.props.database.map((category) => 
			<CharacterCategory category={category} copyFunc={this.copyFunc}/>
		);
	}



	copyFunc(boundingClientRect, character) {
		this.triggerPopup(boundingClientRect);
		this.triggerCopy(character);
	};

	triggerPopup (boundingClientRect, character) {

		//midpoint between .left and .right
		const resultX = boundingClientRect.left - 
		(boundingClientRect.left-boundingClientRect.right)/2

		//.top gives height to start from
		const resultY = boundingClientRect.top-13
		//For later: window.innerHeight
		
		this.setState({ 
			copiedPopupVisible: true,
			copiedPopupX : resultX, 
			copiedPopupY : resultY,
		});

		setTimeout(() => {
			this.setState({ copiedPopupVisible: false });
		}, 300); 
		// How long the popup is kept stable on screen, before starting the fadeaway animation. 
		//Too short and it won't even show up. (CSS class is added and removed again before a render happens)
	}

	triggerCopy(character) {
		this.setState ({
			character : character
		})
		
		setTimeout(() => {
			this.copyTextboxRef.current.copyNow()
		}, 100);
		// Delay is necessary because otherwise it doesnt have time to change the textbox's content, and copies the old content.
	}
	

	render() {
		return (
			<div>
				<Container addClass="page-content">
					<VersionBadge/>
					<h1 className="centered">Character List</h1>
					<p>Find and copy special characters for Starbase Text Panels!</p>
					<p className="highlight">The font you're seeing here is the same used by the game!</p>
					<p>Tip: Keep in mind a lot of characters look "thin" and are not as readable on a tiny text panel placed far away from the player's point of view.</p>
					<div>{this.list}</div>
				</Container>

				
				<InvisibleCopyTextbox 
				copyContent={this.state.character}
				ref={this.copyTextboxRef}
				/>

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