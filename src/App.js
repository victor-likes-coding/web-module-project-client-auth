import React, { createContext } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AddFriend, FriendsList, Login, Logout, Nav, PrivateRoute } from "./components/";
import { useAuth } from "./hocs/useAuth";

export const AuthContext = createContext();

function App() {
    const { token, login, logout } = useAuth();
    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            <div className="App">
                <Nav />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Login />}
                    />

                    <Route
                        path="/login"
                        element={<Login />}
                    />
                    <Route
                        exact
                        path="/logout"
                        element={<Logout />}
                    />

                    <Route
                        exact
                        path="/friends"
                        element={<PrivateRoute element={<FriendsList />} />}
                    />

                    <Route
                        exact
                        path="/friends/add"
                        element={<PrivateRoute element={<AddFriend />} />}
                    />
                </Routes>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
