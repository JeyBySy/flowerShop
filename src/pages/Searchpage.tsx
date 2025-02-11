import { useParams } from 'react-router-dom';
import SearchByCategory from '../components/Search/SearchByCategory';
import { useProductBaseCategory } from '../hooks/useProductBaseCategory';

type SearchParams = {
    categoryName?: string;
    subCategoryName?: string;
};

const SearchPage: React.FC = () => {
    const { categoryName, subCategoryName } = useParams<SearchParams>();
    const { products, subCategory, totalPages, totalItems, loading, error } = useProductBaseCategory(categoryName || "", subCategoryName || "");

    return (
        <section className="min-h-screen">
            {!error ? (
                <div className="flex flex-col gap-2">
                    <div className="grid grid-cols-[auto_1fr] items-center">
                        <div className="w-full p-20">
                            <p className="text-4xl capitalize font-bold text-brilliant-rose-500">{subCategoryName}</p>
                        </div>
                        <div className="w-full">
                            <p className="text-3xl font-light">
                                {subCategory?.description}
                            </p>
                        </div>
                    </div>
                    <SearchByCategory data={products} loading={loading} totalPages={totalPages} totalItems={totalItems} />
                </div>
            ) : (
                <p className="text-red-400 font-bold">Error: {error}</p>
            )
            }
        </section >
    );
};

export default SearchPage;
