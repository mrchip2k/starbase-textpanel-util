import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Misc/Container';

function MainHeader(props) {
	return (
		<Container addClass="header top border acrylic">
			<Link to="/">
				<img
				src="/textpanel_logo128.png" 
				alt="Logo"
				/>
			</Link>

			<Link to="/" className="grow"> 
				<span>List</span> 
			</Link>

			<Link to="/about" className="grow"> 
				<span>About</span> 
			</Link>
		</Container>
	);
}

export default MainHeader;