import { Navigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import useAuth from "../hook/useAuth";

export default function PrivateRoute({ children }) {
    const isLoggedIn = useAuth();

    return isLoggedIn ? <div>
        <Navbar />
        {children}
    </div> : <Navigate to="/login" />;
}