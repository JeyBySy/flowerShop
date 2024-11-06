import React, { useState } from 'react'

const Quantity: React.FC = () => {

    const [numberInputValue, setnumberInputValue] = useState(1)
    const maxinputvalue: number = 9999

    const handleNumberInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numberValue = Number(e.target.value.replace(/[^0-9]/g, ""))
        if (maxinputvalue >= Number(numberValue)) {
            setnumberInputValue(numberValue)
        }
    }

    const handleIncrement = () => {
        if (!(numberInputValue >= maxinputvalue)) {
            setnumberInputValue(numberInputValue + 1)
        }
    }
    const handleDecrement = () => {
        if (!(numberInputValue <= 0)) {
            setnumberInputValue(numberInputValue - 1)
        }
    }


    return (
        <div className='flex gap-5 items-center'>
            <p className='text-sm'>Quantity: </p>
            <div className="relative flex items-center max-w-[8rem]">
                <button onClick={handleDecrement} type="button" className="bg-gray-100   hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:outline-none">
                    <svg className="w-3 h-3 text-black-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                    </svg>
                </button>
                <input value={numberInputValue} onChange={handleNumberInputValue} type="text" id="quantity-input" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center border  text-sm block w-full py-2.5 focus:outline-none quantityInput" placeholder="999" required />
                <button onClick={handleIncrement} type="button" className="bg-gray-100  hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:outline-none">
                    <svg className="w-3 h-3 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Quantity