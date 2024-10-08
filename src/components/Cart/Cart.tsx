import React from 'react'
import SampleImage from '../../assets/flowers/sample.png'
import { Link } from 'react-router-dom'

const Cart: React.FC = () => {
    return (
        <section className='bg-white mt-5 lg:w-[60%] md:w-full w-full p-5 rounded shadow'>
            <div className='flex flex-col gap-2 min-h-[60vh]  relative'>
                <h1 className='text-xl border-b-2'> Orders </h1>
                <div className='flex'>
                    <div className='flex-grow-0 flex items-center justify-center  p-3'>
                        <input type="checkbox" name="" id="" />
                    </div>
                    <div className='flex items-center justify-center  p-3'>
                        <img src={SampleImage} alt="" className='min-w-10 h-9 object-contain px-5' />
                        <p className='lg:w-[300px] text-sm'>Namedasdqwdasd sad qwd asd Lorem ipsum dolor lorem sit amet consectetur adipisicing elit. O.</p>
                    </div>
                    <div className='flex-grow flex items-center justify-center  p-3'>
                        -1+
                    </div>
                    <div className='flex-grow flex items-center justify-center  p-3'>
                        Summray
                    </div>
                    <div className='flex-grow-0 flex items-center justify-center  p-3'>
                        Delete
                    </div>
                </div>


                <div className='flex w-full lg:absolute bottom-0 border-t-2 p-5 items-center justify-center gap-2 bg-white'>
                    <div className='flex gap-2'>
                        <input type="checkbox" name="" id="selectAllId" />
                        <label htmlFor='selectAllId'> Select all</label>
                    </div>
                    <div className=' flex-grow flex items-center gap-2 justify-end'>
                        <p className='text-start text-sm '>Items: 2 </p>
                        <p className='text-start text-persian-rose-500 lg:text-base text-sm uppercase '>Total: </p>
                        <p className='text-persian-rose-500 text-xl font-bold text-end'>₱1000.00</p>
                    </div>
                    <div className='flex-grow-0 border flex justify-end'>
                        <Link to={'/checkout'} className="bg-avocado-600 p-2 rounded w-full px-10 text-white" type="submit">Checkout</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart