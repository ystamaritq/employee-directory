import React from "react";
import { Table, Image } from "react-bootstrap";
import "./style.css";

const SearchTable = ({ data }) => {
	console.log(data);
	return (
		<div>
			<Table responsive="sm">
				<thead>
					<tr>
						<th className="custom-style-table-text">Image</th>
						<th className="custom-style-table-text">Name</th>
						<th className="custom-style-table-text">Phone</th>
						<th className="custom-style-table-text">Email</th>
						<th className="custom-style-table-text">DBO</th>
					</tr>
				</thead>
				<tbody>
					{data.map((user, i) => (
						<tr key={i}>
							<td>
								<Image thumbnail src={user.picture.thumbnail} />
							</td>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default SearchTable;
