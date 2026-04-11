import { Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

function PublicRoute({ children }) {
    const accessToken = useAuthStore((state) => state.accessToken);
    const user = useAuthStore((state) => state.user);

    if (accessToken && user?.role === "ADMIN") {
        return <Navigate to="/dashboard" replace />;
    }

    if (accessToken && user?.role === "USER") {
        return <Navigate to="/dashboard" replace />;
    }

    return children;
}

export default PublicRoute;