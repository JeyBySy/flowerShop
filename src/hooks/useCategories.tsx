import { useState, useEffect } from 'react';
import { fetchCategories } from '../services/apiService';

type SubCategoryType = {
    id: string;
    name: string;
    description: string;
    categoryId: string;
    createdAt: string;
    updatedAt: string;
};

type CategoryType = {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    SubCategories: SubCategoryType[];
};

export const useCategories = () => {

    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const categoriesData = await fetchCategories();
                setCategories(categoriesData.data);

                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (err) {
                setError('Failed to load categories');
            } finally {
                setLoading(false);
            }
        };

        getCategories();
    }, []);

    return { categories, loading, error };
};
