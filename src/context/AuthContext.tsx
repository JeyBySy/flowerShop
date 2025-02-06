import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import axios from 'axios';
import { fetchLogin, fetchUser } from '../services/apiService';  // Importing the fetchUser function

// Define the User type
interface User {
    success: boolean;
    userData: {
        id: string;
        first_name: string;
        last_name: string;
        email: string;
        role: 'user' | 'admin';
        isVerified: boolean;
    }
}

// Define the AuthContext type
interface AuthContextType {
    user: User | null;
    token: string | null;
    loading: boolean;

    login: (email: string, password: string) => Promise<void>;
    register: (first_name: string, last_name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
}

// Create the AuthContext with a default value of null
const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: ReactNode; // Correctly typing 'children' as 'ReactNode'
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(localStorage.getItem('accessToken'));
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        if (token) {
            fetchUser(token)
                .then((userData) => {
                    setUser(userData);
                    setLoading(false);
                })
                .catch(() => {
                    setUser(null);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [token]);

    const login = async (email: string, password: string) => {
        try {
            const response = await fetchLogin(email, password);

            const { token } = response;
            const response_userDetails = await fetchUser(token)
            const { userData } = response_userDetails

            localStorage.setItem('accessToken', token); // Ensure this is 'accessToken', not 'token'

            setToken(token);
            setUser(userData);
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                // AxiosError specific handling
                console.error('Login failed:', error.response?.data?.message || error.message);
                throw new Error(error.response?.data?.message);
            }

            // General error handling (for non-Axios errors)
            console.error('Login failed:', (error as Error).message);
            throw new Error('Login failed');
        }
    };

    const register = async (first_name: string, last_name: string, email: string, password: string) => {
        try {
            const response = await axios.post('/api/auth/register', { first_name, last_name, email, password });
            const { token, user } = response.data;
            localStorage.setItem('accessToken', token); // Ensure this is 'accessToken', not 'token'
            setToken(token);
            setUser(user);
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                // AxiosError specific handling
                console.error('Registration failed:', error.response?.data?.message || error.message);
                throw new Error(error.response?.data?.message || 'Registration failed');
            }

            // General error handling (for non-Axios errors)
            console.error('Registration failed:', (error as Error).message);
            throw new Error('Registration failed');
        }
    };

    const logout = () => {
        localStorage.removeItem('accessToken');
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    )
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};


