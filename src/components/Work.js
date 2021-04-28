import React from "react";
import "./Work.css";

function Work() {
	return (
		<div className="work_section">
			<div className="background"></div>
			<div className="text">
				<h1>WORK</h1>
				<div className="bot"></div>
			</div>
			<div className="work_example">
				<ul className="work_example_elements">
					<li>
						Expedia Meeting Market{" "}
						<a href="https://www.expedia.com/">View more</a>
					</li>

					<li>
						Melanie Daveid{" "}
						<a href="https://melaniedaveid.com/">View more</a>
					</li>
					<li>
						Austria Summer Moments{" "}
						<a href="https://www.austria.info/en">View more</a>
					</li>
					<li>
						Row Low{" "}
						<a href="http://www.rowlow.github.io/">View more</a>
					</li>
					<li>
						Digging in the Crates{" "}
						<a href="https://ditcent.myshopify.com/">View more</a>
					</li>
					<li>
						Infinity Car Configurator{" "}
						<a href="https://infiniti-carconfigurator.com/">
							View more
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Work;
