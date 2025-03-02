import { ChevronRight, ChevronLeft } from 'lucide-react';
import SampleImage from '../../assets/flowers/sample.png'
import SampleImage2 from '../../assets/react.svg'
import React, { useState } from 'react';


const ImageCarousel: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [SampleImage, SampleImage, SampleImage, SampleImage, SampleImage, SampleImage2,];

    const handleImageClick = (index: number) => {
        setCurrentImageIndex(index);
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="flex px-5 flex-col lg:flex-row h-fit">
            <div className='flex flex-col gap-2 lg:w-full h-full border'>
                {/* Main image display */}
                <div className="relative flex w-full h-[500px] items-center justify-center mx-auto overflow-hidden bg-white  ">
                    {/* Previous button */}
                    <button className="absolute left-0 top-1/2  transform -translate-y-1/2 bg-white lg:px-10 hover:shadow-md z-10 h-full" onClick={handlePrevImage} ><ChevronLeft /></button>
                    <img src={images[currentImageIndex]} alt="" className="bg-gray-50 w-[70%] p-10 h-full object-contain" />
                    <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white lg:px-10 hover:shadow-md z-10 h-full" onClick={handleNextImage}><ChevronRight /></button>
                </div>
                {/* Bottom side for thumbnails */}
                <div className="hidden lg:flex flex-wrap gap-2 justify-start flex-row lg:w-fit ">
                    {images.map((image, index) => (
                        <div key={index} className={`relative border w-[100px] h-[100px] bg-gray-50 flex justify-center cursor-pointer p-5 ${index === currentImageIndex ? 'outline outline-zest-500' : ''}`} onClick={() => handleImageClick(index)}>
                            <img src={image} alt="" className="w-full h-full object-contain" />
                        </div>
                    ))}
                </div>
            </div>
            {/* Mobile scrollable thumbnails */}
            <div className="lg:hidden flex overflow-x-auto gap-2 py-2 px-5">
                {images.map((image, index) => (
                    <div key={index} className={`border max-h-[100px] bg-gray-50 flex justify-center cursor-pointer p-5 ${index === currentImageIndex ? 'outline outline-zest-500' : ''}`} onClick={() => handleImageClick(index)}>
                        <img src={image} alt="" className="min-w-10 h-8 object-contain" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
