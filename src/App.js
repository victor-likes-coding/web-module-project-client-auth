import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login, Logout, Nav } from './components/';

function App() {
	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route exact path="/logout" element={<Logout />} />
			</Routes>
		</div>
	);
}

export default App;
