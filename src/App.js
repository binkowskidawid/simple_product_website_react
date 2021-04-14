import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Main />
			</Router>
		</div>
	);
}

export default App;
