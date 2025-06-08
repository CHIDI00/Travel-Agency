import React from "react";
import "./feature.css";

const Feature = function ({ image, title, text }) {
	return (
		<div className="taw__feature-card" data-aos="fade-up">
			<img src={image} alt="logo" />
			<p className="first">{title}</p>
			<p>{text}</p>
		</div>
	);
};

export default Feature;
