import './css/App.css';
import './css/Theme.css';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import MainHeader from './Components/Header/MainHeader';
import CharacterList from './Pages/CharacterList';
import PreviewPage from './Pages/PreviewPage';
import About from './Pages/About';
import InvalidUrl from './Pages/InvalidUrl';

import characterDatabase from "./characterDatabase";

function App() {
	return (
		<div>
			<Router>
				<MainHeader/>
				<Switch>
					<Route exact path="/"> <CharacterList database={characterDatabase}/> </Route>
					<Route path="/preview"> <PreviewPage/> </Route>
					<Route path="/about"> <About/> </Route>

					<Route path="*"> <InvalidUrl/> </Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
