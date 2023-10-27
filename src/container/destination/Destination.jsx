import React from "react";
import "./destination.css";
import destination01 from "../../assets/destination01.jpg";
import destination02 from "../../assets/destination02.jpg";
import destination03 from "../../assets/destination03.jpg";
import sendIcon from "../../assets/sendIcon.png";

const Destination = function () {
	return (
		<div className="taw__destination section__padding">
			<div className="taw__destination-container_content">
				<p>Top selling</p>
				<h1>Top Destinations</h1>
			</div>
			<div className="taw__destination-container_card">
				<div className="taw__destination-card">
					<img src={destination01} alt="rome" />
					<div className="taw__destination-card_content">
						<div className="taw__destination-card_content-location">
							<p>Rome, Italy</p>
							<p>$5,42k</p>
						</div>
						<div className="taw__destination-card_content-day">
							<img src={sendIcon} alt="flyIcon" />
							<p>10 days Trip</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Destination;
