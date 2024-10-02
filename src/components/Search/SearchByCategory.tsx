import React from 'react'
import Card from '../Global/Card'
import SampleImage from '../../assets/flowers/sample.png'

interface Category {
    category?: string
}

const SearchByCategory: React.FC<Category> = ({ category = "None" }) => {
    return (
        <div className='flex flex-col gap-5'>
            Data: {category}
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
            <div className='flex gap-5'>
                <Card itemName={"sample"} rating={5} price={100} imageUrl={SampleImage} totalSell={4} discount={0} />

            </div>
        </div>
    )
}

export default SearchByCategory