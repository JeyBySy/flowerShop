import { useState, useEffect } from 'react';
import { fetchProducts } from '../services/apiService';
import { ProductType } from "../types/productTypes"

// type ProductRatingsType = {
//     id: string;
//     rating: number;
//     review: string;
//     userId: string;
//     productId: string;
//     createdAt: string;
//     updatedAt: string;
// };


// type ProductType = {
//     id: string;
//     name: string;
//     description: string;
//     createdAt: string;
//     updatedAt: string;
//     price: number;
//     stock: number;
//     categoryid: string;
//     subCategoryId: string;
//     variety: object[];
//     ProductRatings: ProductRatingsType[],
//     averageRating: number

// }

export const useProducts = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const loadProducts = async () => {
            try {
                const response = await fetchProducts();
                setProducts(response.data);
                console.log(response.data);

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
