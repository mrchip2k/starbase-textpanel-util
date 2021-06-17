import React from 'react';

import Container from '../Components/Misc/Container';
import NewTabLink from "../Components/Misc/NewTabLink";
import VersionBadge from '../Components/Misc/VersionBadge';

function About(props) {
	return (
		<Container addClass="page-content">
			<VersionBadge/>
			<h1 className="centered">About</h1>
			<p>This is a utility website for the game Starbase. It lets you find and copy special characters, previewing them with the same font used in the game.</p>
			<p>The main purpose of this is to create nicer text panel UI.</p>
			<h4>Contact me</h4>
			<ul>
				<li>DM me on Discord: mrchip#4403</li>
				<li>Email: <a href="mailto:mrchip2k@gmail.com">mrchip2k@gmail.com</a></li>
			</ul>

			<p className="highlight">Found a character that works in game and should be included here? Is anything here broken? Have any suggestions or feedback? Feel free to contact me! </p>

			<h4>About <span className="telegrama">Telegrama</span>, the font.</h4>
			<p>The font can be found <NewTabLink href="http://yoworks.com/telegrama/index.html">here</NewTabLink>.</p>
			<p>Starbase disabled many special characters. This means you will find new characters in the original font linked above, but most that aren't included in this website do not display correctly ingame. (Every character in this website is confirmed to work in Starbase.)</p>
			<p>It's not entirely clear to me if its license allows the font to be used in a website like this - if you are the font's author and have an issue with this, please contact me!</p>

			<h4>Github repository</h4>
			<p>The source code is available <NewTabLink href="https://github.com/mrchip2k/starbase-textpanel-util">here</NewTabLink>.</p>
		</Container>
	);
}

export default About;