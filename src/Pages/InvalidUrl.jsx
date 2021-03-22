import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Container from '../Components/Misc/Container';

function InvalidUrl(props) {
	let location = useLocation().pathname;
	
	return (
		<Container>
			<h1>URL not found.</h1>
			<p>The URL: <code>{location}</code> could not be found.</p>
			<Link to="/" class="button button-primary" >Back to homepage</Link>
		</Container>
	);
}

export default InvalidUrl;