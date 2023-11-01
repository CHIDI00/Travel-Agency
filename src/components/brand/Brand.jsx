import React from "react";
import "./brand.css";
import { brand01, brand02, brand03, brand04, brand05 } from "./import";

const Brand = function () {
	return (
		<div className="taw__brand section__padding">
			<div className="taw__brand-image">
				<img src={brand01} alt="brand" />
			</div>
			<div className="taw__brand-image">
				<img src={brand03} alt="brand" />
			</div>
			<div className="taw__brand-image">
				<img src={brand02} alt="brand" />
			</div>
			<div className="taw__brand-image">
				<img src={brand04} alt="brand" />
			</div>
			<div className="taw__brand-image">
				<img src={brand05} alt="brand" />
			</div>
		</div>
	);
};

export default Brand;
