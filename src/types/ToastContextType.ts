export interface ToastContextType {
    toasts: Toast[];
    addToast: (toast: Toast) => void;
    removeToast: (index: number) => void;
}

export type Toast = {
    message: string;
    type: 'success' | 'error' | 'info';
};
