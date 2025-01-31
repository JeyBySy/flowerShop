import { Link } from "react-router-dom";
import { CardProps } from "../../types/cardTypes"


const Card: React.FC<CardProps> = ({ id, itemName, rating, price, imageUrl, totalSell = 0, discount = 0, keyItem }: CardProps) => {
    const itemNameConvert: string = itemName.trim().toLowerCase().replace(/\s+/g, '-');

    return (
        <>
            <Link to={`/product/${id}/${itemNameConvert}`} key={keyItem} >
                <div className="border relative p-4 rounded hover:shadow-md transition-shadow duration-300 w-full">
                    {discount !== 0 && (
                        <span className="absolute right-1 bg-persian-rose-500 top-0 rounded-b-full p-2 text-white text-xs flex items-center justify-center">
                            {discount}%
                        </span>
                    )}
                    <img src={imageUrl} alt={itemName} className="w-full h-[10rem] object-contain" />
                    <div className="pt-5">
                        <h2 className="text-sm sm:text-base text-ellipsis overflow-hidden whitespace-nowrap w-full">
                            {itemName}
                        </h2>
                        <div className="pt-2 flex text-xs sm:text-sm justify-between">
                            <p className="text-persian-rose-500 font-medium">₱{price}</p>
                            <div className="flex items-center space-x-2">
                                <span className="text-yellow-500">⭐ {rating}</span><span>({totalSell})</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Card;
