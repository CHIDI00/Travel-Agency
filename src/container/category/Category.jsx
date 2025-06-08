import React from "react";
import { Feature } from "../../components";
import { service01, service02, service03, service04 } from "./import";
import "./category.css";

const cardData = [
	{
		image: service01,
		title: "Calculated Weather",
		text: "Built Wicket longer admire do barton vanity itself do in it.",
	},
	{
		image: service02,
		title: "Best Flights",
		text: "Engrossed listening. Park gate sell they west hard for the.",
	},
	{
		image: service03,
		title: "Local Events",
		text: "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
	},
	{
		image: service04,
		title: "Customization",
		text: "We deliver outsourced aviation services for military customers",
	},
];

const Category = function () {
	return (
		<div className="taw__category section__padding" id="category">
			<div className="taw__category-container">
				<p data-aos="fade-up">CATEGORY</p>
				<h1 data-aos="fade-up">We Offer Best Services</h1>
			</div>
			<div className="taw__category-container_card">
				{cardData.map((card) => (
					<Feature
						className="feature"
						image={card.image}
						title={card.title}
						text={card.text}
					/>
				))}
			</div>
		</div>
	);
};

export default Category;
