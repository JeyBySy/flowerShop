import React from 'react'
const SummaryTotal: React.FC = () => {
    const titleCategory: string = "w-full text-xs"
    const valueCategory: string = "w-full text-sm text-end text-persian-rose-500"
    return (
        <div className='w-full flex gap-2 flex-col bg-gray-50 p-5 '>
            <div className='flex items-center'>
                <p className={titleCategory}>Variety:</p>
                <p className={valueCategory}>Regular 1000 (2x)</p>
            </div>
            <div className='flex items-center'>
                <p className={titleCategory}>Inclusions: </p>
                <p className={valueCategory}>None</p>
            </div>
            <div className='flex items-center'>
                <p className={titleCategory}>Select Delivery Date: </p>
                <p className={valueCategory}>Date</p>
            </div>
            <div className='flex items-center'>
                <p className={titleCategory}>Select Delivery Time: </p>
                <p className={valueCategory}>Time</p>
            </div>
            <div className='flex items-center'>
                <p className={titleCategory}>Additional: </p>
                <p className={valueCategory}>₱2000.00</p>
            </div>
            <div className='w-full flex justify-evenly py-3 border-t-2  border-slate-200 '>
                <p className='w-full text-start text-persian-rose-500 text-xl font-bold uppercase '>Total</p>
                <p className='w-full text-persian-rose-500 text-xl font-bold text-end'>₱2000.00</p>
            </div>
        </div>
    )
}

export default SummaryTotal