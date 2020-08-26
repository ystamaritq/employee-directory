import React from "react";
import { Form, Col } from "react-bootstrap";
import "./style.css";

const Search = ({ value, onValueChange }) => {
	return (
		<Form className="bg-light">
			<Form.Row>
				<Col className="col-lg-4 col-sm-12 m-auto p-4 ">
					<Form.Control
						type="text"
						data-testid="search-name-field"
						placeholder="Search Employee by Name"
						value={value}
						onChange={(e) => {
							e.preventDefault();
							onValueChange(e.target.value);
						}}
					/>
				</Col>
			</Form.Row>
		</Form>
	);
};

export default Search;
