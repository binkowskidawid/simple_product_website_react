import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import gems from "../img/gems.png";

function Navbar() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<>
			<div className="nav">
				<div className="background"></div>
				<header>
					<span className="right_span">/</span>
					We ain't plastic
					<span className="left_span">/</span>
					<div className="mobile_menu" onClick={handleClick}>
						<i
							className={
								click ? "fas fa-times" : "fas fa-recycle"
							}
						></i>
					</div>
				</header>
				<div className="gem">
					<img src={gems} alt="" />
					<h1>GEMS</h1>
					<div className="bot"></div>
				</div>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<Link
							to="/"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link
							to="/services"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							Services
						</Link>
					</li>
					<li className="nav-item">
						<Link
							to="/products"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							Products
						</Link>
					</li>
					<li className="nav-item">
						<Link
							to="/sign-up"
							className="nav-links-mobile"
							onClick={closeMobileMenu}
						>
							Sign Up
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
}

export default Navbar;
