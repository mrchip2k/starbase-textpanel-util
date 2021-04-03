import React from 'react';

import hintsDatabase from "../../hintsDatabase"

class Hints extends React.Component {
	
	constructor (props) {
		super(props);
		this.state = {
			hintIndex : this.readIndexFromStorage(),
		};
		this.hintsLength = hintsDatabase.length;
		this.nextHint = this.nextHint.bind(this);
	}

	readIndexFromStorage() {
		let read = parseInt( localStorage.getItem("lastHintID") );
		// If it's not a valid number, reset to 0, otherwise use what was found in storage.
		let result = ( typeof(read)==="number" && !isNaN(read) ) ? read : 0 ; 
		return result;
	}

	nextHint(){
		let result = this.state.hintIndex+1>=this.hintsLength ? 0 : this.state.hintIndex+1;
		localStorage.setItem("lastHintID", result);
		this.setState({ hintIndex: result });
	}

	render() {
		return (
			<div className="hints-container noselect" onClick={ this.nextHint }>

				<p> { hintsDatabase[this.state.hintIndex] } </p>

				<div 
					className="hints-button telegrama">
						Next Hint
						<span> { this.state.hintIndex+1 +"/"+ this.hintsLength } </span>
				</div>
			</div>
		);
	}
}

export default Hints;