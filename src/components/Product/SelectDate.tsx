import React from 'react'

const SelectDate: React.FC = () => {
    return (
        <>
            <div className='flex gap-5 items-center'>
                <p className='text-sm  min-w-[70px] '>Select Delivery Date: </p>
                <div className='flex gap-1'>
                    <input type="date" name="" id="" className='p-2 border' />
                </div>
            </div>
            <div className='flex gap-5 items-center'>
                <p className='text-sm  min-w-[70px] '>Select Delivery Time: </p>
                <div className='flex gap-1'>
                    <input type="time" name="" id="" className='p-2 border' />
                </div>
            </div>
        </>
    )
}

export default SelectDate