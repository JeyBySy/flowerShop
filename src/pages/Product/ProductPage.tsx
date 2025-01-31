import DescriptionRating from "../../components/Product/DescriptionRating"
import ImageCarousel from "../../components/Product/ImageCarousel"
import { useProductDetails } from "../../hooks/useProductDetails";
import ProductForm from "./ProductForm"
import { useParams } from 'react-router-dom';


const ProductPage: React.FC = () => {
    const { id } = useParams<{ id: string; }>();

    const { product, loading, error } = useProductDetails(id || "");


    if (loading) {
        return <div>Loading product details...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }


    return (
        <section className="flex mb-20 lg:mb-0 flex-col gap-5 overflow-hidden">
            <div className=" grid-cols-1 lg:grid-cols-2 gap-4 hidden lg:grid">
                <div className="flex flex-col gap-4">
                    <ImageCarousel />
                    {/* {JSON.stringify(product)} */}
                    <DescriptionRating
                        description={product?.description || null}
                        productRatings={product?.ProductRatings || []}
                        averageRating={parseFloat(product?.averageRating ?? '0')}
                    />
                </div>
                {product && <ProductForm data={product} />}
            </div>
            {/* Mobile sequence components */}
            <div className="lg:hidden sm:flex flex-col">
                <div className="flex flex-col gap-4">
                    <ImageCarousel />
                    {/* <ProductForm data={product} /> */}
                </div>
                <DescriptionRating
                    description={product?.description || null}
                    productRatings={product?.ProductRatings || []}
                    averageRating={parseFloat(product?.averageRating ?? '0')}
                />
            </div>
        </section>
    );
}

export default ProductPage