import React from 'react'
import Variety from './Variety';
import Inclusions from './Inclusions';
import SelectDate from './SelectDate';
import Quantity from './Quantity';
// import Recommendation from './Recommendation';
import SummaryTotal from './SummaryTotal';

interface ProductProps {
    data: {
        id: string;
        name: string;
        price: number;
        description: string;
        // Add other product fields as necessary
    };
}

const ProductForm: React.FC<ProductProps> = ({ data }) => {
    return (
        <form className="w-full h-fit p-5 flex flex-col gap-5 bg-white rounded ">
            <div className="flex flex-col md:flex-row border-b-2 border-slate-200">
                <h1 className="w-full text-2xl capitalize font-medium">{data.name}</h1>
                <div className="w-full flex gap-2 mt-2 md:mt-0">
                    <p className="flex-grow flex  justify-center items-center md:w-[25%] text-center border text-sm">
                        Review/s (<span className="font-semibold">100</span>)
                    </p>
                    <p className="flex-grow flex justify-center items-center md:w-[25%] text-center border text-sm">
                        ⭐4.3 (<span className="font-semibold">100</span>)
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-end">
                <p className="text-gray-400 line-through text-lg">₱2000.00</p>
                <span className="text-sm text-gray-400">50% off</span>
                <p className="text-persian-rose-500 text-xl font-bold">₱1000.00</p>
            </div>
            <Variety />
            <Inclusions />
            <SelectDate />
            <Quantity />
            {/* <Recommendation /> */}
            <SummaryTotal />

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