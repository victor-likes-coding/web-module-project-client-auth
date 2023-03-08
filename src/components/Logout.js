import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

export default function Logout() {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        logout();
        navigate("/");
    }, [logout, navigate]);
    return <div>Logging out...</div>;
}
