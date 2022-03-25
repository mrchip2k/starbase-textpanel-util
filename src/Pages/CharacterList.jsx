import React from 'react';

import CharacterCategory from '../Components/CharacterList/CharacterCategory';
import CopiedPopupText from '../Components/CharacterList/CopiedPopupText';
import Hints from '../Components/CharacterList/Hints';
import BottomDynamicHeader from '../Components/Header/BottomDynamicHeader';
import Container from "../Components/Misc/Container"
import InvisibleCopyTextbox from '../Components/Misc/InvisibleCopyTextbox';
import VersionBadge from '../Components/Misc/VersionBadge';
import NewTabLink from "../Components/Misc/NewTabLink";

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
		this.list = this.props.database.map((category, i) => 
			<CharacterCategory 
				key={i}
				category={category} 
				copyFunc={this.copyFunc}
			/>
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
			character : character               // normal
			// character : character.repeat(200) // lag testing
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

					<Hints/>

					<div>{this.list}</div>
					
					{/* About */}
					<div style={{opacity:0.7}}>
						<h1 className="centered">About</h1>
						<p>This is a utility website for the game Starbase. It lets you find and copy special characters, previewing them with the same font used in the game.</p>
						<p>The main purpose of this is to create nicer text panel UI.</p>
						<h4>Contact me</h4>
						<ul>
							<li>DM me on Discord: mrchip#4403</li>
							<li>Email: <a href="mailto:mrchip2k@gmail.com">mrchip2k@gmail.com</a></li>
						</ul>

						<p className="highlight">Found a character that works in game and should be included here? Is anything here broken? Have any suggestions or feedback? Feel free to contact me! </p>

						<h4>About Telegrama, the font.</h4>
						<p>The font can be found <NewTabLink href="http://yoworks.com/telegrama/index.html">here</NewTabLink>.</p>
						<p>Starbase disabled many special characters. This means you will find new characters in the original font linked above, but most that aren't included in this website do not display correctly ingame. (Every character in this website is confirmed to work in Starbase.)</p>
						<p>It's not entirely clear to me if its license allows the font to be used in a website like this - if you are the font's author and have an issue with this, please contact me!</p>

						<h4>Github repository</h4>
						<p>The source code is available <NewTabLink href="https://github.com/mrchip2k/starbase-textpanel-util">here</NewTabLink>.</p>
					</div>
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