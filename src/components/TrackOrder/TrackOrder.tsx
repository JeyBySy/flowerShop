import React from 'react'

const TrackOrder: React.FC = () => {
    return (
        <div className="min-h-screen flex justify-center mt-5">
            <div className="w-full max-w-md">
                <div className="bg-blue-50 p-5 rounded shadow ">
                    <form action="" className='flex flex-col gap-2'>
                        <p className='border-b-2 text-2xl font-bold pb-2'>Track Order</p>
                        <label htmlFor="orderNumber" className='text-sm font-medium text-gray-700'>Order Number</label>
                        <input type="text" placeholder='Order number' className='w-full p-2 ' id='orderNumber' />
                        <label htmlFor="emailId" className='text-sm font-medium text-gray-700'>Email</label>
                        <input type="email" placeholder='Email' className='w-full p-2 ' id='emailId' />
                        <button className='p-2 bg-zest-700 mt-5 text-white rounded'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TrackOrder