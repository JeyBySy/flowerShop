import React from 'react'
const SummaryTotal: React.FC = () => {
    const titleCategory: string = "w-full text-sm"
    return (
        <div className='w-full flex gap-2 flex-col bg-gray-50 p-5 '>
            <div className='flex items-center'>
                <p className={titleCategory}>Variety:</p>
                <p className='w-full text-end '>Regular 2000</p>
            </div>
            <div className='flex items-center'>
                <p className={titleCategory}>Inclusions: </p>
                <p className='w-full text-end '>None</p>
            </div>
            <div className='flex items-center'>
                <p className={titleCategory}>Select Delivery Date: </p>
                <p className='w-full text-end '>Date</p>
            </div>
            <div className='flex items-center'>
                <p className={titleCategory}>Select Delivery Time: </p>
                <p className='w-full text-end '>Time</p>
            </div>
            <div className='flex items-center'>
                <p className={titleCategory}>Additional: 2000</p>
                <p className='w-full text-end '>Time</p>
            </div>
            <div className='w-full flex justify-evenly py-3 border-t-2  border-slate-200 '>
                <p className='w-full text-start text-persian-rose-500 text-xl font-bold '>Total</p>
                <p className='w-full text-persian-rose-500 text-xl font-bold text-end'>₱1000.00</p>
            </div>
        </div>
    )
}

export default SummaryTotal