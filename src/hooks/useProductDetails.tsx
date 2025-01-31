import { useState, useEffect } from 'react';
import { fetchProductDetails } from '../services/apiService';

type ProductRatingsType = {
    id: string;
    rating: number;
    review: string;
    createdAt: string;
    updatedAt: string;
    User: {
        name: string;
    }
    Product: {
        name: string;
    }
};


interface ProductType {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    price: string;
    stock: number;
    // categoryid: string;
    // subCategoryId: string;
    variety: string[];
    ProductRatings: ProductRatingsType[];
    averageRating: string

}

export const useProductDetails = (productId: string) => {
    const [product, setProduct] = useState<ProductType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getProductDetails = async () => {
            try {
                setLoading(true);
                const productData = await fetchProductDetails(productId);
                setProduct(productData.data);
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

