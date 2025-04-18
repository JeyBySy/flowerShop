import React from 'react'
import { motion } from 'framer-motion'

const TrackOrderpage: React.FC = () => {
    return (
        <section>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="min-h-[60vh] items-center flex justify-center mt-5">
                <div className="w-full lg:max-w-md ">
                    <div className="bg-white p-5 rounded shadow ">
                        <form action="" className='flex flex-col gap-2'>
                            <p className='border-b-2 text-2xl font-bold pb-2'>Track Order</p>
                            <label htmlFor="orderNumber" className='text-sm font-medium text-gray-700'>Order Number</label>
                            <input type="text" placeholder='Order number' className='w-full p-2 border ' id='orderNumber' />
                            <label htmlFor="emailId" className='text-sm font-medium text-gray-700'>Email</label>
                            <input type="email" placeholder='Email' className='w-full p-2  border' id='emailId' />
                            <button className='p-2 bg-zest-700 mt-5 text-white rounded'>Send</button>
                        </form>
                    </div>
                </div>
            </motion.div>
        </section >
    )
}

export default TrackOrderpage