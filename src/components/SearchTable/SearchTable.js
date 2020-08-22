import React from "react";
import { Table, Image } from "react-bootstrap";
import "./style.css";

const SearchTable = ({ data, asc, sort }) => {
	return (
		<div>
			<Table responsive="sm">
				<thead>
					<tr>
						<th className="custom-style-table-text">Image</th>
						<th className="custom-style-table-text" onClick={sort}>
							Name {asc ? "(asc)" : "(desc)"}
						</th>
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
							<td>
								<div className="text-custom-color">
									{user.name.first + " " + user.name.last}
								</div>
							</td>
							<td>
								<div className="text-custom-color">{user.phone}</div>
							</td>
							<td>
								<div className="text-custom-color">{user.email}</div>
							</td>
							<td>
								<div className="text-custom-color">{user.dob.date}</div>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default SearchTable;
