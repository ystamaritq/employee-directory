import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import SearchTable from "./components/SearchTable/SearchTable";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
	const [filteredUsers, setFilteredUsers] = useState([]);
	const [allUsers, setAllUsers] = useState([]);
	const [sortAsc, setSortAsc] = useState(true);

	/**
	 * Utility function to sort array of users
	 * @param {*} users original array
	 * @param {*} desc sort descending
	 */
	const sortUsers = (users, asc) => {
		users.sort((a, b) =>
			fullNameLowerCase(a).localeCompare(fullNameLowerCase(b))
		);
		if (!asc) users.reverse();
		return users;
	};

	/**
	 * Utility function to get a users full name
	 * @param {*} user the user
	 */
	const fullNameLowerCase = (user) =>
		(user.name.first + " " + user.name.last).toLocaleLowerCase();

	/**
	 * Load users from `randomuser` API
	 */
	const loadUsersFromApi = async () => {
		var config = {
			method: "get",
			url: `https://randomuser.me/api/?results=200&nat=us`,
		};

		await axios(config)
			.then(function (res) {
				let users = res.data.results;
				users = sortUsers(users, sortAsc);
				setFilteredUsers(users);
				setAllUsers(users);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	/**
	 * Filter users by the name, respect previous sorting order
	 * @param {*} search
	 */
	const filterUsersbyName = (search) => {
		// convert input to lower case for easier match
		const searchLowerCase = search.toLocaleLowerCase();
		// filter users from All User availables
		let filteredUsers = allUsers.filter((u) =>
			fullNameLowerCase(u).includes(searchLowerCase)
		);
		setFilteredUsers(sortUsers(filteredUsers, sortAsc));
	};

	const sortFilteredUsersByName = () => {
		let order = !sortAsc;
		setSortAsc(order);
		setFilteredUsers(sortUsers(filteredUsers, order));
	};

	useEffect(() => {
		loadUsersFromApi();
	}, []);

	return (
		<Container fluid className="App px-0">
			<Row>
				<Col>
					<Header
						title="Employee Directory"
						subtitle="Click in the arrow to sort the users by name"
					/>
					<Search
						name=""
						onValueChange={(search) => filterUsersbyName(search)}
					/>

					<SearchTable
						asc={sortAsc}
						data={filteredUsers}
						sort={() => sortFilteredUsersByName()}
					/>
				</Col>
			</Row>
		</Container>
	);
};
export default App;
