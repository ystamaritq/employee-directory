import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import "./style.css";

const Search = ({ name, displayError = false }) => {
	const [showError, setShowerror] = useState(displayError);

	return (
		<Form className="bg-light">
			<Form.Row>
				<Col className="col-lg-4 col-sm-12 m-auto p-4 ">
					<Form.Control
						type="text"
						data-testid="search-name"
						placeholder="Search Employee by Name"
						defaultValue={name}
						onClick={() => (!name ? setShowerror(!showError) : null)}
					/>
				</Col>
				<p data-testid="search-error" hidden={!showError}>
					This is an error
				</p>
			</Form.Row>
		</Form>
	);
};

export default Search;
