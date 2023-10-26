import React from "react";
import "./App.css";

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
