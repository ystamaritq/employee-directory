// setup for testing
// import dependecies
import React from "react";
// import react-testing methods (destructuring the methods in the library)
import { render, fireEvent } from "@testing-library/react";
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import Search from "./Search";

describe("search", () => {
	test("verify input is given", async () => {
		const nameValue = "input name given to search";

		const { baseElement, getByTestId } = render(<Search name={nameValue} />);
		expect(baseElement).toBeInTheDocument();
		expect(baseElement).toBeVisible();
		expect(getByTestId("search-name")).not.toBeNull();
	});
});
