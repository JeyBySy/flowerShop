import Card from "../Global/Card"
const ShowProducts = () => {
    const products = [
        {
            id: 1,
            itemName: "Flower dahlia",
            rating: 4.5,
            price: 99.99,
            imageUrl: "../../assets/flowers/sample.png",
            totalSell: 10,
            discount: 0

        },
        {
            id: 2,
            itemName: "Flower sample",
            rating: 4.7,
            price: 599.99,
            imageUrl: "../../assets/flowers/sample.png",
            totalSell: 10,
            discount: 10
        },
        {
            id: 3,
            itemName: "Flower sample",
            rating: 4.9,
            price: 1199.99,
            imageUrl: "../../assets/flowers/sample.png",
            totalSell: 10,
            discount: 10
        },
        {
            id: 4,
            itemName: "Flower sample",
            rating: 4.3,
            price: 199.99,
            imageUrl: "../../assets/flowers/sample.png",
            totalSell: 10,
            discount: 10
        }
    ];
    return (
        <>
            <section className="flex flex-col gap-3">
                <span className="text-2xl font-semibold border-b-2 pb-2 border-zest-600">Best Sellers</span>
                <div className="flex flex-wrap gap-5 justify-start">
                    <div className="w-full text-end text-sm">
                        <button onClick={() => alert("ads")}>Show More</button>
                    </div>
                    {products.map((product, key) => (
                        <Card key={key} itemName={product.itemName} rating={product.rating} price={product.price} imageUrl={product.imageUrl} totalSell={product.totalSell} discount={product.discount} />
                    ))}
                    {/* <Card itemName={"sample"} rating={5} price={100} imageUrl={"src/assets/flowers/sample.png"} totalSell={4} discount={0} />
                    <Card itemName={"sample"} rating={5} price={100} imageUrl={"src/assets/flowers/sample.png"} totalSell={4} discount={0} />
                    <Card itemName={"sample"} rating={5} price={100} imageUrl={"src/assets/flowers/sample.png"} totalSell={4} discount={0} /> */}

                </div>
            </section>
            <section className="flex flex-col gap-3">
                <span className="text-2xl font-semibold border-b-2 pb-2 border-zest-600">Affordable Picks</span>
                <div className="flex flex-wrap gap-5 justify-start">
                    <div className="w-full text-end text-sm">
                        <button onClick={() => alert("ads")}>Show More</button>
                    </div>
                    {products.map((product, key) => (
                        <Card key={key} itemName={product.itemName} rating={product.rating} price={product.price} imageUrl={product.imageUrl} totalSell={product.totalSell} discount={product.discount} />
                    ))}
                </div>
            </section>
            <section className="flex flex-col gap-3">
                <span className="text-2xl font-semibold border-b-2 pb-2 border-zest-600">New Arrivals</span>
                <div className="flex flex-wrap gap-5 justify-start">
                    <div className="w-full text-end text-sm">
                        <button onClick={() => alert("ads")}>Show More</button>
                    </div>
                    {products.map((product, key) => (
                        <Card key={key} itemName={product.itemName} rating={product.rating} price={product.price} imageUrl={product.imageUrl} totalSell={product.totalSell} discount={product.discount} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default ShowProducts