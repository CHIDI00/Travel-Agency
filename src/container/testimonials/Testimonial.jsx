import React, { useState } from "react";
import testimonee from "../../assets/testimonee.png";
import testimonee2 from "../../assets/testimonee2.jpg";
import testimonee3 from "../../assets/testimonee3.jpg";
import testimonee4 from "../../assets/testimonee4.jpg";
import "./testimonial.css";
import { RiArrowLeftLine } from "react-icons/ri";
import { RiArrowRightLine } from "react-icons/ri";

const testimonialData = [
	{
		image: testimonee4,
		text: "“I recently flew with Jadoo Airlines, and I was thoroughly impressed with their service. The flight attendants were friendly and attentive, and the in-flight entertainment options were excellent. The flight was smooth, and the on-time departure and arrival made my trip stress-free. I'll definitely choose Jadoo Airlines for my future travel.”",
		name: "Mike Taylor",
		country: "Lagos, Nigeria",
	},
	{
		image: testimonee,
		text: "“I recently flew with Jadoo Airlines, and I was thoroughly impressed with their service. The flight attendants were friendly and attentive, and the in-flight entertainment options were excellent. The flight was smooth, and the on-time departure and arrival made my trip stress-free. I'll definitely choose Jadoo Airlines for my future travel.”",
		name: "David Thumbsup",
		country: "Rome, Italy",
	},
	{
		image: testimonee3,
		text: "“My experience with Jadoo Airlines was fantastic! The cleanliness of the aircraft and the COVID-19 safety measures in place gave me peace of mind. Their customer service was top-notch, and I appreciated the flexibility they offered when I needed to change my travel dates. I will be recommending Jadoo Airlines to all my friends and family.”",
		name: "Nana lee",
		country: "Ligiang, China",
	},
	{
		image: testimonee2,
		text: "“Jadoo Airlines exceeded my expectations in every way. From the moment I booked my ticket online to the time I disembarked, everything was smooth and efficient. The flight crew's professionalism and the modern amenities on board made my long-haul flight feel like a breeze. I wouldn't hesitate to choose Jadoo Airlines for my future travels.”",
		name: "Ijiro Nanami",
		country: "Tokyo, Japan",
	},
];

const Testimonial = function () {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((index) => (index + 1) % testimonialData.length);
	};

	const prevSlide = () => {
		setCurrentIndex(
			(index) => (index - 1 + testimonialData.length) % testimonialData.length
		);
	};

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
				<button className="big_screen-button" onClick={prevSlide}>
					<RiArrowLeftLine />
				</button>
				<div className="taw__testimonial-testimony">
					<img src={testimonialData[currentIndex].image} alt="testimonee" />
					<p>{testimonialData[currentIndex].text}</p>
					<div className="name">
						<p>{testimonialData[currentIndex].name}</p>
						<p>{testimonialData[currentIndex].country}</p>
					</div>
				</div>
				<div className="small_screen-button">
					<button onClick={prevSlide}>
						<RiArrowLeftLine />
					</button>
					<button onClick={nextSlide}>
						<RiArrowRightLine />
					</button>
				</div>
				<button className="big_screen-button" onClick={nextSlide}>
					<RiArrowRightLine />
				</button>
			</div>
		</div>
	);
};

export default Testimonial;
