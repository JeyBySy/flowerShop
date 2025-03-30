import { useState, useEffect } from 'react';
import { fetchProducts } from '../services/apiService';
import { ProductType } from "../types/productTypes"

export const useProducts = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const loadProducts = async () => {
            try {
                const productData = await fetchProducts();
                if (productData && Array.isArray(productData.data)) {
                    setProducts(productData?.data);

                }

                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                setError("Error fetching products:");
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);


    return { products, loading, error }
}
