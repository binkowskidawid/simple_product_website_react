import React, { useEffect, useState } from "react";
import "./CarbonEmissions.css";
import "./CarbonDetail.css";

function CarbonDetail({ match }) {
	useEffect(() => {
		fetchDetail();
		// console.log(match);
	}, []);

	const [details, setDetails] = useState([{}]);

	const fetchDetail = async () => {
		const fetchDetail = await fetch(
			`https://api.carbonintensity.org.uk/regional/regionid/${match.params.id}`
		);
		const details = await fetchDetail.json();
		console.log(details.data[0].data[0]);
		setDetails(details.data[0].data[0]);
	};

	const mix = details.generationmix.map((detail) => (
		<div className="mix">
			<p>fuel: {detail.fuel}</p>
			<p>perc: {detail.perc}</p>
		</div>
	));

	return (
		<div className="carbon_emissions_detail">
			<h1>
				from: <span>{details.from}</span>
			</h1>
			<div className="generation">{mix}</div>
		</div>
	);
}

export default CarbonDetail;
