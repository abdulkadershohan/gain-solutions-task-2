import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from "../pages/auth/login/Login";
import Registration from "../pages/auth/registration/Registration";
import Home from "../pages/home/Home";

export default function UserRoutes() {
    return (
        <Router>
            <Routes>

                <Route
                    path="/login"
                    element={
                        // <StudentPublicRoute >
                        //     <StudentLogin />
                        // </StudentPublicRoute>
                        <Login />
                    }

                />
                <Route
                    path="/registration"
                    element={
                        // <StudentPublicRoute >
                        //     <StudentReistration />
                        // </StudentPublicRoute>
                        <Registration />
                    }
                />

                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}
