import React, { useEffect, useMemo, useState } from 'react'
import SampleImage from '../assets/flowers/sample.png'
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import useCheckout from '../hooks/useCheckout';
import { Send, User } from 'lucide-react';


const Checkoutpage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isOrderOpen, setIsOrderOpen] = useState(false);

    const selectedCarts = useMemo(() => {
        return Array.isArray(location.state?.selectedCarts)
            ? location.state.selectedCarts
            : [];
    }, [location.state]);

    const { checkoutData, checkoutLoading, checkoutError } = useCheckout(selectedCarts);

    const subtotal = checkoutData.reduce((sum, item) => {
        const total = typeof item.total === 'string' ? parseFloat(item.total) : item.total;
        return sum + (total || 0);
    }, 0);

    const totalQuantity = checkoutData.reduce((sum, item) => {
        const total = typeof item.quantity === 'string' ? parseFloat(item.quantity) : item.quantity;
        return sum + (total || 0);
    }, 0);

    useEffect(() => {
        if (!selectedCarts || selectedCarts.length === 0) {
            navigate('/cart');
        }
    }, [selectedCarts, navigate]);

    return (
        <section className='checkout'>
            {checkoutError && (
                <div className='w-full flex flex-col items-center justify-center h-[50vh]'>
                    <h1 className='text-2xl font-medium'>{checkoutError}</h1>
                </div>
            )}

            {checkoutLoading ? (
                <div className='w-full flex flex-col items-center justify-center h-[50vh]'>
                    <h1 className='text-2xl font-medium'>Loading...</h1>
                </div>
            ) : (
                <div className='flex flex-row flex-wrap lg:flex-nowrap  justify-evenly gap-2'>
                    {checkoutData && selectedCarts ? (
                        <>
                            {/* Sender details */}
                            <form className='w-full h-fit lg:order-1 order-2 relative flex flex-col gap-2'>
                                {/*  Sender Information */}
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className='flex flex-col'>
                                    <div className='w-full px-3 gap-5 bg-white shadow'>
                                        <p className='font-medium text-xl py-3 flex items-center gap-2'>
                                            <User width={20} height={20} /> Sender Information
                                        </p>
                                        <hr />
                                        <div className='w-full flex flex-col px-2 py-5 gap-5'>
                                            <div className='gap-5 lg:flex-none lg:grid lg:grid-cols-2 '>
                                                <div className='w-full text-start'>
                                                    <label htmlFor="sender_firstnameId" className='text-sm text-gray-600'>First Name</label>
                                                    <input type="text" id='sender_firstnameId' placeholder='First Name' name='sender_firstname' />
                                                </div>
                                                <div className='w-full text-start'>
                                                    <label htmlFor="sender_lastnameId" className='text-sm text-gray-600'>Last Name</label>
                                                    <input type="text" id='sender_lastnameId' placeholder='Last Name' name='sender_lastname' />
                                                </div>
                                                <div className='w-full text-start'>
                                                    <label htmlFor="sender_emailId" className='text-sm text-gray-600'>Email</label>
                                                    <input type="text" id='sender_emailId' placeholder='Email' name='sender_email' />
                                                </div>
                                                <div className='w-full text-start'>
                                                    <label htmlFor="sender_numberId" className='text-sm text-gray-600'>Phone Number</label>
                                                    <input type="text" id='sender_numberId' placeholder='Phone Number' name='sender_number' />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </motion.div>
                                {/* Recipient Information */}
                                <motion.div
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className='flex flex-col'>
                                    <div className='w-full px-3 gap-5 bg-white shadow'>
                                        <p className='font-medium text-xl py-3 flex items-center gap-2'>
                                            <Send width={15} height={15} /> Recipient Information
                                        </p>
                                        <hr />
                                        <div className='w-full flex flex-col px-2 py-5 gap-5'>
                                            <div className='gap-5 lg:flex-none lg:grid lg:grid-cols-2'>
                                                <div className='w-full text-start'>
                                                    <label htmlFor="recipient_firstnameId" className='text-sm text-gray-600'>First Name</label>
                                                    <input type="text" id='recipient_firstnameId' placeholder='First Name' name='recipient_firstname' />
                                                </div>
                                                <div className='w-full text-start'>
                                                    <label htmlFor="recipient_lastnameId" className='text-sm text-gray-600'>Last Name</label>
                                                    <input type="text" id='recipient_lastnameId' placeholder='Last Name' name='recipient_lastname' />
                                                </div>
                                                <div className='w-full text-start'>
                                                    <label htmlFor="recipient_numberId" className='text-sm text-gray-600'>Phone Number</label>
                                                    <input type="text" id='recipient_numberId' placeholder='Recipient Phone Number' name='recipient_number' />
                                                </div>
                                                <div className='w-full text-start'>
                                                    <label htmlFor="recipient_addressId" className='text-sm text-gray-600'>Address</label>
                                                    <input type="text" id='recipient_addressId' placeholder='Recipient Address' name='recipient_address' />
                                                </div>
                                                <div className='w-full text-start lg:col-span-2'>
                                                    <label htmlFor="recipient_messageId" className='text-sm text-gray-600'>Optional: Message for recipient</label>
                                                    <textarea id='recipient_messageId' placeholder='What do you want to say?' name='recipient_message' />
                                                </div>
                                                <div className='w-full text-start lg:col-span-2'>
                                                    <label htmlFor="recipient_instructionId" className='text-sm text-gray-600'>Optional: Special instructions for the rider.</label>
                                                    <textarea id='recipient_instructionId' placeholder='ex. Who to contact upon arrival?' name='recipient_instruction' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </form>
                            {/* Order Information */}
                            <div className='lg:w-[56%] w-full lg:min-h-[75vh] h-fit lg:order-2 order-1  relative px-2 flex flex-col gap-4'>
                                {/* Voucher input */}
                                <motion.div
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className='w-full text-start bg-white p-5 grid grid-row-2 shadow'>
                                    <label htmlFor="" className='text-sm text-gray-600 capitalize w-full'>Voucher Code: </label>
                                    <div className='flex'>
                                        <input type="text" id='voucher_code' placeholder='Enter Voucher Code' name='voucher_code' />
                                        <button className='bg-zest-600 hover:bg-zest-500 px-3 py-1 text-white'>Send</button>
                                    </div>
                                </motion.div>

                                {/* Total Cost */}
                                <motion.div
                                    initial={{ opacity: 0, y: -80 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className='w-full border flex flex-col bg-white p-5 gap-5 shadow rounded'>
                                    <div className="flex justify-between items-center">
                                        <p className='font-medium text-xl'>
                                            Checkout Order
                                        </p>
                                    </div>
                                    <hr />
                                    <div className='flex flex-row '>
                                        <div className='flex-grow text-start text-xs text-gray-600'>
                                            Subtotal:
                                        </div>
                                        <div className='flex-grow text-end text-sm text-persian-rose-500 '>
                                            <p>₱{subtotal}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row '>
                                        <div className='flex-grow text-start text-xs text-gray-600'>
                                            Shipping:
                                        </div>
                                        <div className='flex-grow text-end text-sm  text-persian-rose-500 '>
                                            <p>Free</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row items-center justify-center'>
                                        <div className='flex-grow text-start text-lg text-gray-800'>
                                            Total:
                                        </div>
                                        <div className='flex-grow text-end text-lg font-semibold text-persian-rose-500 '>
                                            <p>₱{subtotal}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='w-full flex flex-col text-start justify-between gap-2 '>
                                        <div className='flex gap-2 items-center w-full'>
                                            <input type="checkbox" name='send_anonymous' id='send_anonymousId' />
                                            <label htmlFor='send_anonymousId' className='text-sm text-gray-900'> Send order as anonymous?</label>
                                        </div>
                                        <button className='w-full bg-zest-600 hover:bg-zest-500 px-10 py-3 mt-4 rounded text-white'>Place Order</button>
                                    </div>
                                </motion.div>
                                <div className='w-full bg-white grid grid-row-2'>
                                    <div className='w-full flex justify-between z-20 bg-white shadow p-5'>
                                        <p className="text-gray-600 text-base w-fit">
                                            Order Products <span className='text-persian-rose-400 text-sm'>({totalQuantity})</span>
                                        </p>
                                        <p
                                            className="text-zest-600 hover:underline text-sm cursor-pointer w-fit"
                                            onClick={() => setIsOrderOpen(prev => !prev)}>
                                            {isOrderOpen ? 'Hide Order' : 'Show More'}
                                        </p>
                                    </div>
                                    {isOrderOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className='flex gap-2 flex-col max-h-[400px] overflow-y-auto'>
                                            {/* Items Here */}
                                            {checkoutData.map((item, index) => (
                                                <motion.div
                                                    key={index}
                                                    className='grid grid-cols-3 grid-rows-1 p-2 gap-2 shadow-sm rounded border bg-gray-50'>
                                                    <div className='w-full flex items-center justify-center relative group col-span-2'>
                                                        <img src={SampleImage} alt="" className='mw-[50px] h-[60px] object-contain px-5' />
                                                        <p className=' w-[250px] flex gap-2 lg:w-full text-sm text-gray-600 font-medium text-ellipsis overflow-hidden whitespace-nowrap relative group cursor-default'>
                                                            {item.Product?.name}
                                                            <span className='text-persian-rose-400'>x{item.quantity}</span>
                                                        </p>
                                                        <span className="absolute bg-white shadow-lg p-2 rounded border text-gray-700 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none w-auto left-0 top-full z-10">
                                                            {item.Product?.name}
                                                        </span>
                                                    </div>
                                                    <div className='w-full flex items-center justify-end'>
                                                        <p className='text-persian-rose-400 text-base font-bold pr-2'>₱{subtotal.toFixed(2)}</p>
                                                    </div>
                                                    <div className="col-span-4 row-start-2 p-2 border-t-[1px]">
                                                        <div className='flex flex-row '>
                                                            <div className='flex-grow text-start text-sm text-gray-600'>
                                                                Delivery Date
                                                            </div>
                                                            <div className='flex-grow text-end text-sm font-bold text-gray-600 '>
                                                                <p>{item.deliveryDate}</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex flex-row '>
                                                            <div className='flex-grow text-start text-sm text-gray-600'>
                                                                Delivery Time
                                                            </div>
                                                            <div className='flex-grow text-end text-sm font-bold text-gray-600 '>
                                                                <p>{item.deliveryTime}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                            <hr />
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className='w-full flex flex-col items-center justify-center h-[50vh]'>
                            <h1 className='text-2xl font-medium'>No item to order go back to cart</h1>
                        </div>
                    )}
                </div>
            )
            }


        </section >
    )
}

export default Checkoutpage