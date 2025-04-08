import { Navigate, Outlet } from "react-router-dom";
import { motion } from 'framer-motion'
import { useAuth } from "../hooks/useAuth";

const ProtectedLayout = () => {
    const { user, authLoading } = useAuth();

    if (authLoading) {
        return <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >Loading...</motion.div>; // Show a loading state while checking auth
    }

    return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedLayout;
