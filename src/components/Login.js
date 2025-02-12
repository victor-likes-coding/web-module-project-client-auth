import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../App";

const initialState = {
    username: "",
    password: "",
};

const Login = () => {
    const { login, token } = useContext(AuthContext);
    const [state, setState] = useState(initialState);

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(() => setState(initialState))(state);
    };

    return token ? (
        <Navigate to="/friends" />
    ) : (
        <form
            className="login"
            onSubmit={handleSubmit}>
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
                type="password"
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
