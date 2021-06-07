import React from "react";
import agile_process from "../img/agile_process.png";
import "./Workflow.css";

function Workflow() {
	return (
		<div className="workflow_section">
			<div className="text">
				<h1>WORKFLOW</h1>
				<div className="bot"></div>
			</div>
			<div className="wf_information">
				<p>
					I <span>tackle</span> a broad variety of
				</p>
				<p>
					dicpiplines in the <span>agile process</span>,
				</p>
				<p>of creating meaningful products</p>
			</div>
			<img src={agile_process} alt="agile process" />
		</div>
	);
}

export default Workflow;
