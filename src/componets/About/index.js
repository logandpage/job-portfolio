import React from "react";

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img src={require("../../assets/images/Photo-me.JPG")}/>
			</div>
			<div>
				<p>
                	I have my highschool diploma. I speak both english and spanish. I started and ran a lawn mowing business for 3 years. I have worked for UPS.
                	Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsam natus placeat quibusdam voluptatibus ad optio blanditiis cumque quo excepturi veritatis commodi, dicta minus. Porro atque repellendus voluptatum culpa deserunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, repellat odio! Quia hic, aut modi dignissimos eaque ad doloribus expedita adipisci numquam asperiores quos sequi tenetur corporis tempora nesciunt qui. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur voluptas ad sed nulla alias, optio in sapiente fugit distinctio perspiciatis suscipit sunt laboriosam, possimus id doloribus aperiam! Vitae, aut labor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt alias est illum praesentium labore a distinctio assumenda, quae ad quia, unde nesciunt iure hic illo. Saepe officiis quasi eligendi praesentium!
				</p>
			</div>
		</section>
	);
}

export default About;