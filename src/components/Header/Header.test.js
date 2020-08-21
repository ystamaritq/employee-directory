import Header from "./Header";
import React from "react";

expect(getByTestId("parent")).toContainHTML(
	'<span data-testid="child"></span>'
);
