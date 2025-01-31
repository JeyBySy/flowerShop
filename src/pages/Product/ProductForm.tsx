import React, { useState } from 'react'
import SampleImage from '../../assets/flowers/sample.png'

interface ProductRating {
    id: string;
    rating: number;
    review: string;
    createdAt: string;
    updatedAt: string;
}


interface ProductProps {
    data: {
        id: string;
        name: string;
        price: string;
        stock: number;
        variety: string[];
        ProductRatings: ProductRating[];
        averageRating: string
    }
}

const ProductForm: React.FC<ProductProps> = ({ data }) => {
    const { id, name, price, stock, variety, averageRating, ProductRatings } = data;

    const [numberInputValue, setnumberInputValue] = useState(1)
    const maxinputvalue: number = 9999

    const handleNumberInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numberValue = Number(e.target.value.replace(/[^0-9]/g, ""))
        if (maxinputvalue >= Number(numberValue)) {
            setnumberInputValue(numberValue)
        }
    }

    const handleIncrement = () => {
        if (!(numberInputValue >= maxinputvalue)) {
            setnumberInputValue(numberInputValue + 1)
        }
    }
    const handleDecrement = () => {
        if (!(numberInputValue <= 0)) {
            setnumberInputValue(numberInputValue - 1)
        }
    }

    const titleCategory: string = "w-full text-xs"
    const valueCategory: string = "w-full text-sm text-end text-persian-rose-500"

    return (
        <form className="w-full h-fit p-5 flex flex-col gap-5 bg-white rounded" data-id={id}>
            <div className="flex flex-col md:flex-row border-b-2 border-slate-200">
                <h1 className="w-[80%] text-2xl capitalize font-medium">{name}</h1>
                <div className="w-[20%] flex gap-2 mt-2 md:mt-0">
                    <p className="flex-grow flex justify-center items-center md:w-[50%] text-center border text-sm">
                        ⭐{averageRating} (<span className="font-semibold">{ProductRatings.length}</span>)
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-end">
                <p className="text-gray-400 line-through text-lg">₱{price}</p>
                <span className="text-sm text-gray-400">50% off</span>
                <p className="text-persian-rose-500 text-xl font-bold">₱24.99</p>
            </div>

            {/* Variety */}
            <div className='flex gap-5 items-center'>
                <p className='text-sm min-w-[70px] '>Variety: </p>
                <div className='flex gap-1 w-full flex-wrap justify-start'>
                    {variety.map((item, index) => (
                        <div key={index} className='border rounded flex px-3 py-3 flex-row justify-start items-center cursor-pointer hover:outline-zest-500 hover:outline transition'>
                            <img src={SampleImage} alt={item} className="w-10 h-8 object-contain" />
                            <span className='text-xs'>{item}</span>
                        </div>
                    ))}
                </div>
            </div>


            {/* Select Date and Time */}
            <div className='flex gap-5 items-center'>
                <p className='text-sm  min-w-[70px] '>Select Delivery Date: </p>
                <div className='flex gap-1'>
                    <input type="date" name="" id="" className='p-2 border' />
                </div>
            </div>
            <div className='flex gap-5 items-center'>
                <p className='text-sm  min-w-[70px] '>Select Delivery Time: </p>
                <div className='flex gap-1'>
                    <input type="time" name="" id="" className='p-2 border' />
                </div>
            </div>

            {/* Quantity */}
            <div className='flex gap-5 items-center'>
                <p className='text-sm'>Quantity: </p>
                <div className="relative flex items-center max-w-[8rem]">
                    <button onClick={handleDecrement} type="button" className="bg-gray-100   hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:outline-none">
                        <svg className="w-3 h-3 text-black-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                        </svg>
                    </button>
                    <input value={numberInputValue} onChange={handleNumberInputValue} type="text" id="quantity-input" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center border  text-sm block w-full py-2.5 focus:outline-none quantityInput" placeholder="999" required />
                    <button onClick={handleIncrement} type="button" className="bg-gray-100  hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:outline-none">
                        <svg className="w-3 h-3 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                        </svg>
                    </button>
                </div>
                {stock ? (
                    <p className='text-xs text-gray-600'>{stock} stocks</p>
                ) : (
                    <p className='text-xs text-gray-600'></p>
                )}
            </div>

            {/* Summary Total */}
            <div className='w-full flex gap-2 flex-col bg-gray-50 p-5 '>
                <div className='flex items-center'>
                    <p className={titleCategory}>Variety:</p>
                    <p className={valueCategory}>Regular 1000 (2x)</p>
                </div>
                <div className='flex items-center'>
                    <p className={titleCategory}>Select Delivery Date: </p>
                    <p className={valueCategory}>Date</p>
                </div>
                <div className='flex items-center'>
                    <p className={titleCategory}>Select Delivery Time: </p>
                    <p className={valueCategory}>Time</p>
                </div>
                <div className='w-full flex justify-evenly py-3 border-t-2  border-slate-200 '>
                    <p className='w-full text-start text-persian-rose-500 text-xl font-bold uppercase '>Total</p>
                    <p className='w-full text-persian-rose-500 text-xl font-bold text-end'>₱2000.00</p>
                </div>
            </div>

            <div className="hidden lg:flex gap-1 justify-end">
                <button className="btn_styles-1 w-full" type="submit">Add to Cart</button>
                <button className="btn_styles-2 w-full">Buy Now</button>
            </div>
            <p className="text-sm italic">
                <span className="text-red-500">Important!</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dolor itaque omnis dignissimos nulla aliquam reprehenderit nesciunt impedit aut? Quaerat nesciunt assumenda nisi earum consectetur asperiores cumque laudantium fugiat ullam!
            </p>


            {/* Mobile */}
            <div className="w-full fixed border bottom-0 left-0 right-0 bg-zest-50 py-2 px-2 lg:hidden flex gap-1 justify-evenly z-10 border-t-2">
                <div className='w-fit flex items-center gap-2'>
                    <p className='text-start text-persian-rose-500 lg:text-base text-xs uppercase '>Total: </p>
                    <p className='text-persian-rose-500 lg:text-base text-sm font-bold text-end'>₱1000.00</p>
                </div>
                <div className='flex flex-row flex-grow gap-1'>
                    <button className="btn_styles-1 w-2/4 text-sm" type="submit">Add to Cart</button>
                    <button className="btn_styles-2 w-2/4 text-sm">Buy Now</button>
                </div>
            </div>
        </form>

    )
}

export default ProductForm