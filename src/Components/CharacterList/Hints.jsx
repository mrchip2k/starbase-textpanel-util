import React from 'react';

import hintsDatabase from "../../hintsDatabase"

class Hints extends React.Component {
	
	constructor (props) {
		super(props);
		this.state = {
			hintIndex : 420, //this value should always be overwritten
		};
		this.hintsLength = hintsDatabase.length;
		this.nextHint = this.nextHint.bind(this);
	}
	
	componentDidMount(){
		this.initIndex();
	}

	setIndex(index) {
		localStorage.setItem("lastHintID", index);
		this.setState({ hintIndex: index });
	}
	nextHint(attemptedIndex){
		let result = attemptedIndex+1 >= this.hintsLength ? 0 : attemptedIndex+1;
		this.setIndex(result);
	}

	initIndex() {
		let read = parseInt( localStorage.getItem("lastHintID") );
		
		if ( typeof(read)==="number" && !isNaN(read) ) {
		//A valid number was found in storage. Use that.
			//Also increment it, so each page load shows a different hint.
			this.nextHint( read )
		} else {
		//Not a valid number. Probably the first page load. Set to 0.
			this.setIndex( 0 )
		}
	}

	render() {
		return (
			<div className="hints-container noselect" onClick={ ()=> {this.nextHint(this.state.hintIndex)} }>

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