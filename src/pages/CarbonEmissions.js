import React, { useEffect, useState } from "react";
import "./CarbonEmissions.css";
import { Link } from "react-router-dom";

function CarbonEmissions() {
	useEffect(() => {
		fetchItems();
	}, []);

	const [regions, setRegions] = useState([]);

	const fetchItems = async () => {
		const ukapi = await fetch(
			"https://api.carbonintensity.org.uk/regional"
		);
		const regions = await ukapi.json();
		console.log(regions.data[0].regions);
		setRegions(regions.data[0].regions);
	};

	return (
		<div className="carbon_emissions">
			<h1> UK Carbon Emissions</h1>
			<div className="regions">
				{regions.map((region) => (
					<div className="information">
						<h2 key={region.regionid}>
							<Link to={`/carbon-emissions/${region.regionid}`}>
								{region.shortname}
							</Link>
						</h2>
						<p key={region.intensity.forecast}>
							{region.intensity.index}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default CarbonEmissions;
