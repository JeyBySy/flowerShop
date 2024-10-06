import { useState } from 'react';
import './auth.css'
import { User } from 'lucide-react';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
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
