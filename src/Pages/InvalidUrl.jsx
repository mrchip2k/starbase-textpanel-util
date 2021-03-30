import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import Container from '../Components/Misc/Container';
import VersionBadge from '../Components/Misc/VersionBadge';

function InvalidUrl(props) {
	let location = useLocation().pathname;
	
	return (
		<Container>
			<VersionBadge/>
			<h1>URL not found.</h1>
			<p>The URL: <code>{location}</code> could not be found.</p>
			<Link to="/" className="button button-primary" >Back to homepage</Link>
		</Container>
	);
}

export default InvalidUrl;