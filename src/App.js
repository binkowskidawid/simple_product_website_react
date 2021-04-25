import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Information from "./pages/Information.js";
import CarbonEmissions from "./pages/CarbonEmissions.js";
import CarbonDetail from "./pages/CarbonDetail.js";
import SignUp from "./pages/SignUp.js";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Route path="/information" component={Information} />
				<Route
					path="/carbon-emissions"
					exact
					component={CarbonEmissions}
				/>
				<Route path="/carbon-emissions/:id" component={CarbonDetail} />
				<Route path="/sign-up" component={SignUp} />
				<Route path="/" exact component={Main} />
				<Route path="/" exact component={Work} />
			</div>
		</Router>
	);
}

export default App;
