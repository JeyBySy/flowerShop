import React from 'react'
import SampleImage from '../..//assets/flowers/sample.png'
import { Link } from 'react-router-dom'
import './cart.css'
import { useCart } from '../../context/CartContext'

const Cartpage: React.FC = () => {

    const { cart } = useCart()
    return (
        <section className='bg-white mt-5 lg:w-[75%] md:w-full w-full p-5 rounded shadow mb-10'>
            <div className='flex flex-col gap-2 relative'>
                <div className="flex flex-col">
                    <h1 className="text-2xl font-semibold border-b-2 mb-2"> Orders </h1>

                    <div className="overflow-x-auto">
                        <table className="w-full border-gray-300">
                            {/* Table Header */}
                            <thead className="bg-gray-50 text-gray-500 text-sm">
                                <tr>
                                    <th className="w-12 text-center p-3 ">#</th>
                                    <th className="text-center p-3 ">Product</th>
                                    <th className="w-[25%] text-center p-3 ">Variety</th>
                                    <th className="w-20 text-center p-3 ">Quantity</th>
                                    <th className="w-32 text-center p-3 ">Total Price</th>
                                    <th className="w-32 text-center p-3 ">Delivery Date</th>
                                    <th className="w-32 text-center p-3 ">Delivery Time</th>
                                    <th className="w-24 text-center p-3 ">Actions</th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody>
                                {cart?.CartItems && cart.CartItems.length > 0 ? (
                                    cart.CartItems.map((item, index) => (
                                        <>
                                            <tr key={index} data-id={item.Product?.id} className="hover:bg-gray-100 hover:cursor-pointer">
                                                <td className="text-center py-10">
                                                    <input type="checkbox" />
                                                </td>
                                                <td className='py-5 px-2'>
                                                    <div className="flex items-center">
                                                        <div className="flex items-center justify-center w-[70px] h-[70px] shrink-0">
                                                            <img src={SampleImage} alt="" className="w-full h-full object-contain" />
                                                        </div>
                                                        <p className="text-sm px-2 flex-grow">
                                                            {item.Product?.name}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className="p-3">
                                                    {Array.isArray(item?.variety)
                                                        ? item.variety.map((v, i) => {
                                                            const parsedVariety = typeof v === "string" ? JSON.parse(v) : v;
                                                            return (
                                                                <div className={`grid grid-cols-4 text-center text-sm text-gray-500 py-1 ${i !== item.variety.length - 1 ? 'border-b border-gray-300' : ''}`} key={i}>
                                                                    <p className='text-start'>{parsedVariety.name} </p>
                                                                    <span className='text-start text-persian-rose-600'> (₱{item.Product.price})</span>
                                                                    <p className='flex items-center justify-center'>x</p>
                                                                    <p className="text-end text-persian-rose-600">{parsedVariety.quantity}</p>
                                                                </div>
                                                            );
                                                        })
                                                        : <p className="text-gray-500 text-sm">No variety available</p>
                                                    }
                                                </td>
                                                <td className="text-center p-3 ">{item.quantity}</td>
                                                <td className="text-center p-3 text-persian-rose-600">₱ {item.total}</td>
                                                <td className="text-center p-3 ">
                                                    <p className='w-full text-sm text-persian-rose-600'>{item.deliveryDate}</p>
                                                </td>
                                                <td className="text-center p-3 ">
                                                    <p className=' w-full text-sm text-persian-rose-600'>{item.deliveryTime}</p>
                                                </td>
                                                <td className="text-center p-3 ">
                                                    <div className="flex gap-2 justify-center">
                                                        <button className="text-red-500">Delete</button>
                                                        <button className="text-red-500">Delete</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </>
                                    ))
                                ) : (
                                    <tr>
                                        <td className="w-full text-center text-gray-500 py-3 border">
                                            No items in the cart
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className='flex w-full bottom-0 border-t-2 px-4 py-5 items-center justify-center gap-2 bg-white'>
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
            </div >
        </section >
    )
}

export default Cartpage