import './css/App.css';
import './css/Theme.css';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import HeaderBase from './Components/Header/HeaderBase';
import CharacterList from './Pages/CharacterList';

function App() {
	return (
		<div>
			<Router>
				<HeaderBase/>
				<Switch>
					<Route exact path="/"> <CharacterList/> </Route>
					<Route path="/preview"> Preview Mode Placeholder </Route>
					<Route path="/about"> About Page Placeholder </Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
