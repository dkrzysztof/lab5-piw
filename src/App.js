import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import Zadanie1 from './components/zadanie1';
import Zadanie2 from './components/zadanie2';
import Zadanie3 from './components/zadanie3';
import Zadanie4 from './components/zadanie4';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/z1">
						<Zadanie1 title="Witaj!" />
					</Route>
					<Route exact path="/z2">
						<Zadanie2 />
					</Route>
					<Route exact path="/z3">
						<Zadanie3 />
					</Route>
					<Route path="/z4">
						<Zadanie4 />
					</Route>
					<Redirect to="/z1" />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
