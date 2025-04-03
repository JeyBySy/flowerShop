import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import axios from 'axios';
import { fetchLogin, fetchLogout, fetchUser } from '../services/apiService';  // Importing the fetchUser function
import { AuthContextType, User } from '../types/AuthContextTypes';
import { useNavigate } from "react-router-dom";

// Create the AuthContext with a default value of null
const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
    children: ReactNode; // Correctly typing 'children' as 'ReactNode'
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [authLoading, setAuthLoading] = useState<boolean>(true);
    const [authError, setAuthError] = useState<string>("")
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await fetchUser();
                if (userData?.success) {
                    setUser(userData);
                }

                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                setUser(null);
            } finally {
                setAuthLoading(false);
            }
        };

        fetchUserData();
    }, []);


    const login = async (email: string, password: string) => {
        try {
            await fetchLogin(email, password);
            const userDetails = await fetchUser();
            setUser(userDetails);

        } catch (error) {
            console.error("Login failed:", error);
            throw new Error("Invalid email or password");
        }
    };

    const register = async (first_name: string, last_name: string, email: string, password: string) => {
        try {
            const response = await axios.post('/api/auth/register', { first_name, last_name, email, password });
            const { token, user } = response.data;
            localStorage.setItem('accessToken', token); // Ensure this is 'accessToken', not 'token'

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

    const logout = async () => {
        try {
            const response = await fetchLogout();
            if (response?.success) {
                setUser(null); // Reset user state
                localStorage.clear(); // Ensure all authentication data is removed
                navigate("/login");
            }
        } catch (error) {
            setAuthError("Logout failed. Please try again.");
            console.error("Logout failed:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, authLoading, login, register, logout, authError }}>
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


