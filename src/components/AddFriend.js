import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { withAxios } from "../hocs/withAxios";

const initialState = {
    name: "",
    email: "",
};

const AddFriend = () => {
    const [state, setState] = useState(initialState);
    const axios = withAxios();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // post data to /api/friends
        // reset state
        // redirect to /friends

        (async () => {
            try {
                await axios.post("/friends", state);
                setState(initialState);
                navigate("/friends", { replace: true });
            } catch (err) {
                console.log(err);
            }
        })();
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
