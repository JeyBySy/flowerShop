import React from 'react'
import SampleImage from '../../assets/flowers/sample.png'
import Variety from './Variety';
import Inclusions from './Inclusions';
import SelectDate from './SelectDate';
import Quantity from './Quantity';
import Recommendation from './Recommendation';
interface ProductProps {
    data: {
        id: string;
        name: string;
        price: number;
        description: string;
        // Add other product fields as necessary
    };
}

const Product: React.FC<ProductProps> = ({ data }) => {
    return (
        <section className='flex flex-col gap-5'>
            <div className='flex h-[600px]'>
                {/* Image carousel */}
                <div className='w-full flex gap-1 '>
                    <div className='w-[150px] flex flex-col gap-1'>
                        <div className='border h-[100px] flex justify-center cursor-pointer'>
                            <img src={SampleImage} alt="" className="w-[100%] h-full object-contain " />
                        </div>
                        <div className='border  h-[100px] flex justify-center cursor-pointer'>
                            <img src={SampleImage} alt="" className="w-[100%] h-full object-contain " />
                        </div>
                        <div className='border  h-[100px] flex justify-center cursor-pointer'>
                            <img src={SampleImage} alt="" className="w-[100%] h-full object-contain " />
                        </div>
                        <div className='border  h-[100px] flex justify-center cursor-pointer'>
                            <img src={SampleImage} alt="" className="w-[100%] h-full object-contain " />
                        </div>
                        <div className='border h-[100px] flex justify-center cursor-pointer'>
                            <img src={SampleImage} alt="" className="w-[100%] h-full object-contain " />
                        </div>

                    </div>
                    <div className='flex w-[60%] border h-[450px] items-center justify-center mx-auto'>
                        <img src={SampleImage} alt="" className="w-full h-full object-contain " />
                    </div>
                </div>
                {/* Product Details */}

                <form action="" className='w-full px-5 pt-5 flex flex-col gap-5 '>
                    <div className='flex border-b-2  border-slate-200'>
                        <h1 className='w-full flex-grow text-2xl capitalize font-medium'>
                            {data.name}
                        </h1>
                        <p className='w-[25%] flex justify-center items-center border text-sm '>Review/s (<span className='font-semibold'>100</span> )</p>
                        <p className='w-[25%] flex justify-center items-center border  text-sm'>⭐4.3 ( <span className='font-semibold'>100</span> )</p>

                    </div>
                    <div className='w-full items-end flex flex-col  '>
                        <p className=' text-gray-400 line-through text-lg '>₱2000.00</p>
                        <span className='text-sm text-gray-400'>50% off</span>
                        <p className='text-persian-rose-500 text-xl font-bold'>₱1000.00</p>
                    </div>
                    <Variety />
                    <Inclusions />
                    <SelectDate />
                    <Quantity />
                    <Recommendation />
                    <div className='flex gap-1 flex-row justify-evenly w-full border relative'>
                        <div className='w-full'>
                            Total: <span>1000</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ullam numquam. Reprehenderit, distinctio beatae rerum iste quas modi explicabo expedita quasi odit omnis excepturi sequi corporis, reiciendis aspernatur! Facere, nostrum.
                        </div>
                        <div className='gap-2 flex place-items-baseline'>
                            <button className='btn_styles-1 h-fit'>add to cart</button>
                            <button className='btn_styles-2 h-fit'>Buy now</button>
                        </div>
                    </div>
                </form>

            </div>
            <div>
                <span className="text-xl font-semibold border-b-2 py-2 border-slate-200">Description</span>
            </div>
            <div>
                <span className="text-xl font-semibold border-b-2 py-2 border-slate-200">Reviews</span>
            </div>
        </section >
    )
}

export default Product