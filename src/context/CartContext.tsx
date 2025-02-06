import { ProductType } from '../types/productTypes';
import { createContext, useContext, useEffect, useState } from "react";

interface CartContextType {
    cart: ProductType[];
    addToCart: (product: ProductType) => void;
    removeFromCart: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<ProductType[]>(() => {
        // Initialize state from localStorage if available, else empty array
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cart));
        } else {
            localStorage.removeItem("cart"); // Optionally remove cart if empty
        }
    }, [cart]);

    const addToCart = (product: ProductType) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart, product];
            return updatedCart;
        });
    };

    const removeFromCart = (id: string) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.filter((item) => item.id !== id);
            return updatedCart;
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
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
