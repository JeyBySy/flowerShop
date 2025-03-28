import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductBaseCategory } from '../hooks/useProductBaseCategory';
import Card from '../components/Global/Card';
import CardSkeleton from '../components/Global/Skeleton/CardSkeleton';
import SampleImage from '../assets/flowers/sample.png';

type SearchParams = {
    categoryName?: string;
    subCategoryName?: string;
    limit?: string;
};

const SearchPage: React.FC = () => {
    const { categoryName, subCategoryName } = useParams<SearchParams>();
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("ALP");
    const [limitProduct, setLimitProduct] = useState('12');
    const [page, setPage] = useState(1);

    const { products, subCategory, totalPages, totalItems, loading, error } = useProductBaseCategory(categoryName || "", subCategoryName || "", sortOption || "PHL", limitProduct || "12", page);

    useEffect(() => {
        setLimitProduct("12");
        setPage(1);
    }, [categoryName, subCategoryName, sortOption]);

    useEffect(() => {
        setPage((prevPage) => (prevPage > totalPages ? (totalPages > 0 ? totalPages : 1) : prevPage));
        setSearchTerm('')
    }, [totalPages]);

    // Filtering and Sorting Products
    const filteredProducts = products
        .filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )

    return (
        <section className="min-h-screen">
            {!error ? (
                <div className="lg:flex lg:flex-col gap-5">
                    <div className="lg:grid lg:grid-cols-[auto_1fr] items-center">
                        <div className="w-full p-10 lg:p-20 text-center">
                            <p className="text-4xl capitalize font-bold text-brilliant-rose-500">{subCategoryName}</p>
                        </div>
                        <div className="w-full p-2">
                            <p className="text-3xl font-light">{subCategory?.description}</p>
                        </div>
                    </div>

                    {/* Sorting and Search Bar */}
                    <div className="flex gap-2 text-sm text-slate-800">
                        <select
                            className="px-2 py-3 rounded font-medium"
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                        >
                            <option value="ALP">A-Z</option>
                            <option value="LTS">Latest</option>
                            <option value="PLH">Price Low to High</option>
                            <option value="PHL">Price High to Low</option>
                        </select>
                        <div className="flex px-2">
                            <input
                                placeholder="Search"
                                type="text"
                                className="w-[250px] text-xs p-1  focus:outline-none border border-persian-rose-500 px-2"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Product Cards */}
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 ">
                        {loading ? <CardSkeleton cards={12} /> : null}

                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <Card
                                    key={product.id}
                                    id={product.id}
                                    itemName={product.name}
                                    price={parseFloat(product.price)}
                                    imageUrl={SampleImage}
                                    rating={0}
                                    totalSell={0}
                                    discount={0}
                                />
                            ))
                        ) : (
                            !loading && <p className="text-lg font-semibold text-slate-800">No products found.</p>
                        )}
                    </div>
                    {/* Pagination */}
                    <div className='flex justify-end mb-10 gap-5'>
                        <div className="flex gap-2 flex-wrap">
                            <button
                                disabled={page <= 1}
                                onClick={() => setPage(page - 1)}
                                className="px-3 py-1 border rounded disabled:opacity-50"
                            >
                                Prev
                            </button>
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index + 1}
                                    onClick={() => setPage(index + 1)}
                                    className={`px-3 py-1 border rounded ${page === index + 1 ? 'bg-brilliant-rose-500 text-white' : ''}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button
                                disabled={page === totalPages}
                                onClick={() => setPage(page + 1)}
                                className="px-3 py-1 border rounded disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                        <select
                            className="px-4 py-3 rounded font-medium"
                            value={limitProduct}
                            onChange={(e) => setLimitProduct(e.target.value)}
                        >
                            <option value="12">12</option>
                            <option value="30">30</option>
                            <option value="60">60</option>
                            <option value={totalItems}>All ({totalItems})</option>
                        </select>
                    </div>
                </div>
            ) : (
                <p className="text-red-400 font-bold">Error: {error}
                </p>
            )}
        </section>
    );
};

export default SearchPage;
