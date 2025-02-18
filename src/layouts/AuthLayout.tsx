import { Outlet } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";

const AuthLayout: React.FC = () => {
    return (
        <div className='min-h-screen'>
            <Outlet />
            <Analytics />
        </div>
    );
};

export default AuthLayout;