import DescriptionRating from "../../components/Product/DescriptionRating"
import ImageCarousel from "../../components/Product/ImageCarousel"
import { useAuth } from "../../context/AuthContext";
// import { useCart } from "../../context/CartContext";
import { useProductDetails } from "../../hooks/useProductDetails";
import ProductForm from "./ProductForm"
import { useNavigate, useParams, useLocation } from 'react-router-dom';


const ProductPage: React.FC = () => {
    const { id } = useParams<{ id: string; }>();
    const { user } = useAuth();
    // const { addToCart } = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const { product, loading, error } = useProductDetails(id || "");


    if (loading) {
        return <div>Loading product details...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const handleAddToCart = () => {
        if (!user) {
            // If not logged in, redirect to the login page
            navigate('/login', { state: { from: location.pathname } });
        } else if (product) {
            // Ensure product is not null before adding to cart
            // addToCart(product);
        }
    };


    return (
        <section className="flex mb-20 lg:mb-0 flex-col gap-5 overflow-hidden">
            <div className="grid-cols-1 lg:grid-cols-2 gap-4 hidden lg:grid">
                <div className="flex flex-col gap-4">
                    <ImageCarousel />
                    {/* {JSON.stringify(product)} */}
                    <DescriptionRating
                        description={product?.description || null}
                        productRatings={product?.ProductRatings || []}
                        averageRating={parseFloat(product?.averageRating ?? '0')}
                    />
                </div>
                {product && <ProductForm data={product} addToCartEvent={handleAddToCart} />}
            </div>
            {/* Mobile sequence components */}
            <div className="lg:hidden sm:flex flex-col">
                <div className="flex flex-col gap-4">
                    <ImageCarousel />
                    {product && <ProductForm data={product} addToCartEvent={handleAddToCart} />}
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