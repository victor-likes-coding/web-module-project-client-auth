import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
	return (
		<header className="nav">
			<h1 className="nav__title">FRIENDS DATABASE</h1>
			<nav className="nav__links">
				<NavLink to="/">LOGIN.</NavLink>
				<NavLink to="/friends">FRIENDLIST.</NavLink>
				<NavLink to="/add">ADDFRIEND.</NavLink>
				<NavLink to="/logout">LOGOUT</NavLink>
			</nav>
		</header>
	);
};

export default Nav;
