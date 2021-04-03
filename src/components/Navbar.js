import React from "react";
import "./Navbar.css";
import gems from "../img/gems.png";

function Navbar() {
	return (
		<>
			<div className="nav">
				<div className="background"></div>
				<img src={gems} alt="" />
			</div>
		</>
	);
}

export default Navbar;
