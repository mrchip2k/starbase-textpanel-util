import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Misc/Container';

function HeaderBase(props) {
	return (
		<Container addClass="header top sticky border">
			<Link to="/">
				<img
				src="/textpanel_logo128.png" 
				alt="Logo"
				/>
			</Link>

			<Link to="/" className="grow"> 
			<span>List</span> 
			</Link>

			<Link to="/preview" className="grow"> 
			<span>Editor</span> 
			</Link>

			<Link to="/about" className="grow-half"> 
			<span>About</span> 
			</Link>
		</Container>
	);
}

export default HeaderBase;