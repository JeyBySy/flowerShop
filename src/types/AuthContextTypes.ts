export interface User {
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

export interface AuthContextType {
    user: User | null;
    token: string | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (first_name: string, last_name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
}