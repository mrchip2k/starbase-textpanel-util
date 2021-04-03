import React from 'react';

import hintsDatabase from "../../hintsDatabase"

class Hints extends React.Component {
	
	constructor (props) {
		super(props);
		this.state = {
			hintIndex : 0,
		};

		this.hintsLength = hintsDatabase.length;

		this.nextHint = this.nextHint.bind(this);
	}

	nextHint(){
		let result = this.state.hintIndex+1>=this.hintsLength ? 0 : this.state.hintIndex+1;
		this.setState({ 
			hintIndex: result ,
		});
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