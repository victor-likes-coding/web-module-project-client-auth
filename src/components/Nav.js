import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../App";

const Nav = () => {
    const { token } = useContext(AuthContext);
    return (
        <header className="nav">
            <h1 className="nav__title">FRIENDS DATABASE</h1>
            <nav className="nav__links">
                {!token && <NavLink to="/">LOGIN.</NavLink>}
                {token && <NavLink to="/friends">FRIENDLIST.</NavLink>}
                {token && <NavLink to="/add">ADDFRIEND.</NavLink>}
                {token && <NavLink to="/logout">LOGOUT</NavLink>}
            </nav>
        </header>
    );
};

export default Nav;
