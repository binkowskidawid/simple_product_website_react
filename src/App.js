import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Main />
				<Work />
			</Router>
		</div>
	);
}

export default App;
