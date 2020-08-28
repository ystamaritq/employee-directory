import React from "react";
import { Table, Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const SearchTable = ({ data, asc, sort }) => {
	return (
		<div>
			<Table className="table responsive table-striped table-bordered table-sm">
				<thead>
					<tr>
						<th className="custom-style-table-text">Image</th>
						<th className="custom-style-table-text" onClick={sort}>
							Name{" "}
							{data.length && asc ? (
								<OverlayTrigger
									placement="bottom"
									overlay={<Tooltip id="tooltip-asc">Asc</Tooltip>}
								>
									<FontAwesomeIcon icon={faArrowDown} size="sm" />
								</OverlayTrigger>
							) : data.length ? (
								<OverlayTrigger
									placement="bottom"
									overlay={<Tooltip id="tooltip-desc">Desc</Tooltip>}
								>
									<FontAwesomeIcon icon={faArrowUp} size="sm" />
								</OverlayTrigger>
							) : (
								""
							)}
						</th>
						<th className="custom-style-table-text">Phone</th>
						<th className="custom-style-table-text">Email</th>
						<th className="custom-style-table-text">DBO</th>
					</tr>
				</thead>
				<tbody>
					{data.length ? (
						data.map((user, i) => (
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
									<div className="text-custom-color">
										{new Date(user.dob.date).toLocaleDateString()}
									</div>
								</td>
							</tr>
						))
					) : (
						<tr>
							<td>
								<span className="text-muted">no user image result</span>
							</td>
							<td>
								<span className="text-muted">no user name result</span>
							</td>
							<td>
								<span className="text-muted">no user phone result</span>
							</td>
							<td>
								<span className="text-muted">no user email result</span>
							</td>
							<td>
								<span className="text-muted">no user dbo result</span>
							</td>
						</tr>
					)}
				</tbody>
			</Table>
		</div>
	);
};

export default SearchTable;
