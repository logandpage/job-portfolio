import React from "react";
import Project from "../Project";

function Portfolio() {
	const projects = [
		{
			name: "Holiday Planner",
			image: "holidayplanner.jpg",
			deployed: "https://desolate-inlet-16467.herokuapp.com/"
		},
		{
			name: "Ambitious Alcoholics",
			image: "aa.jpg",
			deployed: "https://jacobwilde378.github.io/ambitious-alcoholics/",
		},
		{
			name: "Run Buddy",
			image: "Run-Buddy.png",
			deployed: "https://budget-tracker-owais.herokuapp.com/",
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;