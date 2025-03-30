import { useState, useEffect } from 'react';
import { fetchCategories } from '../services/apiService';
import { CategoryType } from '../types/categoryTypes';



export const useCategories = () => {

    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const categoriesData = await fetchCategories();
                if (categoriesData?.success) {
                    setCategories(categoriesData.data);
                }

                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (err) {
                setError('Server failed to load categories');
            } finally {
                setLoading(false);
            }
        };

        getCategories();
    }, []);

    return { categories, loading, error };
};
