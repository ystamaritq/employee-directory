import React, { useState } from "react";
import "./style.css";

const Header = ({ title, subtitle, displayError = false }) => {
	const [showError, setShowError] = useState(displayError);

	return (
		<div data-testid="header" className="p-4 custom-style">
			<h1
				data-testid="header-title"
				className="text-white"
				onClick={() => setShowError(!showError)}
			>
				{title}
			</h1>
			<h4 data-testid="header-subtitle" className="text-white text-muted">
				{subtitle}
			</h4>
			<p data-testid="header-error" hidden={!showError}>
				This is an error
			</p>
		</div>
	);
};

export default Header;
