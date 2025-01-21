import React, { useState } from 'react'
import ShopHeader from '../../components/Global/ShopHeader';

const Forgetpage: React.FC = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle forget password logic here
    };
    return (

        <div className="min-h-screen flex items-center justify-center bg-brilliant-rose-100">
            <div className="w-full max-w-md">
                <div className="flex w-full mb-5 justify-center">
                    <a href="/" className="flex items-center text-xl">
                        <ShopHeader width={50} height={50} />
                    </a>
                </div>
                <div className="bg-blue-50 p-5 rounded">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <p className="text-sm text-gray-500 mb-1">
                                <span className='text-red-500'>NOTE:</span>  Please enter a valid email address to receive password reset instructions.
                            </p>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
                        </div>

                        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition">
                            Send
                        </button>

                    </form>
                </div>

            </div>
        </div>


    )
};

export default Forgetpage;
