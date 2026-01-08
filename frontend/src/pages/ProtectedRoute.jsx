import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");

    // Jika tidak ada token, paksa ke halaman login
    if (!token) {
        return <Navigate to="/login" />;
    }
    return children;
};

export default ProtectedRoute;
