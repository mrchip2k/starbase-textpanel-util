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
				className=""
				/>
			</Link>

			<Link to="/" className="grow"> 
			<span>Character List</span> 
			</Link>

			<Link to="/preview" className="grow"> 
			<span>Preview Mode</span> 
			</Link>

			<Link to="/about" className="grow"> 
			<span>About</span> 
			</Link>
		</Container>
	);
}

export default HeaderBase;