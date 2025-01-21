import React from 'react'
import SampleImage from '../assets/flowers/sample.png'

const Checkoutpage: React.FC = () => {
    return (
        <section className='checkout'>
            <div className='flex flex-row flex-wrap lg:flex-nowrap  justify-evenly gap-2'>
                {/* Sender details */}
                <form className='w-full bg-white h-fit lg:order-1 order-2 relative flex flex-col gap-2 p-5  shadow '>
                    {/*  Sender Information */}
                    <h1 className='font-medium text-xl'>
                        Sender Information
                    </h1>
                    <div className='w-full p-3 gap-5'>
                        <div className='gap-3 lg:flex-none lg:grid lg:grid-cols-2 '>
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
                    {/* Recipient Information */}
                    <h1 className='font-medium text-xl'>
                        Recipient Information
                    </h1>
                    <div className='w-full flex  flex-col  p-3 gap-5'>
                        <div className='gap-3 lg:flex-none lg:grid lg:grid-cols-2 '>
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
                                <input type="text" id='recipient_addressId' placeholder='' name='recipient_address' />
                            </div>
                            <div className='w-full text-start lg:col-span-2'>
                                <label htmlFor="recipient_messageId" className='text-sm text-gray-600'>Optional: Message for recipient</label>
                                <textarea id='recipient_messageId' placeholder='What do you want to say?' name='recipient_message' />
                            </div>
                            <div className='w-full text-start lg:col-span-2'>
                                <label htmlFor="recipient_instructionId" className='text-sm text-gray-600'>Optional: Special instructions for the rider.</label>
                                <textarea id='recipient_instructionId' placeholder='ex. Who to contact upon arrival' name='recipient_instruction' />
                            </div>
                        </div>
                        <div className='w-full flex flex-col lg:flex-row text-start justify-between gap-2 '>
                            <div className='flex gap-2 items-center'>
                                <input type="checkbox" name='send_anonymous' id='send_anonymousId' />
                                <label htmlFor='send_anonymousId' className='text-sm text-gray-900'> Send order as anonymous?</label>
                            </div>
                            <button type='submit' className='bg-zest-600 p-3 lg:w-[300px] w-full rounded text-white'>Order</button>
                        </div>
                    </div>
                </form>
                {/* Order Information */}
                <div className='lg:w-[56%] w-full lg:min-h-[75vh] h-fit lg:order-2 order-1 lg:border-l-2 relative px-2 flex flex-col gap-2'>
                    <h1 className='font-medium text-xl'>
                        Order Summary
                    </h1>
                    <div className='flex gap-3 flex-col'>
                        {/* Total Cost */}
                        <div className='w-full border flex flex-col bg-white p-3 gap-5 shadow rounded'>
                            <div className='flex flex-row '>
                                <div className='flex-grow text-start text-xs text-gray-600'>
                                    Subtotal:
                                </div>
                                <div className='flex-grow text-end text-sm text-persian-rose-500 '>
                                    <p>₱10000</p>
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
                            <div className='flex flex-row border-t-2 pt-5 items-center justify-center'>
                                <div className='flex-grow text-start text-xs font-semibold'>
                                    Total:
                                </div>
                                <div className='flex-grow text-end text-lg font-semibold text-persian-rose-500 '>
                                    <p>₱10000.00</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        {/* Items Here */}
                        <div className='grid grid-cols-4 grid-rows-1 p-2 gap-2 shadow-sm bg-white rounded border'>
                            <div className='w-full flex items-center justify-center relative group col-span-2'>
                                <img src={SampleImage} alt="" className='mw-[50px] h-[60px] object-contain px-5' />
                                <p className=' w-[250px] lg:w-full text-sm text-gray-700 font-medium text-ellipsis overflow-hidden whitespace-nowrap relative group cursor-default'>
                                    Flower Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, sit? Quas beatae quo eveniet odio molestiae itaque a culpa, voluptate omnis commodi, iste dolorum explicabo quis. Nam at ab id.
                                </p>
                                <span className="absolute bg-white shadow-lg p-2 rounded border text-gray-700 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none w-auto left-0 top-full z-10">
                                    Flower Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, sit? Quas beatae quo eveniet odio molestiae itaque a culpa, voluptate omnis commodi, iste dolorum explicabo quis. Nam at ab id.
                                </span>
                            </div>
                            <div className='w-full flex items-center justify-center '>
                                -1+
                            </div>
                            <div className='w-full flex items-center justify-end'>
                                <p className='text-persian-rose-400 text-base font-bold pr-2'>₱1000.00</p>
                            </div>
                            <div className="col-span-4 row-start-2 p-2 border-t-2">
                                <div className='flex flex-row '>
                                    <div className='flex-grow text-start text-xs text-gray-600'>
                                        Delivery Date
                                    </div>
                                    <div className='flex-grow text-end text-sm font-bold text-gray-600 '>
                                        <p>January 01, 2000</p>
                                    </div>
                                </div>
                                <div className='flex flex-row '>
                                    <div className='flex-grow text-start text-xs text-gray-600'>
                                        Delivery Time
                                    </div>
                                    <div className='flex-grow text-end text-sm font-bold text-gray-600 '>
                                        <p>08:00 AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkoutpage