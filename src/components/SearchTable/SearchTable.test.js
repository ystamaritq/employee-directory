// setup for testing
// import dependecies
import React from "react";
// import react-testing methods (destructuring the methods in the library)
import { render, fireEvent } from "@testing-library/react";
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import SearchTable from "./SearchTable";
import data from "./../../test-data.json";

describe("table", () => {
	test("Table is in the document", async () => {
		const { baseElement } = render(<SearchTable data={data.results} />);
		expect(baseElement).toBeInTheDocument();
		expect(baseElement).toBeVisible();
	});
});
