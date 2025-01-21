import { useState } from 'react';
import './auth.css'
import { Eye, EyeOff } from 'lucide-react';

const RegisterForm: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate password match
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Handle register logic here
        console.log({ firstName, lastName, email, password });
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="firstName" className="block font-medium text-gray-700">First Name</label>
                    <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
                </div>

                <div>
                    <label htmlFor="lastName" className="block font-medium text-gray-700">Last Name</label>
                    <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
                </div>

                <div>
                    <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
                </div>

                {/* Password Field */}
                <div className="relative">
                    <label htmlFor="password" className="block font-medium text-gray-700">Password</label>
                    <input type={showPassword ? "text" : "password"} id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-7 text-gray-500">
                        {showPassword ? <Eye color="#000000" width={20} height={20} /> : <EyeOff color="#000000" width={20} height={20} />}
                    </button>
                </div>

                {/* Confirm Password Field */}
                <div className="relative">
                    <label htmlFor="confirmPassword" className="block  font-medium text-gray-700">Confirm Password</label>
                    <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-7 text-gray-500">
                        {showConfirmPassword ? <Eye color="#000000" width={20} height={20} /> : <EyeOff color="#000000" width={20} height={20} />}
                    </button>
                </div>
                <a href="/login">
                    <p className='text-sm  py-1 underline cursor-pointer w-full text-end'>
                        Already registered?
                    </p>
                </a>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition">
                    Register
                </button>
            </form>


        </>

    );
};

export default RegisterForm;
