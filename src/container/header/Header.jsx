import React from "react";
import playBtn from "../../assets/playBtn.jpg";
import traveller from "../../assets/Traveller 1.png";
import plane from "../../assets/plane.png";
import "./header.css";

const Header = function () {
	return (
		<div className="taw__header section__padding" id="header">
			<div className="taw__header-container-left">
				<h4>Best Destinations around the world</h4>
				<h1>Travel, enjoy and live a new and full life</h1>
				<p>
					Built Wicket longer admire do barton vanity itself do in it. Preferred
					to sportsmen it engrossed listening. Park gate sell they west hard for
					the.
				</p>
				<div className="taw__header-container_btn">
					<button type="button">Find out more</button>
					<img src={playBtn} alt="play" />
					<p>
						<a href="https://youtube.com/shorts/I4GIJEeOM6M?si=Ar3HYSPv-k0zGh4o">
							Play Demo
						</a>
					</p>
				</div>
			</div>

			<div className="taw__header-image">
				<img src={plane} alt="plane" />
				<img src={traveller} alt="traveller" />
			</div>
		</div>
	);
};

export default Header;
