import React from 'react'
import SampleImage from '../../assets/flowers/sample.png'
import Variety from './Variety';
import Inclusions from './Inclusions';
import SelectDate from './SelectDate';
import Quantity from './Quantity';
import Recommendation from './Recommendation';
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

const Product: React.FC<ProductProps> = ({ data }) => {
    return (
        <section className='flex flex-col gap-5'>
            <div className='flex gap-4'>
                {/* Image carousel */}
                <div className='w-full flex gap-1 flex-col '>
                    <div className='flex flex-row'>
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
                    <div className='flex flex-col '>
                        <div className='flex flex-col '>
                            <p className="text-xl font-semibold py-2 border-b-2 border-slate-200">Description</p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur culpa, veniam suscipit ex, repellat facilis tempore distinctio repudiandae autem officiis consequuntur, excepturi dolor quas? Veritatis iste repellendus ab aut corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem tempore autem doloribus aperiam enim dignissimos iste rem voluptate, placeat, deserunt excepturi eum repudiandae esse earum. Ratione consequuntur unde hic est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi natus saepe beatae modi, minus qui rem iusto, eligendi, amet itaque ipsam voluptatem cumque velit est explicabo earum voluptates placeat reprehenderit?
                        </div>
                        <div className='flex flex-col'>
                            <p className="text-xl font-semibold  py-2 border-b-2 border-slate-200">Reviews</p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed neque debitis necessitatibus sunt deserunt adipisci ea, nihil, nam ex eveniet animi. Deserunt facere numquam sequi fugiat aut veritatis? Explicabo, eos.
                        </div>
                    </div>
                </div>

                {/* Product Details */}
                <form action="" className='w-full h-fit px-10 py-5 flex flex-col gap-5 bg-white rounded'>
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
                    <SummaryTotal />
                    <div className='flex gap-1 flex-row justify-end w-full relative'>
                        <div className='gap-2 flex items-end place-items-baseline'>
                            <button className='btn_styles-1 h-fit' type='submit'>add to cart</button>
                            <button className='btn_styles-2 h-fit'>Buy now</button>
                        </div>
                    </div>
                    <p className='text-sm italic'><span className='text-red-500'>Important!</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex dolor itaque omnis dignissimos nulla aliquam reprehenderit nesciunt impedit aut? Quaerat nesciunt assumenda nisi earum consectetur asperiores cumque laudantium fugiat ullam!</p>
                </form>

            </div>

        </section >
    )
}

export default Product