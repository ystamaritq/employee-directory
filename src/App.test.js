import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
	const { baseElement } = render(<App />);
	expect(baseElement).toBeInTheDocument();
	expect(baseElement).toBeVisible();
	expect(baseElement).toContainElement(screen.getByTestId("header"));
});
