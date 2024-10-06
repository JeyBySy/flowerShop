import Card from "../Global/Card"
import SampleImage from '../../assets/flowers/sample.png'

const ShowProducts = () => {
    const products = [
        {
            id: 1,
            itemName: "Flower dahlia",
            rating: 4.5,
            price: 99.99,
            imageUrl: SampleImage,
            totalSell: 10,
            discount: 0

        },
        {
            id: 2,
            itemName: "Flower sample",
            rating: 4.7,
            price: 599.99,
            imageUrl: SampleImage,
            totalSell: 10,
            discount: 10
        },
        {
            id: 3,
            itemName: "Flower sample",
            rating: 4.9,
            price: 1199.99,
            imageUrl: SampleImage,
            totalSell: 10,
            discount: 10
        },
        {
            id: 4,
            itemName: "Flower sample",
            rating: 4.3,
            price: 199.99,
            imageUrl: SampleImage,
            totalSell: 10,
            discount: 10
        },
        {
            id: 5,
            itemName: "Flower sample",
            rating: 4.3,
            price: 199.99,
            imageUrl: SampleImage,
            totalSell: 10,
            discount: 10
        },
        {
            id: 6,
            itemName: "Flower sample",
            rating: 4.3,
            price: 199.99,
            imageUrl: SampleImage,
            totalSell: 10,
            discount: 10
        },
        {
            id: 7,
            itemName: "Flower sample",
            rating: 4.3,
            price: 199.99,
            imageUrl: SampleImage,
            totalSell: 10,
            discount: 10
        },
        {
            id: 8,
            itemName: "Flower sample",
            rating: 4.3,
            price: 199.99,
            imageUrl: SampleImage,
            totalSell: 10,
            discount: 10
        }
    ];
    const cardStyle = "grid grid-cols-2 gap-2 xs:gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
    return (
        <>
            {/* Best Sellers Section */}
            <section className="flex flex-col gap-3">
                <span className="text-xl md:text-2xl font-semibold border-b-2 pb-2 border-zest-600">Best Sellers</span>
                <div className="flex flex-col md:flex-wrap gap-5 justify-start">
                    <div className="w-full text-end text-sm">
                        <button onClick={() => alert("ads")} className="text-zest-600">Show More</button>
                    </div>
                    <div className={cardStyle}>
                        {products.map((product, key) => (
                            <Card
                                key={key}
                                itemName={product.itemName}
                                rating={product.rating}
                                price={product.price}
                                imageUrl={product.imageUrl}
                                totalSell={product.totalSell}
                                discount={product.discount}
                            />
                        ))}
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
                        {products.map((product, key) => (
                            <Card
                                key={key}
                                itemName={product.itemName}
                                rating={product.rating}
                                price={product.price}
                                imageUrl={product.imageUrl}
                                totalSell={product.totalSell}
                                discount={product.discount}
                            />
                        ))}
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
                        {products.map((product, key) => (
                            <Card
                                key={key}
                                itemName={product.itemName}
                                rating={product.rating}
                                price={product.price}
                                imageUrl={product.imageUrl}
                                totalSell={product.totalSell}
                                discount={product.discount}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );

}

export default ShowProducts