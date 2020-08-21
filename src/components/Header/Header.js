import React from "react";
import "./style.css";

const HeaderTop = () => {
	return (
		<div className="p-4 custom-style">
			<h1 className="text-white">Employee Directory</h1>
			<h4 className="text-white text-muted">
				Click in the arrow to filter the results
			</h4>
		</div>
	);
};

export default HeaderTop;
