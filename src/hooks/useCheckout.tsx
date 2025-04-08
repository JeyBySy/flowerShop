import { useState, useEffect } from 'react';
import { CheckoutCartItemType } from '../types/checkoutTypes';
import { fetchCheckout } from '../services/apiService';
import { useCart } from './useCart';

const useCheckout = (cartItemIds: string[]) => {
    const { cart } = useCart()
    const [checkoutData, setCheckoutData] = useState<CheckoutCartItemType[]>([]);
    const [checkoutLoading, setCheckoutLoading] = useState(true);
    const [checkoutError, setCheckoutError] = useState<string | null>(null);

    const cartId = cart?.id;

    useEffect(() => {
        if (!cartId || cartItemIds.length === 0) return
        const getCheckoutData = async () => {
            try {
                const response = await fetchCheckout(cartId, cartItemIds);
                if (response?.success) {
                    setCheckoutData(response.data);
                } else {
                    setCheckoutError('Failed to fetch checkout data');
                }

                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                setCheckoutError('Server failed to load checkout data');
            } finally {
                setCheckoutLoading(false);
            }
        };

        getCheckoutData();
    }, [cartId, cartItemIds]);


    return {
        checkoutData,
        checkoutLoading,
        checkoutError,
    };
}

export default useCheckout