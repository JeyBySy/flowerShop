import { useState, useEffect } from 'react';
import { fetchProductDetails } from '../services/apiService';
import { ProductType } from "../types/productTypes"


export const useProductDetails = (productId: string) => {
    const [product, setProduct] = useState<ProductType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getProductDetails = async () => {
            try {
                setLoading(true);
                const productData = await fetchProductDetails(productId);
                if (productData?.success) {
                    setProduct(productData?.data);
                }

                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                setError('Failed to fetch product details.');
            } finally {
                setLoading(false);
            }
        };

        getProductDetails();
    }, [productId]);

    return { product, loading, error };
};

