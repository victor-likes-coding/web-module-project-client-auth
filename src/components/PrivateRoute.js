import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../App";

const PrivateRoute = ({ element }) => {
    const { token } = useContext(AuthContext);
    return token ? element : <Navigate to="/" />;
};

export default PrivateRoute;
