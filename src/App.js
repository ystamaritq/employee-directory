import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
	return (
		<div className="App">
			<Header
				title="Employee Directory"
				subtitle="Click in the arrow to filter the results"
			/>
		</div>
	);
}

export default App;
