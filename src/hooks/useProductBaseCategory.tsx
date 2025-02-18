import { useState, useEffect } from 'react';
import { fetchSearchByCategory } from '../services/apiService';
import { ProductType } from "../types/productTypes";
import { subCategoryTypes } from '../types/subCategoryTypes';

export const useProductBaseCategory = (categoryName: string, subCategoryName: string, sortOption: string, limit: string, page: number) => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [subCategory, setSubCategory] = useState<subCategoryTypes>();
    const [totalPages, setTotalPages] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                setLoading(true);
                const { data, subCategory } = await fetchSearchByCategory(categoryName, subCategoryName, sortOption, parseInt(limit), page);
                setProducts(data.products);
                setSubCategory(subCategory);
                setTotalPages(data.totalPages);
                setTotalItems(data.totalItems);

                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                setError("Error fetching products by category.");
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, [categoryName, subCategoryName, sortOption, limit, page]);

    return { products, subCategory, totalPages, totalItems, loading, error };
};
