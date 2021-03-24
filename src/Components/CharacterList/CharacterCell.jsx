import React from 'react';

class CharacterCell extends React.Component {
	
	/* Useless constructor
	constructor(props) {
		super(props);
	}
	*/

	render() {
		return (
			<button className="character-cell" onClick={this.props.showPopupFunc}>
				{this.props.char}
			</button>
		);
	};
}

export default CharacterCell;