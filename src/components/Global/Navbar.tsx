import { Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import '../../icon.css';
import ShopHeader from "./ShopHeader";

const Navbar = () => {
    const [isHoveredOccasions, setIsHoveredOccasions] = useState<boolean>(false);
    const [isHoveredFlowers, setIsHoveredFlowers] = useState<boolean>(false);
    const [isHoveredTreats, setIsHoveredTreats] = useState<boolean>(false);
    const [isHoveredGifts, setIsHoveredGifts] = useState<boolean>(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false); // State for mobile menu

    const occasionsMenuItems = ["Birthday", "Christmas", "Anniversary", "Romance"];
    const flowersMenuItems = ["Roses", "Tulips", "Sunflowers", "Lilies"];
    const treatsMenuItems = ["Chocolate", "Cookies", "Cakes"];
    const giftsMenuItems = ["Toys", "Jewelry", "Electronics"];

    const toggleOccasionsMenu = () => setIsHoveredOccasions(prev => !prev);
    const toggleFlowersMenu = () => setIsHoveredFlowers(prev => !prev);
    const toggleTreatsMenu = () => setIsHoveredTreats(prev => !prev);
    const toggleGiftsMenu = () => setIsHoveredGifts(prev => !prev);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
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
                            <div className="cursor-pointer"><Link to="/login">Login</Link></div>
                            <div className="cursor-pointer"><Link to="/register">Register</Link></div>
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
                    <div className="relative cursor-pointer" onClick={toggleOccasionsMenu} onMouseLeave={() => setIsHoveredOccasions(false)}>
                        Occasions
                        {isHoveredOccasions && (
                            <div className="absolute top-full -left-20 min-h-fit bg-white border shadow-lg">
                                <ul className={`submenu ${occasionsMenuItems.length === 1 ? "max-w-[150px]" : "max-w-[300px]"}`}>
                                    {occasionsMenuItems.map((item) => (
                                        <Link to={`/search/occasions/${item.toLowerCase()}`} key={item}>
                                            <li className="submenu-items">
                                                {item}
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="relative cursor-pointer" onClick={toggleFlowersMenu} onMouseLeave={() => setIsHoveredFlowers(false)}>
                        Flowers & plants
                        {isHoveredFlowers && (
                            <div className="absolute top-full -left-20 min-h-fit bg-white border shadow-lg">
                                <ul className={`submenu ${flowersMenuItems.length === 1 ? "max-w-[150px]" : "max-w-[300px]"} `}>
                                    {flowersMenuItems.map((item) => (
                                        <Link to={`/search/flowers/${item.toLowerCase()}`} key={item}>
                                            <li className="submenu-items">
                                                {item}
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="relative cursor-pointer" onClick={toggleTreatsMenu} onMouseLeave={() => setIsHoveredTreats(false)}>
                        Sweet & Treats
                        {isHoveredTreats && (
                            <div className="absolute top-full -left-20 min-h-fit bg-white border shadow-lg">
                                <ul className={`submenu ${treatsMenuItems.length === 1 ? "max-w-[150px]" : "max-w-[300px]"} `}>
                                    {treatsMenuItems.map((item) => (
                                        <Link to={`/search/treats/${item.toLowerCase()}`} key={item}>
                                            <li className="submenu-items">
                                                {item}
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    {giftsMenuItems.length > 0 && (
                        <div className="relative cursor-pointer" onClick={toggleGiftsMenu} onMouseLeave={() => setIsHoveredGifts(false)}>
                            Gifts
                            {isHoveredGifts && (
                                <div className="absolute top-full -left-20 min-h-fit bg-white border shadow-lg">
                                    <ul className={`submenu ${giftsMenuItems.length === 1 ? "max-w-[150px]" : "max-w-[300px]"} `}>
                                        {giftsMenuItems.map((item) => (
                                            <Link to={`/search/gifts/${item.toLowerCase()}`} key={item}>
                                                <li className="submenu-items">
                                                    {item}
                                                </li>
                                            </Link>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                    <Link to={'/cart'} className="cursor-pointer relative">
                        <span className="min-w-[25px] absolute -top-3 -right-5 text-white-800 bg-zest-500 rounded-full text-sm flex justify-center items-center">1</span>
                        <ShoppingCart width={"25px"} height={"20px"} />
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default Navbar;
