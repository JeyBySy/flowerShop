import { useAuth } from '../hooks/useAuth';
import { fetchAddCartItem, fetchCart, fetchRemoveCartItem } from '../services/apiService';
import { CartType, CartContextType, CartAddItemType } from '../types/cartTypes';
import { createContext, useEffect, useState } from "react";


const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { user } = useAuth();
    const [cart, setCart] = useState<CartType | null>(null);
    const [loadingCart, setLoadingCart] = useState<boolean>(true);
    const [selectedCarts, setSelectedCarts] = useState<string[]>([]);
    const [cartUpdated, setCartUpdated] = useState(false);

    useEffect(() => {
        if (!user) {
            setLoadingCart(false);
            return;
        }
        const loadCart = async () => {
            setLoadingCart(true);
            try {
                const cartResponse = await fetchCart();
                if (cartResponse?.success) {
                    setCart(cartResponse?.data);
                }
            } catch (error) {
                console.error("Error loading cart:", error);
            } finally {
                setLoadingCart(false);
            }
        };

        loadCart();
    }, [user, cartUpdated]);

    const addToCart = async ({
        cartId,
        productId,
        variety,
        deliveryDate,
        deliveryTime,
    }: CartAddItemType) => {
        if (!user) return;

        try {
            const response = await fetchAddCartItem({
                cartId,
                productId,
                variety,
                deliveryDate,
                deliveryTime
            });

            if (response?.success) {
                setCartUpdated(prev => !prev);
            }

        } catch (error) {
            console.error("Error cart context: adding item to cart:", error);
        }
    };

    const removeCart = async (cartItemId: string) => {
        if (!user) return;
        try {
            const response = await fetchRemoveCartItem(cartItemId);
            if (response?.success) {
                setCart((prevCart) => {
                    if (!prevCart) return null;
                    return {
                        ...prevCart,
                        CartItems: prevCart.CartItems?.filter((item) => item.id !== cartItemId),
                    };
                });
            }
        } catch (error) {
            console.error("Error adding item to cart:", error);
        }
    };

    return (
        <CartContext.Provider value={{ cart, loadingCart, selectedCarts, setSelectedCarts, removeCart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext }