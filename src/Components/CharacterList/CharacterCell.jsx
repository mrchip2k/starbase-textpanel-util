import React from 'react';

function CharacterCell(props) {

	const visibleClassName = "copied-popup-visible"; //The class added to trigger the "visible" CSS.
	
	function clickAction (){
// I feel like there's a React specific way to do this, but i've wasted enough time already searching for that.
		const copiedPopupTextElement = document.querySelector(".copied-popup-container");
		console.log(copiedPopupTextElement)
		
		copiedPopupTextElement.classList.add(visibleClassName);
		setTimeout(() => {
			copiedPopupTextElement.classList.remove(visibleClassName);
		}, 100); //how long the popup is kept stable on screen, before starting the fadeaway animation. Too short and it won't even show up.
	}

	return (
		<button className="character-cell" onClick={clickAction}>
			{props.char}
		</button>
	);
}

export default CharacterCell;