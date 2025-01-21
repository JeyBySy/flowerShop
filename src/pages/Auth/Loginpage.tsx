import { motion } from 'framer-motion'
import ShopHeader from '../../components/Global/ShopHeader';
import LoginForm from './LoginForm';

const LoginPage: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex items-center justify-center bg-brilliant-rose-100">
            <div className="w-full max-w-md">
                <div className="flex w-full mb-5 justify-center">
                    <a href="/" className="flex items-center text-xl">
                        <ShopHeader width={50} height={50} />
                    </a>
                </div>
                <div className="bg-blue-50 p-5 rounded">
                    <LoginForm />
                </div>
            </div>
        </motion.div>
    )
};

export default LoginPage;
