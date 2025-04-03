import { Search, ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import ShopHeader from "./ShopHeader";
import MenuSkeleton from "./Skeleton/MenuSkeleton";
import { useCategories } from '../../hooks/useCategories';
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { fromKebabCase, toKebabCase } from "../../utils/formatSpaceString";
import SampleImage from '../..//assets/flowers/sample.png'

const Navbar = () => {
    const { user, logout, authLoading } = useAuth();
    const navigate = useNavigate();
    const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
    const [isCartHovered, setIsCartHovered] = useState<boolean>(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false); // State for mobile menu
    const { cart } = useCart();
    const [cartCount, setCartCount] = useState<number>(0)
    const { categories, loading, error } = useCategories();

    useEffect(() => {
        setCartCount(cart?.CartItems?.length || 0);
    }, [cart]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleCartPage = () => {
        if (!user) {
            navigate('/login', { state: { from: "/cart" } });
        } else {
            setIsCartHovered(false);
            navigate('/cart'); // Redirects to the cart page when logged in
        }
    };

    const handleLogout = async () => {
        await logout();
    };

    return (
        <div className="border-b-2 bg-white">
            <div className="bg-brilliant-rose-500 text-white py-1">
                <div className="container mx-auto flex">
                    <div className="flex-grow"></div>
                    <span className="flex-grow text-center text-sm font-semibold">
                        DEMO PURPOSES ONLY
                    </span>
                    <div className="flex-1 text-center text-sm">
                        <div className="flex items-center gap-5 justify-end">
                            <div className="cursor-pointer"><Link to="/track-order">Track Order</Link></div>
                            {authLoading ? (
                                <>
                                    {/* Add spinner loading */}
                                </>
                            ) : (
                                <>
                                    {user?.success && user?.userData?.role !== 'guest' ? (
                                        <div onClick={() => handleLogout()} className="cursor-pointer">
                                            {user?.userData?.first_name} {user?.userData?.last_name}
                                        </div>
                                    ) : (
                                        <>
                                            <div className="cursor-pointer"><Link to="/login">Login</Link></div>
                                            <div className="cursor-pointer"><Link to="/register">Register</Link></div>
                                        </>
                                    )}
                                </>
                            )}

                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto h-[60px] flex items-center justify-between lg:px-0 px-4">
                <Link to="/" className="flex items-center" preventScrollReset={true}>
                    <ShopHeader />
                </Link>
                <div className="w-2/4 lg:w-[20%] flex px-2">
                    <input placeholder="Search" type="text" className="w-full text-xs p-1 rounded rounded-t-none rounded-b-none focus:outline-none border border-persian-rose-500 border-r-0 px-2" />
                    <button className="px-3 py-1 border-l-0 bg-brilliant-rose-500 text-white border border-persian-rose-500">
                        <Search />
                    </button>
                </div>
                <button className="block lg:hidden" onClick={toggleMobileMenu}>
                    {/* Icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <section className={`px-5 lg:flex lg:justify-between lg:items-center ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
                <div className="flex-grow flex justify-end gap-6 relative w-full capitalize text-sm">
                    {loading ? (
                        <>
                            <MenuSkeleton />
                        </>
                    ) : error && categories ? (
                        <div>{error}</div>
                    ) : (
                        <>
                            {categories?.length > 0 ? (
                                categories?.map((item) => (
                                    <div key={item.id} className="relative cursor-pointer z-10"
                                        onMouseEnter={() => setHoveredItemId(item.id)}
                                        onMouseLeave={() => setHoveredItemId(null)}
                                    >
                                        {fromKebabCase(item.name)}


                                        {hoveredItemId === item.id && (
                                            <div className="absolute top-full -left-20 min-h-fit bg-white border shadow-lg">
                                                <ul className={`submenu ${item.SubCategories.length === 1 ? "max-w-[150px]" : "max-w-[300px]"}`}>
                                                    {item.SubCategories.map((sub) => (
                                                        <Link to={`/search/${toKebabCase(item.name)}/${toKebabCase(sub.name)}`} key={sub.id}>
                                                            <li className="submenu-items">{sub.name}</li>
                                                        </Link>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p className="text-red-400">No categories found.</p>
                            )}
                        </>
                    )}
                    <div
                        onClick={handleCartPage}
                        onMouseEnter={() => setIsCartHovered(true)}
                        onMouseLeave={() => setIsCartHovered(false)}
                        className="cursor-pointer relative">
                        {cartCount > 0 && (
                            <span className="min-w-[25px] absolute -top-3 -right-5 text-white bg-zest-500 rounded-full text-sm flex justify-center items-center">
                                {cartCount}
                            </span>
                        )}
                        <ShoppingCart width={"25px"} height={"20px"} />
                        {isCartHovered && (
                            <div className="absolute top-full -right-11 max-h-[400px] overflow-y-auto bg-white border shadow-lg z-50 w-[19rem] p-3 rounded-sm">
                                <h3 className="text-sm font-semibold border-b pb-2">Cart Items</h3>
                                {cartCount > 0 ? (
                                    <ul>
                                        {cart?.CartItems?.map((item) => (
                                            <li key={item.id} className="flex items-center gap-3 py-2 border-b last:border-none">
                                                <img src={SampleImage} alt={SampleImage} className="w-10 h-10 object-cover rounded" />
                                                <div className="text-xs w-full ">
                                                    <p className="font-black text-start text-gray-600">{item.Product.name}</p>
                                                    {Array.isArray(item?.variety)
                                                        ? item.variety.map((v, i) => {
                                                            const parsedVariety = typeof v === "string" ? JSON.parse(v) : v;
                                                            return (
                                                                <div className={`grid grid-cols-4 text-center text-gray-500 py-1 text-xs ${i !== item.variety.length - 1 ? 'border-b border-gray-300' : ''}`} key={i}>
                                                                    <p className='text-start'>{parsedVariety.name}</p>
                                                                    <span className='text-start text-persian-rose-600 justify-center items-center flex'>(₱{item.Product.price})</span>
                                                                    <p className='flex items-center justify-center w-full'>x</p>
                                                                    <p className="text-persian-rose-600 justify-center items-center flex">{parsedVariety.quantity}</p>
                                                                </div>
                                                            );
                                                        })
                                                        : <p className="text-gray-500 text-sm">No variety available</p>
                                                    }
                                                    <div className="border-t border-gray-300 text-persian-rose-600 font-semibold pt-5 text-end flex justify-between">
                                                        <span className="text-gray-400 font-normal">Total:</span>
                                                        ₱{item.total}
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-500 text-sm py-2">Your cart is empty</p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </section >
        </div >
    );
}

export default Navbar;
