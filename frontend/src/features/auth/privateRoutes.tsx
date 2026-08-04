import { Navigate, Outlet } from "react-router-dom";
import { getUser } from "./storage";

const PrivateRoutes = () => {
    const auth = getUser();

    if (!auth) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default PrivateRoutes;