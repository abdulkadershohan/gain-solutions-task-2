import { Navigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import useAuth from "../hook/useAuth";
import Footer from "../sections/footer/Footer";

export default function PrivateRoute({ children }) {
    const isLoggedIn = useAuth();

    return isLoggedIn ? <div>
        <Navbar />
        {children}
        <Footer />
    </div> : <Navigate to="/login" />;
}