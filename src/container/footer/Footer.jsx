import React from "react";
import "./footer.css";
import facebook from "../../assets/facebookIcon.png";
import instagram from "../../assets/instagramIcon.png";
import twitter from "../../assets/twitterIcon.png";
import playstore from "../../assets/google-play.png";
import appstore from "../../assets/app-store.png";

const Footer = function () {
	return (
		<div className="taw__footer section__padding">
			<div className="taw__footer-container">
				<div className="taw__footer-container_logo">
					<p>
						<a href="#home">Jadoo.</a>
					</p>
					<p>
						Book your trip in minute, <br /> get full control for much longer.
					</p>
				</div>

				<div className="taw__footer-container_links">
					<div className="taw__footer-linksA">
						<h4>Company</h4>
						<p>
							<a href="#">About</a>
						</p>
						<p>
							<a href="#">Careers</a>
						</p>
						<p>
							<a href="#">Mobile</a>
						</p>
					</div>
					<div className="taw__footer-linksA">
						<h4>Contact</h4>
						<p>
							<a href="#">Help/FAQ</a>
						</p>
						<p>
							<a href="#">Press</a>
						</p>
						<p>
							<a href="#">Affilates</a>
						</p>
					</div>
					<div className="taw__footer-linksA">
						<h4>More</h4>
						<p>
							<a href="#">Airlinefees</a>
						</p>
						<p>
							<a href="#">Airline</a>
						</p>
						<p>
							<a href="#">Low fare tips</a>
						</p>
					</div>
				</div>

				<div className="taw__footer-container_socials">
					<div className="taw__footer-container_medial">
						<div className="taw__footer-medial">
							<img src={facebook} alt="facebook" />
						</div>
						<div className="taw__footer-medial insta">
							<img src={instagram} alt="facebook" />
						</div>
						<div className="taw__footer-medial">
							<img src={twitter} alt="facebook" />
						</div>
					</div>

					<p>Discover our app</p>

					<div className="taw__footer-store">
						<div className="taw__footer-store_playstore">
							<img src={playstore} alt="" />
							<div className="taw__footer-playstore_content">
								<h4>GET IT ON</h4>
								<p>GOOGLE PLAY</p>
							</div>
						</div>
						<img src={appstore} alt="" />
					</div>
				</div>
			</div>
			<p className="taw__footer_copy">
				&copy;{new Date().getFullYear()} All right reserved@jadoo.co
			</p>
		</div>
	);
};

export default Footer;
