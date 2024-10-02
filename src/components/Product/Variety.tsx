import React from 'react'
import SampleImage from '../../assets/flowers/sample.png'

const Variety: React.FC = () => {
    return (
        <div className='flex gap-5 items-center'>
            <p className='text-sm min-w-[70px] '>Variety: </p>
            <div className='flex gap-1 w-full flex-wrap justify-start'>
                <div className='border rounded flex px-3 py-3 flex-row justify-start items-center cursor-pointer hover:outline-zest-500 hover:outline transition'>
                    <img src={SampleImage} alt="" className=" w-10 h-8 object-contain" />
                    <span className='text-xs ='>Regular</span>
                </div>
                <div className='border rounded flex px-3 py-3 flex-row justify-start items-center cursor-pointer hover:outline-zest-500 hover:outline transition'>
                    <img src={SampleImage} alt="" className=" min-w-10 h-8 object-contain" />
                    <span className='text-xs '>Deluxe</span>
                </div>
            </div>
        </div>
    )
}

export default Variety