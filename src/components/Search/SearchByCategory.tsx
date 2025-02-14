import { useState } from 'react';
import Card from '../Global/Card';
import SampleImage from '../../assets/flowers/sample.png';
import CardSkeleton from '../Global/Skeleton/CardSkeleton';
import { Search } from 'lucide-react';

interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    stock: number;
    categoryId: string;
    subCategoryId: string;
    variety: string[];
    createdAt: string;
    updatedAt: string;
}

interface CategoryProps {
    data: Product[];
    loading: boolean;
    totalPages: number;
    totalItems: number
}

const SearchByCategory: React.FC<CategoryProps> = ({ data, loading, totalPages, totalItems }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOption, setSortOption] = useState("1");

    // Filtering and Sorting Products
    const filteredProducts = data
        .filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            switch (sortOption) {
                case "1": // A-Z
                    return a.name.localeCompare(b.name);
                case "2": // Latest
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                case "3": // Price Low to High
                    return parseFloat(a.price) - parseFloat(b.price);
                case "4": // Price High to Low
                    return parseFloat(b.price) - parseFloat(a.price);
                default:
                    return 0;
            }
        });

    // No record found
    if (data.length === 0 && !loading) {
        return (
            <div className="flex justify-center items-center h-[50vh]">
                <p className="text-lg font-semibold text-slate-800">No products found.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-5">
            {/* Sorting and Search Bar */}
            <div className="flex gap-3 text-sm text-slate-800">
                <select
                    name="sortSearch"
                    className="px-2 py-3 rounded font-medium"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="1" className="capitalize">A-Z</option>
                    <option value="2" className="capitalize">Latest</option>
                    <option value="3" className="capitalize">Price from low to high</option>
                    <option value="4" className="capitalize">Price from high to low</option>
                </select>
                <div className="w-2/4 lg:w-[20%] flex px-2">
                    <input
                        placeholder="Search"
                        type="text"
                        className="w-full text-xs p-1 rounded rounded-t-none rounded-b-none focus:outline-none border border-persian-rose-500 border-r-0 px-2"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} />
                    <button className="px-3 py-1 border-l-0 bg-brilliant-rose-500 text-white border border-persian-rose-500">
                        <Search />
                    </button>
                </div>
            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-2 gap-2 xs:gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {loading && (
                    <CardSkeleton cards={12} />
                )}

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
                    <p className="text-lg font-semibold text-slate-800 text-center w-[100%]">No products found.</p>
                )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-5">
                <button
                    disabled={1 === 1}
                    // onClick={() => setPage(1 - 1)}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                >
                    Prev
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index + 1}
                        // onClick={() => setPage(index + 1)}
                        className={`px-3 py-1 border rounded ${1 === index + 1 ? 'bg-brilliant-rose-500 text-white' : ''}`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    disabled={1 === 1}
                    // onClick={() => setPage(1 + 1)}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default SearchByCategory;
