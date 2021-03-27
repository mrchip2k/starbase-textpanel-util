import React from 'react';

class CharacterCell extends React.Component {
	
	constructor(props) {
		super(props);
		this.selfRef = React.createRef();
	}

	render() {
		return (
			<button 
			className="character-cell" 
			ref={this.selfRef}
			onClick={() => {
				// trigger popup and send client rect object. the popup does the math.
				// also send the character to copy.
				this.props.copyFunc(this.selfRef.current.getBoundingClientRect() , this.props.char);
			} }>

				{this.props.char}

			</button>
		);
	};
}

export default CharacterCell;