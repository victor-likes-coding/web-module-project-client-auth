import React, { useState } from 'react';
import { withAxios } from '../hocs/withAxios';

const initialState = {
	username: '',
	password: '',
};

const Login = (props) => {
	const [state, setState] = useState(initialState);
	const axios = withAxios();

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		(async () => {
			const {
				data: { token },
			} = await axios.post('/login', state);

			localStorage.setItem('token', token);

			setState(initialState);
		})();
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
