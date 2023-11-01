import { RiCheckboxCircleFill, RiMailLine } from "react-icons/ri";
import React, { useState } from "react";
import subscribeIcon from "../../assets/subscribeIcon.png";
import "./subscribe.css";

const Subscribe = function () {
	const [email, setEmail] = useState("");
	const [Message, setMessage] = useState("");

	const form = function (e) {
		e.preventDefault();

		setEmail("");
		handleMessage();
	};

	const handleSubmit = () => {
		setEmail("");
		handleMessage();
	};

	const handleMessage = () => {
		if (!email.includes("@gmail.com") || email.trim() === "") {
			return setMessage(
				<p style={{ color: "red" }}>Please enter a valid email address</p>
			);
		} else {
			return setMessage(
				<>
					<RiCheckboxCircleFill color="green" size={22} />
					<p>Email has been received</p>
				</>
			);
		}
	};

	return (
		<div className="taw__subscribe-container section__margin">
			<div className="taw__subscribe">
				<h1>
					Subscribe to get information, latest news and other interesting offers
					about Jaboo
				</h1>
				<form className="taw__subscribe-form" onSubmit={form}>
					<div className="taw__subscribe-input_container">
						<div className="input_container">
							<RiMailLine color="gray" size={24} />
							<input
								type="text"
								placeholder="Your Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<button type="button" onClick={handleSubmit}>
							Subscibe
						</button>
					</div>
					<div className="taw__subscribe-form_message">{Message}</div>
				</form>
				<img src={subscribeIcon} alt="sendIcon" />
			</div>
		</div>
	);
};

export default Subscribe;
