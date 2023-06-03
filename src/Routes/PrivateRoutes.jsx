import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "flowbite-react";


const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <div className="text-center">
            <Spinner aria-label="Center-aligned spinner example" />
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login' replace></Navigate>;
};

export default PrivateRoutes;