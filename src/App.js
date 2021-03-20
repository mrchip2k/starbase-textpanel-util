import './css/App.css';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

function App() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/"> Homepage Content </Route>
					<Route path="/about"> About Page Content </Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
