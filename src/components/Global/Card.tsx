interface CardProps {
    itemName: string;
    rating: number;
    price: number;
    imageUrl: string;
    totalSell: number;
    discount: number
}

const Card: React.FC<CardProps> = ({ itemName, rating, price, imageUrl, totalSell, discount = 0 }) => {
    return (
        <a href={`/product/${itemName}`} rel="noopener noreferrer">
            <div className="border relative p-4 rounded hover:shadow-2xl transition-shadow duration-300 w-[200px]  max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                {discount != 0 && (
                    <span className="absolute right-1 bg-persian-rose-500 top-0 rounded-b-full p-2 text-white text-xs flex items-center justify-center">{discount}%</span>
                )}
                <img src={imageUrl} alt={itemName} className="w-full h-full object-cover rounded-t-lg" />
                <div className="pt-5">
                    <h2 className="text-sm text-ellipsis overflow-hidden whitespace-nowrap w-full">
                        {itemName}
                    </h2>
                    <div className="pt-2 flex text-xs justify-between">
                        <p className="text-gray-700 font-medium">${price.toFixed(2)}</p>
                        <div className="flex items-center space-x-2">
                            <span className="text-yellow-500">⭐ {rating}</span><span>({totalSell})</span>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};
export default Card;
