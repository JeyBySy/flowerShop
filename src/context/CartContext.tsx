import { fetchCart } from '../services/apiService';
import { CartType } from '../types/cartTypes';
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from './AuthContext';

interface CartContextType {
    cart: CartType | null;
    loading: boolean;
    // addToCart: (product: ProductType) => void;
    // removeFromCart: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { user } = useAuth();
    const [cart, setCart] = useState<CartType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!user) {
            setLoading(false);
            return;
        }


        const loadCart = async () => {
            setLoading(true);
            try {
                const { data } = await fetchCart();
                console.log(data);

                setCart(data);
            } catch (error) {
                console.error("Error loading cart:", error);
            } finally {
                setLoading(false);
            }
        };

        loadCart();
    }, [user]);

    // const addToCart = async (product: ProductType) => {
    //     try {
    //         await addItemToCart({ productId: product.id, quantity: 1 });

    //         setCart((prevCart) => [...prevCart, product]);
    //     } catch (error) {
    //         console.error("Error adding to cart:", error);
    //     }
    // };

    // const removeFromCart = (id: string) => {
    //     setCart((prevCart) => {
    //         const updatedCart = prevCart.filter((item) => item.id !== id);
    //         return updatedCart;
    //     });
    // };

    return (
        <CartContext.Provider value={{ cart, loading }}>
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
