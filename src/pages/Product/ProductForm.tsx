import React, { useState } from 'react'
import SampleImage from '../../assets/flowers/sample.png'
import { ProductFormProps } from '../../types/productTypes'
import dayjs from 'dayjs'
import { motion } from 'framer-motion';
import { useDeliveryDateTime } from '../../hooks/useDeliveryDateTime';
import { useCart } from '../../hooks/useCart'
import { useToast } from '../../hooks/useToast';

const ProductForm: React.FC<ProductFormProps> = ({ data, addToCartEvent }) => {
    const { id, name, price, stock, variants, averageRating, ProductRatings } = data;
    const { addToast } = useToast()
    const {
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        availableSlots,
        handleDateSelection,
        isPast6PM,
        today
    } = useDeliveryDateTime();
    const { cart } = useCart()

    const [selectVariety, setSelectVariety] = useState<string>(variants[0]?.variety || "");
    const [quantityValue, setQuantityValue] = useState(1);
    const deliveryFee = (100).toFixed(2) // Temporary static value of delivery fee

    const totalSelectedProduct: number = parseFloat((Number(price) * quantityValue + (selectedTime == "Express" ? 100 : 0)).toFixed(2));
    const maxinputvalue: number = stock ? stock : 1;

    const handleNumberInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numberValue = Number(e.target.value.replace(/[^0-9]/g, ""));
        if (maxinputvalue >= Number(numberValue)) {
            setQuantityValue(numberValue);
        }
    };

    const handleIncrement = () => {
        if (!(quantityValue >= maxinputvalue)) {
            setQuantityValue(quantityValue + 1);
        }
    };

    const handleDecrement = () => {
        if (!(quantityValue <= 1)) {
            setQuantityValue(quantityValue - 1);
        }
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission for 'Buy Now'
    };

    const handleAddToCart = () => {
        const cartPayload = {
            cartId: String(cart?.id),
            productId: id,
            variety: [{ variantId: id, name: selectVariety, quantity: quantityValue, price: totalSelectedProduct }],
            deliveryDate: selectedDate,
            deliveryTime: selectedTime
        };
        try {
            addToCartEvent(cartPayload);
            addToast({
                message: `Add to cart successfully`,
                type: "success"
            })
        } catch (error) {
            console.error("Failed to add item to cart:", error);
        }
    };

    const titleCategory: string = "w-full text-xs"
    const valueCategory: string = "w-full text-sm text-end text-persian-rose-500"

    return (
        <motion.form
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            className="w-full h-fit p-5 flex flex-col gap-5 bg-white rounded">
            <div className="flex flex-col md:flex-row border-b-2 border-slate-200">
                <h1 className="w-[80%] text-2xl capitalize font-bold text-persian-rose-500">{name}</h1>
                <div className="w-[20%] flex gap-2 mt-2 md:mt-0">
                    <p className="flex-grow flex justify-center items-center md:w-[50%] text-center border text-sm">
                        ⭐{averageRating} (<span className="font-semibold">{ProductRatings.length}</span>)
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-end">
                <p className="text-gray-400 line-through text-lg">₱{price}</p>
                <span className="text-sm text-gray-400">50% off</span>
                <p className="text-persian-rose-500 text-xl font-bold">₱24.99</p>
            </div>

            {/* Variety */}
            {variants && variants.length > 0 && (
                <div className="flex gap-5 items-center">
                    <p className="text-sm min-w-[70px] text-gray-500 ">Variety: </p>
                    <div className="flex gap-1 w-full flex-wrap justify-start">
                        {variants.map((item, index) => (
                            <div key={index}
                                className={`border capitalize rounded flex px-3 py-3 flex-row justify-start items-center cursor-pointer 
                                ${selectVariety === item.variety ? "bg-persian-rose-500 text-white" : "hover:bg-gray-100 "}`}
                                onClick={() => setSelectVariety(item.variety)}
                            >
                                <img src={SampleImage} alt={item.variety} className="w-10 h-8 object-contain" />
                                <span className="text-xs">{item.variety}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Quantity */}
            <div className="flex gap-5 items-center">
                <p className="text-sm text-gray-500">Quantity: </p>
                <div className="relative flex items-center max-w-[8rem]">
                    <button
                        onClick={handleDecrement}
                        type="button"
                        className=" rounded-s-lg p-3 h-11 hover:bg-gray-100 focus:outline-none"
                    >
                        <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                        </svg>
                    </button>
                    <input
                        inputMode='numeric'
                        value={quantityValue}
                        onChange={handleNumberInputValue}
                        type="text"
                        id="quantity-input"
                        className="border-x-0 border-gray-300 h-11 text-center text-sm block w-full py-2.5 focus:outline-none"
                        placeholder="999"
                        required
                    />
                    <button
                        onClick={handleIncrement}
                        type="button"
                        className="rounded-e-lg p-3 h-11 hover:bg-gray-100 focus:outline-none"
                    >
                        <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                        </svg>
                    </button>
                </div>

                {stock ? (
                    <p className="text-xs text-gray-600">{stock} stocks</p>
                ) : (
                    <p className="text-xs text-gray-600"></p>
                )}
            </div>


            {/* Select Date and Time */}
            <div className="flex flex-col gap-2">
                <p className="text-sm text-gray-500 ">Select Delivery Date:</p>
                <div className="grid lg:grid-cols-4  gap-2">
                    <button
                        type="button"
                        onClick={() => handleDateSelection(0)}
                        className={`px-3 py-8 text-sm border rounded-md ${selectedDate === today ? "bg-persian-rose-500 text-white" : "hover:bg-gray-100"} ${isPast6PM ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={isPast6PM}
                    >
                        Today ({dayjs().format("MMM DD")})
                    </button>

                    <button
                        type="button"
                        onClick={() => handleDateSelection(1)}
                        className={`px-3 py-8 text-sm border rounded-md ${selectedDate === dayjs().add(1, "day").format("YYYY-MM-DD") ? "bg-persian-rose-500 text-white" : "hover:bg-gray-100"}`}
                    >
                        Tomorrow ({dayjs().add(1, "day").format("MMM DD")})
                    </button>

                    <button
                        type="button"
                        onClick={() => handleDateSelection(2)}
                        className={`px-3 py-8 text-sm border rounded-md ${selectedDate === dayjs().add(2, "day").format("YYYY-MM-DD") ? "bg-persian-rose-500 text-white" : "hover:bg-gray-100"}`}
                    >
                        {dayjs().add(2, "day").format("dddd (MMM DD)")}
                    </button>
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={isPast6PM ? dayjs().add(1, "day").format("YYYY-MM-DD") : dayjs().format("YYYY-MM-DD")}
                        onKeyDown={(e) => e.preventDefault()}
                        className={`p-2 border w-full rounded-md ${![dayjs().format("YYYY-MM-DD"), dayjs().add(1, "day").format("YYYY-MM-DD"), dayjs().add(2, "day").format("YYYY-MM-DD")].includes(selectedDate) ? "border-persian-rose-500" : ""}`}
                    />
                </div>
            </div>

            {/* Select Time */}
            <div className="flex flex-col gap-5">
                <p className="text-sm text-gray-500">Select Delivery Time:</p>
                <div className="lg:flex lg:flex-wrap sm:grid gap-4">
                    {availableSlots.map((slot, index) => (
                        <label
                            key={index}
                            className={`flex relative items-center gap-4 text-sm border px-2 py-3 rounded-sm cursor-pointer  
                            ${selectedTime === slot.range ? "bg-persian-rose-500 text-white" : "hover:bg-gray-100"}`}
                        >
                            <input
                                type="radio"
                                name="deliveryTime"
                                value={slot.label}
                                className="hidden"
                                onChange={() => setSelectedTime(slot.range)}
                            />
                            <p>
                                {slot.label} {slot.range.toLowerCase() !== "express" ? `(${slot.range})` : <span className={`text-xs ${selectedTime === slot.range ? "text-white" : "text-persian-rose-500"}`}>(+{deliveryFee})</span>}
                            </p>
                        </label>
                    ))}
                </div>
            </div>

            <div className='w-full flex gap-2 flex-col bg-gray-50 p-5 '>
                {selectVariety && (
                    <div className='flex items-center'>

                        <p className={titleCategory}>Variety:</p>
                        <p className={valueCategory}>{name} (<span className='font-black'>{selectVariety}</span> )</p>
                    </div>
                )}
                <div className='flex items-center'>
                    <p className={titleCategory}>Select Delivery Date: </p>
                    <p className={valueCategory}>{dayjs(selectedDate).format(" MMMM DD, YYYY")}</p>
                </div>
                <div className='flex items-center'>
                    <p className={titleCategory}>Select Delivery Time: </p>
                    <p className={valueCategory}>{selectedTime === "Express" ? `${selectedTime} + ${deliveryFee}` : selectedTime}</p>
                </div>
                <div className='flex items-center'>
                    <p className={titleCategory}>Quantity: </p>
                    <p className={valueCategory}>{quantityValue}</p>
                </div>
                <div className='w-full justify-evenly py-3 border-t-2  border-slate-200  hidden lg:flex'>
                    <p className='w-full text-start text-persian-rose-500 text-xl font-bold uppercase '>Total</p>
                    <p className='w-full text-persian-rose-500 text-xl font-bold text-end'>₱{totalSelectedProduct}</p>
                </div>
            </div>
            {/* Submit Buttons */}
            <div className="hidden lg:flex gap-1 justify-end">
                <button className="btn_styles-2 w-full">Buy Now</button>
                <button className="btn_styles-1 w-full" onClick={handleAddToCart}>Add to Cart</button>
            </div>

            {/* Note/Warning customer's future orders */}
            <p className="text-sm italic">
                <span className="text-red-500">Important!</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dolor itaque omnis dignissimos nulla aliquam reprehenderit nesciunt impedit aut? Quaerat nesciunt assumenda nisi earum consectetur asperiores cumque laudantium fugiat ullam!
            </p>

            <div className="w-full fixed border bottom-0 left-0 right-0 bg-zest-50 py-2 px-2 lg:hidden justify-evenly z-10 border-t-2 flex flex-col gap-5">
                <div className='w-full flex flex-wrap gap-2 justify-between'>
                    <p className='text-start text-persian-rose-500 text-sm uppercase '>Total: </p>
                    <p className='text-persian-rose-500 lg:text-base text-base font-bold text-end'>₱{totalSelectedProduct}</p>
                </div>
                <div className='w-full flex gap-2'>
                    <button className="btn_styles-2 w-full text-sm">Buy Now</button>
                    <button className="btn_styles-1 w-full text-sm" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </motion.form >
    );
};

export default ProductForm;
