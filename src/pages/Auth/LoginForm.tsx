import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './auth.css'
import { User } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/useToast';


const LoginForm: React.FC = () => {
    const { login } = useAuth();
    const { addToast } = useToast(); // 🔥 use toast hook
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage(''); // Clear previous errors
        try {
            await login(email, password);

            addToast({
                message: 'Logged in successfully!',
                type: 'success'
            });

            navigate(location.state?.from || "/", { replace: true });
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            addToast({
                message: 'Login failed. Please check your credentials.',
                type: 'error'
            });
            setErrorMessage('Invalid email or password. Please try again.');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                    <div className="text-red-600 text-sm mt-2 border text-center bg-red-200 p-4">{errorMessage}</div>
                )}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" value={email} placeholder='Email' name='email' onChange={(e) => setEmail(e.target.value)} className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password" placeholder='Password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
                </div>
                <div className='flex justify-evenly items-center'>
                    <div className='flex-grow w-full'>
                        <input type="checkbox" name="rememberme" id="remembermeId" className='mr-2' />
                        <label htmlFor="remembermeId" className='text-xs '>Remember Me</label>
                    </div>
                    <div className='flex-grow w-full text-end text-xs cursor-pointer'>
                        <a href="/forget-password">
                            <span>Forget Password?</span>
                        </a>
                    </div>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition">
                    Login
                </button>
            </form>
            <br />
            <hr />
            <br />
            <div className='flex justify-center items-center gap-2'>
                <a href="/register">
                    <div className="w-full items-center flex bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition">
                        <User color="#ffff" width={20} height={20} />
                        Register
                    </div>
                </a>
                <a href="/rauthkey">
                    <div className="w-full items-center flex bg-[#375567] text-white p-2 rounded-md hover:bg-[#3e667c] transition">
                        <img src="./assets/rauthkey.png" alt="" className='w-[25px] h-[25px]' />
                        RauthKey
                    </div>
                </a>
                <a href="/google">
                    <div className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition">
                        Google
                    </div>
                </a>
            </div>
        </>
    );
};

export default LoginForm;
