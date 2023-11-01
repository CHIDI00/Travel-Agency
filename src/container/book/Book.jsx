import React from "react";
import { RiHeart3Line } from "react-icons/ri";
import "./book.css";
import {
	icon1,
	icon2,
	icon3,
	bookTrip,
	bookTrip2,
	leafIcon,
	mapIcon,
	sendIcon,
	homeIcon,
} from "./import";

const stepsData = [
	{
		icon: icon1,
		step: "Choose Destination",
		details:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
	},
	{
		icon: icon2,
		step: "Make Payment",
		details:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
	},
	{
		icon: icon3,
		step: "Reach Airport on Selected Date",
		details:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
	},
];

const Book = function () {
	return (
		<div className="taw__book section__padding">
			<div className="taw__book-container_left">
				<p>Easy and Fast</p>
				<h1>Book your next trip in 3 easy steps</h1>

				<div className="taw__book-container_3step">
					{stepsData.map((step) => (
						<div className="taw__book-content_step">
							<img src={step.icon} alt="icon" />
							<div className="taw__book-content">
								<p>{step.step}</p>
								<p>{step.details}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="taw__book-container_right">
				<div className="taw__book-container_big">
					<img src={bookTrip} alt="trip" className="trip" />
					<p className="location">Trip To Greece</p>
					<p className="by">14-29 June by Robbin Joseph</p>
					<div className="taw__book-container_icon">
						<div className="taw__book-icon">
							<img src={leafIcon} alt="icon" />
						</div>
						<div className="taw__book-icon">
							<img src={mapIcon} alt="icon" />
						</div>
						<div className="taw__book-icon">
							<img src={sendIcon} alt="icon" />
						</div>
					</div>
					<div className="taw__book-container_peopleGoing">
						<div className="taw__book-peapleGoing">
							<img src={homeIcon} alt="home" />
							<p>24 people going</p>
						</div>
						<RiHeart3Line />
					</div>
					<div className="taw__book-container_small">
						<img src={bookTrip2} alt="trip" />
						<div className="taw__book-small_content">
							<p>Ongoing</p>
							<p>Trip to Rome</p>
							<p>
								40% <span>completed</span>
							</p>
							<div className="taw__book-bar_container">
								<div className="taw__book-bar"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Book;
