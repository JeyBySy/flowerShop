import { Flower, Search, ShoppingCart } from "lucide-react";
import { useState } from "react";
import '../../icon.css'

const Navbar = () => {
    const [isHoveredOccasions, setIsHoveredOccasions] = useState<boolean>(false);
    const [isHoveredFlowers, setIsHoveredFlowers] = useState<boolean>(false);
    const [isHoveredTreats, setIsHoveredTreats] = useState<boolean>(false);
    const [isHoveredGifts, setIsHoveredGifts] = useState<boolean>(false);


    const occasionsMenuItems = ["Birthday", "Christmas", "Anniversary", "Romance"];
    const flowersMenuItems = ["Roses", "Tulips", "Sunflowers", "Lilies"];
    const treatsMenuItems = ["Chocolate", "Cookies", "Cakes"];
    const giftsMenuItems = ["Toys", "Jewelry", "Electronics"];

    const handleMouseEnterOccasions = () => setIsHoveredOccasions(true);
    const handleMouseLeaveOccasions = () => setIsHoveredOccasions(false);

    const handleMouseEnterFlowers = () => setIsHoveredFlowers(true);
    const handleMouseLeaveFlowers = () => setIsHoveredFlowers(false);

    const handleMouseEnterTreats = () => setIsHoveredTreats(true);
    const handleMouseLeaveTreats = () => setIsHoveredTreats(false);

    const handleMouseEnterGifts = () => setIsHoveredGifts(true);
    const handleMouseLeaveGifts = () => setIsHoveredGifts(false);



    return (
        <div className="border-b-2">
            <div className="bg-brilliant-rose-500 text-white py-1">
                <div className="container mx-auto flex">
                    <div className="flex-grow"></div>
                    <span className="flex-grow text-center text-sm font-semibold">
                        Free delivery
                    </span>
                    <div className="flex-1 text-center text-sm">
                        <div className="flex items-center gap-5 justify-end">
                            <div className="cursor-pointer"><a href="/track-order">Track Order</a></div>
                            <div className="cursor-pointer"><a href="/login">Login</a></div>
                            <div className="cursor-pointer"><a href="/register">Register</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto h-[60px] flex items-center">
                <div className="flex  w-full">
                    <a href="/" className="flex items-center">
                        <Flower color="#e08100" />Flower Shop
                    </a>
                </div>
                <div className=" w-[50%] flex px-2">
                    <input placeholder="Search" type="text" className="w-full text-sm p-1 rounded rounded-t-none rounded-b-none focus:outline-none border border-persian-rose-500 border-r-0" />
                    <button className="px-3 py-1 border-l-0 bg-brilliant-rose-500 text-white border border-persian-rose-500  "><Search /></button>
                </div>
                <div className="flex-grow flex justify-end gap-6 relative w-full capitalize text-sm">
                    <div className="relative cursor-pointer" onMouseEnter={handleMouseEnterOccasions} onMouseLeave={handleMouseLeaveOccasions} >
                        Occasions
                        {isHoveredOccasions && (
                            <div className="absolute top-full -left-20 min-h-fit bg-white border shadow-lg">
                                <ul className={`submenu ${occasionsMenuItems.length === 1 ? "max-w-[150px]" : "max-w-[300px]"}`}>
                                    {
                                        occasionsMenuItems.map((item) => (
                                            <a href={item.toLowerCase()} key={item}>
                                                <li className="submenu-items">
                                                    {item}
                                                </li>
                                            </a>
                                        ))
                                    }
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="relative cursor-pointer" onMouseEnter={handleMouseEnterFlowers} onMouseLeave={handleMouseLeaveFlowers}>
                        Flowers & plants
                        {isHoveredFlowers && (
                            <div className="absolute top-full -left-20 min-h-fit bg-white border shadow-lg">
                                <ul className={`submenu ${flowersMenuItems.length === 1 ? "max-w-[150px]" : "max-w-[300px]"} `}>
                                    {
                                        flowersMenuItems.map((item) => (
                                            <a href={item.toLowerCase()} key={item}>
                                                <li className="submenu-items">
                                                    {item}
                                                </li>
                                            </a>
                                        ))
                                    }
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="relative cursor-pointer" onMouseEnter={handleMouseEnterTreats} onMouseLeave={handleMouseLeaveTreats}>
                        Sweet & Treats
                        {isHoveredTreats && (
                            <div className="absolute top-full -left-20 min-h-fit bg-white border shadow-lg">
                                <ul className={`submenu ${treatsMenuItems.length === 1 ? "max-w-[150px]" : "max-w-[300px]"} `}>
                                    {
                                        treatsMenuItems.map((item) => (
                                            <a href={item.toLowerCase()} key={item}>
                                                <li className="submenu-items">
                                                    {item}
                                                </li>
                                            </a>
                                        ))
                                    }
                                </ul>
                            </div>
                        )}
                    </div>
                    {giftsMenuItems.length > 0 && (
                        <div className="relative cursor-pointer" onMouseEnter={handleMouseEnterGifts} onMouseLeave={handleMouseLeaveGifts}>
                            Gifts
                            {isHoveredGifts && (
                                <div className="absolute top-full -left-20 min-h-fit bg-white border shadow-lg">
                                    <ul className={`submenu ${giftsMenuItems.length === 1 ? "max-w-[150px]" : "max-w-[300px]"} `}>
                                        {
                                            giftsMenuItems.map((item) => (
                                                <a href={item.toLowerCase()} key={item}>
                                                    <li className="submenu-items">
                                                        {item}
                                                    </li>
                                                </a>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    <button className="cursor-pointer relative">
                        <span className="min-w-[25px] absolute -top-3 -right-2 bg-zest-600 text-white rounded-full px-1 py-1 text-xs flex justify-center items-center">1</span>
                        <ShoppingCart />
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Navbar