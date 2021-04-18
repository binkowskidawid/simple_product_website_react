import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Products from "./pages/Products.js";
import Services from "./pages/Services.js";
import SignUp from "./pages/SignUp.js";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Route path="/products" component={Products} />
				<Route path="/services" component={Services} />
				<Route path="/sign-up" component={SignUp} />
				<Route exact path="/" component={Main} />
				<Route exact path="/" component={Work} />

				{/* <Main />
				<Work /> */}
			</div>
		</Router>
	);
}

export default App;
