import React from 'react'
import SampleImage from '../../assets/flowers/sample.png'

const Recommendation: React.FC = () => {
    return (
        <div className='flex flex-col gap-5'>
            <p className='text-sm  min-w-[70px] '>Choose Additional Product: </p>
            <div className='flex gap-1'>
                <div className='border flex px-3 py-3 flex-row justify-start items-center cursor-pointer'>
                    <img src={SampleImage} alt="" className=" w-10 h-8 object-contain" />
                    <span className='text-xs '>None</span>
                </div>
                <div className='border flex px-3 py-3 flex-row justify-start items-center cursor-pointer'>
                    <img src={SampleImage} alt="" className=" w-10 h-8 object-contain" />
                    <span className='text-xs'>Deluxe</span>
                </div>
            </div>
        </div>
    )
}

export default Recommendation