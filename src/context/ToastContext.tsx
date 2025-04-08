import React, { createContext, useState, ReactNode } from 'react';
import { ToastContextType, Toast } from '../types/ToastContextType';

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = (toast: Toast, duration = 3000) => {
        setToasts(prev => {
            const updatedToasts = [toast, ...prev];

            setTimeout(() => {
                setToasts(current => current.length > 0 ? current.slice(1) : []); // Remove the first toast
            }, duration);

            return updatedToasts;
        });
    };


    const removeToast = (indexToRemove: number) => {
        setToasts(prevToasts => {
            if (indexToRemove < 0 || indexToRemove >= prevToasts.length) {
                return prevToasts; // Prevent out-of-bounds removal
            }
            return prevToasts.filter((_, i) => i !== indexToRemove);
        });
    };

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
            {children}
        </ToastContext.Provider>
    );
};

export { ToastContext }