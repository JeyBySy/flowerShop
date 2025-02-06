import { useState, useEffect } from 'react';
import { fetchSearchByCategory } from '../services/apiService';
import { ProductType } from "../types/productTypes"
import { subCategoryTypes } from '../types/subCategoryTypes';


export const useProductBaseCategory = (categoryName: string, subCategoryName: string) => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [subCategory, setSubCategory] = useState<subCategoryTypes>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const loadProducts = async () => {
            try {
                setLoading(true);
                const { data, subCategoryData } = await fetchSearchByCategory(categoryName, subCategoryName);
                setProducts(data);
                setSubCategory(subCategoryData.data)

                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                setError("Error fetching product base category:");
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, [categoryName, subCategoryName]);


    return { products, loading, error, subCategory }
}
