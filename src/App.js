import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import SearchTable from "./components/SearchTable/SearchTable";
import axios from "axios";

const App = () => {
	const [users, setUsers] = useState([]);
	// const [search, setSearch] = useState('');

	const loadUsersFromApi = async () => {
		var config = {
			method: "get",
			url: `https://randomuser.me/api/?results=200&nat=us`,
		};

		await axios(config)
			.then(function (res) {
				setUsers(res.data.results);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	useEffect(() => {
		loadUsersFromApi();
	}, []);

	return (
		<div className="App">
			<Header
				title="Employee Directory"
				subtitle="Click in the arrow to filter the results"
			/>
			<Search name="" onValueChange={(value) => console.log(value)} />
			<SearchTable data={users} />
		</div>
	);
};
export default App;
