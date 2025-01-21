import React from 'react'
import SampleImage from '../..//assets/flowers/sample.png'
import { Link } from 'react-router-dom'
import './cart.css'

const Cartpage: React.FC = () => {
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
                        <div className="relative flex items-center max-w-[8rem]">
                            <button type="button" >
                                <svg className="w-3 h-3 text-black-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                                </svg>
                            </button>
                            <input type="text" id="quantity-input" className="h-11 text-center text-sm block w-full py-2.5 focus:outline-none quantityInput" placeholder="999" required />
                            <button type="button" >
                                <svg className="w-3 h-3 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </button>
                        </div>
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

export default Cartpage