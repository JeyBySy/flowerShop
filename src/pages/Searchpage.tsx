import { useParams } from 'react-router-dom';
import SearchByCategory from '../components/Search/SearchByCategory';
import { useProductBaseCategory } from '../hooks/useProductBaseCategory';

type SearchParams = {
    categoryName?: string,
    subCategoryName?: string
}

const Searchpage: React.FC = () => {
    const { categoryName, subCategoryName } = useParams<SearchParams>();
    const { products, loading, error, subCategory } = useProductBaseCategory(categoryName || "", subCategoryName || "")

    return (
        <section className="min-h-screen">
            {!error ? (
                <div className='flex gap-2 flex-col flex-wrap'>
                    <div className='grid grid-cols-[auto_1fr] items-center'>
                        <div className='w-full p-20'>
                            <p className='text-4xl capitalize font-bold text-brilliant-rose-500 '>{subCategoryName}</p>
                        </div>
                        <div className='w-full'>
                            <p className='text-3xl font-light'>
                                {subCategory?.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum dolorem veniam ipsa debitis illo, tenetur quia incidunt, distinctio repellendus itaque magni quasi, libero eligendi voluptatibus! Optio consequatur cupiditate sit rerum.
                            </p>
                        </div>
                    </div>
                    <SearchByCategory data={products} loading={loading} />
                </div >
            ) : (
                <p className='text-red-400 font-bold'>Error: {error}</p>
            )}

        </section >
    );
};

export default Searchpage;
