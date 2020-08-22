import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import SearchTable from "./components/SearchTable/SearchTable";
import axios from "axios";

const App = () => {
	const [filteredUsers, setFilteredUsers] = useState([]);
	const [allUsers, setAllUsers] = useState([]);

	const loadUsersFromApi = async () => {
		var config = {
			method: "get",
			url: `https://randomuser.me/api/?results=200&nat=us`,
		};

		await axios(config)
			.then(function (res) {
				setFilteredUsers(res.data.results);
				setAllUsers(res.data.results);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const filterUsersbyName = (search) => {
		// convert input to lower case for easier match
		const searchLowerCase = search.toLocaleLowerCase();
		// utility function to get a users full name
		const fullNameLowerCase = (user) =>
			(user.name.first + " " + user.name.last).toLocaleLowerCase();
		// filter users from All User availables
		let filteredUsers = allUsers.filter((u) =>
			fullNameLowerCase(u).includes(searchLowerCase)
		);
		setFilteredUsers(filteredUsers);
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
			<Search name="" onValueChange={(search) => filterUsersbyName(search)} />
			<SearchTable data={filteredUsers} />
		</div>
	);
};
export default App;
