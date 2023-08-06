import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import useAuthCheck from "../hook/useAuthCheck";
import Login from "../pages/auth/login/Login";
import Registration from "../pages/auth/registration/Registration";
import EditEvents from "../pages/editEvents/EditEvents";
import Home from "../pages/home/Home";
import NewEvents from "../pages/newEvents/NewEvents";
import NotFound from "../pages/notFound/NotFound";
import UserProfile from "../pages/profile/UserProfile";
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
                <Route path="/new-event" element={<PrivateRoute><NewEvents /></PrivateRoute>} />
                <Route path="/edit-event/:id" element={<PrivateRoute><EditEvents /></PrivateRoute>} />

                <Route path="/profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}
