import React from 'react'
import SampleImage from '../../assets/flowers/sample.png'

const Inclusions: React.FC = () => {
    return (
        <div className='flex gap-5 items-center'>
            <p className='text-sm  min-w-[70px] '>Inclusions: </p>
            <div className='flex gap-1'>
                <div className='border rounded flex px-3 py-3 flex-row justify-start items-center cursor-pointer  hover:outline-zest-500 hover:outline transition'>
                    <img src={SampleImage} alt="" className=" w-10 h-8 object-contain" />
                    <span className='text-xs '>None</span>
                </div>
                <div className='border rounded flex px-3 py-3 flex-row justify-start items-center cursor-pointer  hover:outline-zest-500 hover:outline transition'>
                    <img src={SampleImage} alt="" className=" w-10 h-8 object-contain" />
                    <span className='text-xs'>Deluxe</span>
                </div>
            </div>
        </div>
    )
}

export default Inclusions