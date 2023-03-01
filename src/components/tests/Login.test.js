import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Login } from '../';

test('It renders without crashing', () => {
	render(<Login />);
});

test('Login renders login on route /', () => {
	const history = createMemoryHistory();
	history.push('/');

	render(
		<Router history={history}>
			<Routes>
				<Route exact path="/" element={<Login />} />
			</Routes>
		</Router>
	);

	expect(screen.getByText('LOGIN')).toBeVisible();
});

test('Login form displays typed value correctly', () => {
	render(<Login />);

	const username = screen.getByTestId('username');
	const password = screen.getByTestId('password');

	fireEvent.change(username, { target: { value: 'test' } });
	fireEvent.change(password, { target: { value: 'test' } });

	expect(username.value).toBe('test');
	expect(password.value).toBe('test');
});
