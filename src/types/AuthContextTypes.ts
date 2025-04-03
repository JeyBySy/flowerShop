export interface User {
    success: boolean;
    userData: {
        id: string;
        first_name: string;
        last_name: string;
        email: string;
        role: 'user' | 'admin' | 'guest';
        isVerified: boolean;
    }
}

export interface AuthLoginProps{
    success: boolean;
    token:string
}

export interface AuthContextType {
    user: User | null;
    authError:string;
    authLoading: boolean;    
    login: (email: string, password: string) => Promise<void>;
    register: (first_name: string, last_name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
}