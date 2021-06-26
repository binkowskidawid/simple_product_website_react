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

	let mix;
	if (details.generationmix) {
		mix = details.generationmix.map((detail) => (
			<div className="mix">
				<p key={detail.fuel}>fuel: {detail.fuel}</p>
				<p key={detail.perc}>perc: {detail.perc}</p>
			</div>
		));
	}

	const reg = /[A-Z]/g;

	// async function rep(str) {
	// 	return str.replace(reg, " ")
	// }

	let from = details.from;
	// .replace(reg, " ");

	return (
		<div className="carbon_emissions_detail">
			<h1>
				from: <span>{from}</span>
			</h1>
			<div className="generation">{mix}</div>
		</div>
	);
}

export default CarbonDetail;
