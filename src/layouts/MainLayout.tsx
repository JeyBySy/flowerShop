import { Outlet } from 'react-router-dom';
import Navbar from '../components/Global/Navbar';
import Footer from '../components/Global/Footer';

const MainLayout: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className='min-h-screen'>
                <Outlet /> {/* This will render the child route component */}
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;