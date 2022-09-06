import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export function About() {
	const { user } = useContext(UserContext);

	if (!user) {
		return <div>There is no user information. Return Home and login.</div>;
	} else {
		return (
			<div>
				<h2>About</h2>
				<table>
					<tr>
						<th>User id#</th>
						<th>username</th>
						<th>email</th>
					</tr>
					<tr>
						<td>{user.id}</td>
						<td>{user.username}</td>
						<td>{user.email}</td>
					</tr>
				</table>
			</div>
		);
	}
}
