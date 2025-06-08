import React from "react";
import "./destination.css";
import destination01 from "../../assets/destination01.jpg";
import destination02 from "../../assets/destination02.jpg";
import destination03 from "../../assets/destination03.jpg";
import navigation from "../../assets/navigation.png";

const Destination = function () {
	return (
		<div className="taw__destination section__padding" id="destination">
			<div className="taw__destination-container_content" data-aos="fade-up">
				<p>Top selling</p>
				<h1>Top Destinations</h1>
			</div>

			<div className="taw__destination-container_card">
				<div
					data-aos="fade-up"
					className="taw__destination-card"
					style={{ backgroundImage: `url('${destination01}')` }}
				>
					<div className="taw__destination-card_content">
						<div className="taw__destination-card_content-location">
							<p>Rome, Italy</p>
							<p>$5,42k</p>
						</div>
						<div className="taw__destination-card_content-day">
							<img src={navigation} alt="flyIcon" />
							<p>10 Days Trip</p>
						</div>
					</div>
				</div>

				<div
					data-aos="fade-up"
					className="taw__destination-card"
					style={{ backgroundImage: `url('${destination02}')` }}
				>
					<div className="taw__destination-card_content">
						<div className="taw__destination-card_content-location">
							<p>London, UK</p>
							<p>$4.2k</p>
						</div>
						<div className="taw__destination-card_content-day">
							<img src={navigation} alt="flyIcon" />
							<p>12 Days Trip</p>
						</div>
					</div>
				</div>

				<div
					data-aos="fade-up"
					className="taw__destination-card"
					style={{ backgroundImage: `url('${destination03}')` }}
				>
					<div className="taw__destination-card_content">
						<div className="taw__destination-card_content-location">
							<p>Full Europe</p>
							<p>$15k</p>
						</div>
						<div className="taw__destination-card_content-day">
							<img src={navigation} alt="flyIcon" />
							<p>28 Days Trip</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Destination;
