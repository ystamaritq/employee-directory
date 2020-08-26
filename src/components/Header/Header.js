import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./style.css";

const Header = ({ title, subtitle, displayError = false }) => {
	const [showError, setShowError] = useState(displayError);

	return (
		<div className="p-3 custom-style" data-testid="header">
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
