import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import logo from "../../assets/Logo.png";
import "./navbar.css";

const Menu = () => {
	return (
		<>
			<p>
				<a href="#header">Home</a>
			</p>
			<p>
				<a href="#category">Caregory</a>
			</p>
			<p>
				<a href="#destination">Destination</a>
			</p>
			<p>
				<a href="#book">Bookings</a>
			</p>
			<p>
				<a href="#subscribe">Subscribe</a>
			</p>
		</>
	);
};

const Navbar = function () {
	const [toggleMenu, setToggleMenu] = useState(false);
	return (
		<div className="taw__navbar">
			<diV className="taw__navbar-links">
				<div className="taw__navbar-links_logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="taw__navbar-links_container">
					<div className="taw__navbar-links_link">
						<Menu />
					</div>
					<div className="taw__navbar-links_btn">
						<p>Login</p>
						<button type="button">Sign up</button>
						<select>
							<option title="EN">EN</option>
							<option title="SPN">SPN</option>
							<option title="JPN">JPN</option>
						</select>
					</div>
					<div className="taw__navbar-menu">
						{toggleMenu ? (
							<RiCloseLine
								size={27}
								color="#000"
								onClick={() => setToggleMenu(false)}
								style={{ cursor: "pointer" }}
							/>
						) : (
							<RiMenu3Line
								size={27}
								color="#000"
								onClick={() => setToggleMenu(true)}
								style={{ cursor: "pointer" }}
							/>
						)}

						{toggleMenu && (
							<div
								className="taw__navbar-menu_container scale-up-center 
								"
							>
								<div className="taw__navbar-menu_container-links">
									<Menu />
									<div className="taw__navbar-menu-links_btn">
										<p>Login</p>
										<button type="button">Sign up</button>
										<select>
											<option title="EN">EN</option>
											<option title="SP">SP</option>
											<option title="JPN">JPN</option>
										</select>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</diV>
		</div>
	);
};

export default Navbar;
