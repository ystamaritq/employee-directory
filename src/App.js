import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

function App() {
	return (
		<div className="App">
			<Header
				title="Employee Directory"
				subtitle="Click in the arrow to filter the results"
			/>
			<Search name="Yadira" />
		</div>
	);
}

export default App;
