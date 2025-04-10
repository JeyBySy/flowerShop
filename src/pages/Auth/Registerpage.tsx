
import ShopHeader from '../../components/Global/ShopHeader';
import { motion } from 'framer-motion'
import RegisterForm from './RegisterForm';

const RegisterPage: React.FC = () => {
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
                    <RegisterForm />
                    <br />
                    <hr />
                    <br />
                    <div className='flex items-center justify-center gap-2'>
                        <a href="/rauthkey">
                            <div className="w-full items-center flex bg-[#375567] text-white p-2 rounded-md hover:bg-[#3e667c] transition">
                                <img src="./assets/rauthkey.png" alt="" className='w-[25px] h-[25px]' />
                                RauthKey
                            </div>
                        </a>
                        <a href="/google">
                            <div className="w-full items-center flex bg-[#375567] text-white p-2 rounded-md hover:bg-[#3e667c] transition">
                                <img src="./assets/rauthkey.png" alt="" className='w-[25px] h-[25px]' />
                                Google
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default RegisterPage;
