import React from "react";
import testimonee from "../../assets/testimonee.png";
import "./testimonial.css";

const testimonialData = [
	{
		image: testimonee,
		text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
		name: "Mike Taylor",
		country: "Lahare, Pakistan",
	},
	// {
	// 	image: testimonee,
	// 	text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
	// 	name: "Mike Taylor",
	// 	country: "Rome, Italy",
	// },
	// {
	// 	image: testimonee,
	// 	text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
	// 	name: "Mike Taylor",
	// 	country: "Los Angeles, USA",
	// },
	// {
	// 	image: testimonee,
	// 	text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
	// 	name: "Mike Taylor",
	// 	country: "Poponga, Philipines",
	// },
];

const Testimonial = function () {
	return (
		<div className="taw__testimonial section__padding">
			<div className="taw__testimonial-container_left">
				<p>TESTIMONIALS</p>
				<h1>What Peaple Say About Us.</h1>

				<div className="taw__testimonial-container_dot">
					<div className="dot"></div>
					<div className="dot"></div>
					<div className="dot"></div>
				</div>
			</div>

			<div className="taw__testimonial-container_right">
				{testimonialData.map((testimony) => (
					<div className="taw__testimonial-testimony">
						<img src={testimony.image} alt="testimonee" />
						<p>{testimony.text}</p>
						<div className="name">
							<p>{testimony.name}</p>
							<p>{testimony.country}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Testimonial;
