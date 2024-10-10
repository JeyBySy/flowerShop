import React from 'react'
import ImageCarousel from './ImageCarousel';
import DescriptionRating from './DescriptionRating';
import ProductForm from './ProductForm';
import { useParams } from 'react-router-dom';



const Product: React.FC = () => {
    const { item } = useParams<{ item: string }>();

    const dataProduct = {
        id: item || 'default-id',
        name: item ? item.replace(/-/g, ' ') : 'Default Product Name',
        price: 49.99,
        description: 'This is a placeholder description for the product.',
        // Add other fields if needed
    };

    return (
        <section className="flex mb-20 lg:mb-0 flex-col gap-5 overflow-hidden">
            <div className=" grid-cols-1 lg:grid-cols-2 gap-4 hidden lg:grid">
                <div className="flex flex-col gap-4">
                    <ImageCarousel />
                    <DescriptionRating />
                </div>
                <ProductForm data={dataProduct} />
            </div>
            {/* Mobile sequence components */}
            <div className='lg:hidden sm:flex flex-col'>
                <div className="flex flex-col gap-4">
                    <ImageCarousel />
                    <ProductForm data={dataProduct} />
                </div>
                <DescriptionRating />
            </div>
        </section>
    );
};

export default Product;
