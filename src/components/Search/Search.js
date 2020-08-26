import React from "react";
import { Form, Col } from "react-bootstrap";
import "./style.css";

const Search = ({ value, onValueChange }) => {
	return (
		<Form className="bg-light" onSubmit={(e) => e.preventDefault()}>
			<Form.Row>
				<Col className="col-lg-4 col-sm-12 m-auto p-4 ">
					<Form.Control
						type="text"
						data-testid="search-name-field"
						placeholder="Search Employee by Name"
						value={value}
						onChange={(e) => {
							onValueChange(e.target.value);
						}}
					/>
				</Col>
			</Form.Row>
		</Form>
	);
};

export default Search;
