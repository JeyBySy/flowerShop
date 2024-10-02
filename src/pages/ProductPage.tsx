import { useParams } from 'react-router-dom';
import Product from '../components/Product/Product';


const ProductPage: React.FC = () => {
    const { item } = useParams<{ item: string }>();

    const dataProduct = {
        id: item || 'default-id',
        name: item ? item.replace(/-/g, ' ') : 'Default Product Name',
        price: 49.99,
        description: 'This is a placeholder description for the product.',
        // Add other fields if needed
    };

    return <Product data={dataProduct} />
}

export default ProductPage