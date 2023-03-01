import React, { useState } from 'react';

const initialState = {
	username: '',
	password: '',
};

const Login = (props) => {
	const [state, setState] = useState(initialState);

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(state);
	};

	return (
		<form className="login" onSubmit={handleSubmit}>
			<h2>LOGIN</h2>
			<label htmlFor="username">USERNAME</label>
			<input
				data-testid="username"
				type="text"
				id="username"
				name="username"
				value={state.username}
				onChange={handleChange}
			/>

			<label htmlFor="password">PASSWORD</label>
			<input
				data-testid="password"
				type="text"
				id="password"
				name="password"
				value={state.password}
				onChange={handleChange}
			/>

			<button type="submit">SUBMIT</button>
		</form>
	);
};

export default Login;
