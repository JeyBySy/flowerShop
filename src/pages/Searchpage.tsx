import { useParams } from 'react-router-dom';
import SearchByCategory from '../components/Search/SearchByCategory';

const Searchpage: React.FC = () => {
    const { occasion, flower, treat, gift } = useParams<{ occasion: string, flower: string, treat: string, gift: string }>();

    // Based on the route, you can fetch data or display information
    const searchCategory = occasion || flower || treat || gift;

    return (
        <section className="min-h-screen">
            <p className='text-4xl capitalize font-bold'>{searchCategory}</p>
            <SearchByCategory category={searchCategory} />
        </section>
    );
};

export default Searchpage;
