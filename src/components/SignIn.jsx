import React, { useState, useContext } from 'react';
import { UserContext } from './zadanie4';

export default function SignIn(props) {
	const [credentials, setCredentials] = useState({
		username: ''
	});

	const user = useContext(UserContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		let val = { ...credentials };
		if (!val.username) {
			val.username = 'Anonymous';
		}

		user.setUser(val);
		props.history.push('/z4/posts');
	};

	const handleUsernameChange = (e) => {
		let inputValue = e.target.value;
		setCredentials((prevState) => {
			return {
				...prevState,
				username: inputValue
			};
		});
	};

	return (
		<div>
			<h1>Przedstaw się! </h1>
			<form className="column" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Nazwa uzytkownika, która będzie wyświetlana obok twoich postów"
					onChange={handleUsernameChange}
					value={credentials.username}
				/>
				<input className="btn btn-lg" type="submit" />
			</form>
		</div>
	);
}
