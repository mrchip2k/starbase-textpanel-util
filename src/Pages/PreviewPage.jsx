import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Components/Misc/Container';
import VersionBadge from '../Components/Misc/VersionBadge';

function PreviewPage(props) {
	return (
		<Container addClass="page-content">
			<VersionBadge/>
			<h1 className="centered">Preview Editor</h1>

			<img
				src="/assets/soon.png"
				alt="Soon" 
				className="centered"
			/>

			<h4>Oh no! This feature isn't available yet.</h4>
			<p>The Editor will let you enter a YOLOL string and preview what it will look like on a textpanel in the game.</p>
			<h4>By the way, here's another planned feature:</h4>
			<p>
				Rightclick to add characters to a textbox, then copy all of them at once. <span className="highlight">Includes keyboard shortcuts!</span> This will be the default mode for mobile users.
			</p>

			<p className="highlight">Any suggestions? <Link to="/about">Contact me!</Link></p>
			
		</Container>
	);
}

export default PreviewPage;