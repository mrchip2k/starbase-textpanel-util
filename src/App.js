import './css/App.css';
import './css/Theme.css';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import HeaderBase from './Components/Header/HeaderBase';
import CharacterList from './Pages/CharacterList';
import PreviewPage from './Pages/PreviewPage';
import About from './Pages/About';

function App() {
	return (
		<div>
			<Router>
				<HeaderBase/>
				<Switch>
					<Route exact path="/"> <CharacterList/> </Route>
					<Route path="/preview"> <PreviewPage/> </Route>
					<Route path="/about"> <About/> </Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
