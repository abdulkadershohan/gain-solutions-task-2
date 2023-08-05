import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import useAuthCheck from "../hook/useAuthCheck";
import Login from "../pages/auth/login/Login";
import Registration from "../pages/auth/registration/Registration";
import Home from "../pages/home/Home";
import { Loading } from "../utils";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function UserRoutes() {
    const authChecked = useAuthCheck();

    return !authChecked ? (
        <div>
            <Loading type="authChackd" />
        </div>
    ) : (
        <Router>
            <Routes>

                <Route
                    path="/login"
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }

                />
                <Route
                    path="/registration"
                    element={
                        <PublicRoute>
                            <Registration />
                        </PublicRoute>

                    }
                />

                <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            </Routes>
        </Router>
    )
}
