import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { userInfo } from '../utils/user';

export function Home() {
	const { user, setUser } = useContext(UserContext);

	return (
		<div>
			<h2>Home</h2>
			<div>Welcome!</div>
			{user ? (
				<div>
					<div>{user.username}</div>
					{/* This will logout the user */}
					<button onClick={() => setUser(null)}>LOGOUT</button>{' '}
				</div>
			) : (
				/** In a larger app, userInfo would be pulled from a database */
				<button onClick={async () => setUser(userInfo)}>LOGIN</button>
			)}
		</div>
	);
}
