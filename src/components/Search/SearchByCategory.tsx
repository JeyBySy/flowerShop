// import React, { useEffect, useState } from 'react'
import Card from '../Global/Card'
import SampleImage from '../../assets/flowers/sample.png'
import CardSkeleton from '../Global/Skeleton/CardSkeleton'

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
    loading: boolean
}

const SearchByCategory: React.FC<CategoryProps> = ({ data = [], loading }) => {
    const cardStyle = "grid grid-cols-2 gap-2 xs:gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"

    return (
        <div className='flex flex-col gap-5'>
            <div className='flex gap-3 text-sm text-slate-800'>
                <select name="sortSearch" className='px-2 py-4 rounded font-medium' defaultValue={1}>
                    <option value="1" className='capitalize'>A-Z</option>
                    <option value="2" className='capitalize'>Latest</option>
                    <option value="3" className='capitalize'>Price from low to high</option>
                    <option value="4" className='capitalize'>Price from high to low</option>
                </select>
                <select name="budgetSearch" className='p-2 py-4 rounded font-medium' defaultValue={1}>
                    <option value="1" className='capitalize'>Budget</option>
                    <option value="2" className='capitalize'>Less than 1000</option>
                    <option value="3" className='capitalize'>1000 and above</option>
                </select>
            </div>
            <div className={cardStyle}>
                {loading ? (
                    <CardSkeleton cards={4} />  // Show skeletons while loading
                ) : (
                    data.map((product, key) => (
                        <Card
                            key={key}
                            id={product.id}
                            itemName={product.name}
                            // rating={parseFloat(product.averageRating) || 0}
                            price={parseFloat(product.price)}
                            imageUrl={SampleImage}
                        // totalSell={product.totalSell}
                        // discount={product.discount}
                        />
                    ))
                )}

            </div>
        </div>
    );
}

export default SearchByCategory