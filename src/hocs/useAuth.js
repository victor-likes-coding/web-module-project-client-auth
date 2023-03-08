import { useState } from "react";
import { withAxios } from "./withAxios";

export const useAuth = () => {
    const axios = withAxios();
    const [token, setToken] = useState(localStorage.getItem("token") || "");

    const login = (clearFormFn) => (data) => {
        (async () => {
            const {
                data: { token },
            } = await axios.post("/login", data);

            localStorage.setItem("token", token);
            setToken(token);
            clearFormFn();
        })();
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
    };

    return { token, login, logout };
};
