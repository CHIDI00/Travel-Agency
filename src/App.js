import React, { useEffect } from "react";
import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";

import {
	Book,
	Category,
	Destination,
	Footer,
	Header,
	Subscribe,
	Testimonial,
} from "./container";

import { Brand, Navbar } from "./components";

function App() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);

	return (
		<div className="App">
			<div className="bg__image">
				<Navbar />
				<Header />
			</div>
			<Category />
			<Destination />
			<Book />
			<Testimonial />
			<Brand />
			<Subscribe />
			<Footer />
		</div>
	);
}

export default App;
