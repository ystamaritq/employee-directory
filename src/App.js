import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import SearchTable from "./components/SearchTable/SearchTable";
import testData from "./test-data.json";

function App() {
	const data = testData.results;
	return (
		<div className="App">
			<Header
				title="Employee Directory"
				subtitle="Click in the arrow to filter the results"
			/>
			<Search name="" onValueChange={(value) => console.log(value)} />
			<SearchTable data={data} />
		</div>
	);
}

export default App;
