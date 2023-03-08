import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../App";

const initialState = {
    name: "",
    email: "",
};

const AddFriend = () => {
    const [state, setState] = useState(initialState);

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form
            className="add-friend"
            onSubmit={handleSubmit}>
            <h2>ADD FRIEND</h2>
            <label htmlFor="name">FRIEND NAME</label>
            <input
                data-testid="name"
                type="text"
                id="name"
                name="name"
                value={state.name}
                onChange={handleChange}
            />

            <label htmlFor="email">FRIEND EMAIL</label>
            <input
                data-testid="email"
                type="text"
                id="email"
                name="email"
                value={state.email}
                onChange={handleChange}
            />

            <button type="submit">SUBMIT</button>
        </form>
    );
};

export default AddFriend;
