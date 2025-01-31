import { useParams } from 'react-router-dom';
import SearchByCategory from '../components/Search/SearchByCategory';

type SearchParams = { category: string, subCategory: string }

const Searchpage: React.FC = () => {
    const { category, subCategory } = useParams<SearchParams>();

    // Based on the route, you can fetch data or display information
    const searchCategory = category?.replace(/-/g, ' ')

    return (
        <section className="min-h-screen">
            <p className='text-4xl capitalize font-bold'>{searchCategory}</p>
            SubCat: {subCategory}
            <SearchByCategory category={searchCategory} />
        </section>
    );
};

export default Searchpage;
