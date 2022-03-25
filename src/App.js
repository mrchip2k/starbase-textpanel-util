import './css/App.css';
import './css/Theme.css';

import CharacterList from './Pages/CharacterList';

import characterDatabase from "./characterDatabase";

function App() {
	return (
		<CharacterList database={characterDatabase}/>
	);
}

export default App;
