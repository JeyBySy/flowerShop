import DescriptionRating from "../../components/Product/DescriptionRating"
import ImageCarousel from "../../components/Product/ImageCarousel"
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { useProductDetails } from "../../hooks/useProductDetails";
import { CartAddItemType } from "../../types/cartTypes";
// import { CartAddItemType } from "../../types/cartTypes";
import ProductForm from "./ProductForm"
import { useNavigate, useParams, useLocation } from 'react-router-dom';



const ProductPage: React.FC = () => {
    const { id } = useParams<{ id: string; }>();
    const { user } = useAuth();
    const { addToCart, cart, } = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const { product, loading, error } = useProductDetails(id || "");

    if (loading) return <div className="text-center text-gray-500">Loading...</div>;
    if (error) return <div>{error}</div>;

    const handleAddToCart = (cartPayload: CartAddItemType) => {
        if (!user || user?.userData.role === "guest") {
            navigate('/login', { state: { from: location.pathname } });
        }

        if (!cart?.id) return // Handle cart ID is not available

        try {
            addToCart(cartPayload);

        } catch (err) {
            console.error("Failed to add item to cart:", err);
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
                {product ? (
                    <ProductForm data={product} addToCartEvent={handleAddToCart} />
                ) : (
                    <div className="text-red-500">Product not found</div>
                )}
            </div>


            {/* Mobile sequence components */}
            <div className="lg:hidden sm:flex flex-col">
                <div className="flex flex-col gap-4">
                    <ImageCarousel />
                    {product ? (
                        <ProductForm data={product} addToCartEvent={handleAddToCart} />
                    ) : (
                        <div className="text-red-500">Product not found</div>
                    )}
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