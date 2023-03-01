import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login, Nav } from './components/';

function App() {
	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route exact path="/" element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;
