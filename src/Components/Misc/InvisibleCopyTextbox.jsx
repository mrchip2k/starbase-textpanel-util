import React from 'react';

class InvisibleCopyTextbox extends React.Component {

	constructor(props) {
		super(props);
		this.inputElementRef = React.createRef();
	};

	copyNow(event) {
		this.inputElementRef.current.select();
		document.execCommand("copy");
	}



	render() {
		return (
			<input 
				readOnly
				type="text" 

				ref={this.inputElementRef} 
				value={this.props.copyContent}

				className="noselect"
				style={{
					opacity:0,
					position: "fixed",
					top: "200%"
				}}
			/>
		);
	};
};

export default InvisibleCopyTextbox;