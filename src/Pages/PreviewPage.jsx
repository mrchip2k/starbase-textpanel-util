import React from 'react';
import Container from '../Components/Misc/Container';

function PreviewPage(props) {
	return (
		<Container addClass="page-content soon">
			<h1>Preview Editor</h1>

			<img
				src="/assets/soon.png"
				alt="Soon" 
			/>

			<p>
				<code>Oh no! This feature isn't available yet.</code>
			</p>
			
		</Container>
	);
}

export default PreviewPage;