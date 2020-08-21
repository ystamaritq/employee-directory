// setup for testing
// import dependecies
import React from "react";
// import react-testing methods (destructuring the methods in the library)
import { render, screen, fireEvent } from "@testing-library/react";
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";

describe("header", () => {
	test("loads header when values are given", async () => {
		const titleValue = "test title";
		const subTitleValue = "test sub title";
		const { baseElement, getByTestId, getByText } = render(
			<Header title={titleValue} subtitle={subTitleValue} />
		);
		expect(baseElement).toBeInTheDocument();
		expect(baseElement).toBeVisible();
		expect(getByTestId("header-title")).toHaveClass("text-white");
		expect(getByTestId("header-title")).toHaveTextContent(titleValue);
		expect(getByText(titleValue)).toHaveClass("text-white");
		expect(getByText(titleValue)).toBeVisible();
		expect(getByText(subTitleValue)).toHaveClass("text-white");
		expect(getByTestId("header-subtitle")).toHaveTextContent(subTitleValue);
		expect(getByTestId("header-error")).not.toBeVisible();
		fireEvent.click(getByTestId("header-title"));
		expect(getByTestId("header-error")).toBeVisible();
		fireEvent.click(getByTestId("header-title"));
		expect(getByTestId("header-error")).not.toBeVisible();
	});
});
