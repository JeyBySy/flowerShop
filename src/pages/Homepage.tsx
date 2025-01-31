import React from 'react';
import Divider from "../components/Global/Divider"
import Card from "../components/Global/Card"
import SampleImage from '../assets/flowers/sample.png'
import CardSkeleton from "../components/Global/Skeleton/CardSkeleton";
import { useProducts } from '../hooks/useProducts';


const Homepage: React.FC = () => {
    const { products, loading, error } = useProducts()

    const cardStyle = "grid grid-cols-2 gap-2 xs:gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"

    return (
        <div className="min-h-screen">
            <section>
                <div className="flex flex-wrap bg-gray-300 min-h-[260px] text-center items-center justify-center gap-4 lg:grid lg:gap-2 lg:grid-cols-8 xl:grid-cols-11">
                    <img
                        src={""}
                        alt="Promotion Banner 1"
                        className="w-full border h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                    />
                    <img
                        src={""}
                        alt="Promotion Banner 2"
                        className="w-full border h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                    />
                    <img
                        src={""}
                        alt="Promotion Banner 3"
                        className="w-full border h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                    />
                    <img
                        src={""}
                        alt="Promotion Banner 4"
                        className="w-full border h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                    />
                </div>
            </section>
            <Divider />

            {/* Best Sellers Section */}
            <section className="flex flex-col gap-3">
                <span className="text-xl md:text-2xl font-semibold border-b-2 pb-2 border-zest-600">Best Sellers</span>
                <div className="flex flex-col md:flex-wrap gap-5 justify-start">
                    <div className="w-full text-end text-sm">
                        <button onClick={() => alert("ads")} className="text-zest-600">Show More</button>
                    </div>

                    <div className={cardStyle}>
                        {loading ? (
                            <CardSkeleton cards={4} />  // Show skeletons while loading
                        ) : error ? (
                            <div>Error loading categories</div>
                        ) : (
                            products.map((product, key) => (
                                <Card
                                    key={key}
                                    id={product.id}
                                    itemName={product.name}
                                    rating={parseFloat(product.averageRating) || 0}
                                    price={parseFloat(product.price)}
                                    imageUrl={SampleImage}
                                    totalSell={product.totalSell}
                                    discount={product.discount}
                                />
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* Affordable Picks Section */}
            <section className="flex flex-col gap-3">
                <span className="text-xl md:text-2xl font-semibold border-b-2 pb-2 border-zest-600">Affordable Picks</span>
                <div className="flex flex-col md:flex-wrap gap-5 justify-start">
                    <div className="w-full text-end text-sm">
                        <button onClick={() => alert("ads")} className="text-zest-600">Show More</button>
                    </div>
                    <div className={cardStyle}>
                        {loading ? (
                            <CardSkeleton cards={4} />  // Show skeletons while loading
                        ) : (
                            <CardSkeleton cards={4} />
                        )}
                    </div>
                </div>
            </section>

            {/* New Arrivals Section */}
            <section className="flex flex-col gap-3">
                <span className="text-xl md:text-2xl font-semibold border-b-2 pb-2 border-zest-600">New Arrivals</span>
                <div className="flex flex-col md:flex-wrap gap-5 justify-start">
                    <div className="w-full text-end text-sm">
                        <button onClick={() => alert("ads")} className="text-zest-600">Show More</button>
                    </div>
                    <div className={cardStyle}>
                        {loading ? (
                            <CardSkeleton cards={4} />  // Show skeletons while loading
                        ) : (
                            <CardSkeleton cards={4} />
                        )}
                    </div>
                </div>
            </section>

        </div>
    );
}


export default Homepage