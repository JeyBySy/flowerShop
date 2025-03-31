import { fetchCart } from '../services/apiService';
import { CartType, CartContextType } from '../types/cartTypes';
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from './AuthContext';

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { user } = useAuth();
    const [cart, setCart] = useState<CartType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedCarts, setSelectedCarts] = useState<string[]>([]);

    useEffect(() => {
        if (!user) {
            setLoading(false);
            return;
        }
        const loadCart = async () => {
            setLoading(true);
            try {
                const cartResponse = await fetchCart();
                console.log(cartResponse);

                if (cartResponse?.success) {
                    setCart(cartResponse?.data);
                }
            } catch (error) {
                console.error("Error loading cart:", error);
            } finally {
                setLoading(false);
            }
        };

        loadCart();
    }, [user]);

    // const addToCart = async (item: { productId: string; quantity: number }) => {
    //     if (!user) return;
    //     try {
    //         const response = await addItemToCart(user.id, item);
    //         if (response) {
    //             setCart(response);
    //         }
    //     } catch (error) {
    //         console.error("Error adding item to cart:", error);
    //     }
    // };

    return (
        <CartContext.Provider value={{ cart, loading, selectedCarts, setSelectedCarts }}>
            {children}
        </CartContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within a CartProvider");
    return context;
};
