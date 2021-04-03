import React from "react";
import "./Navbar.css";
import gems from "../img/gems.png";

function Navbar() {
	return (
		<>
			<div className="nav">
				<div className="background"></div>
				<header>
					<span className="right_span">/</span>We ain't plastic
					<span className="left_span">/</span>
				</header>
				<img src={gems} alt="" />
				<h1>GEMS</h1>
				<div className="bot"></div>
			</div>
		</>
	);
}

export default Navbar;
