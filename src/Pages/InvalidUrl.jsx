import React from 'react';
import { useLocation } from 'react-router';
import Container from '../Components/Misc/Container';

function InvalidUrl(props) {
	let location = useLocation().pathname;
	
	return (
		<Container>
			<h1>URL not found.</h1>
			<p>The URL: <code>{location}</code> could not be found.</p>
		</Container>
	);
}

export default InvalidUrl;