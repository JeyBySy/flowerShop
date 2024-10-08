import SampleImage from '../../assets/flowers/sample.png'
import SampleImage2 from '../../assets/react.svg'
import React, { useState } from 'react';

const ImageCarousel: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [SampleImage, SampleImage, SampleImage, SampleImage, SampleImage, SampleImage2];

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
            {/* Left side for thumbnails */}
            <div className="hidden lg:flex gap-2 flex-col lg:w-[100px] ">
                {images.map((image, index) => (
                    <div key={index} className={`border h-[100px] flex justify-center cursor-pointer p-5 ${index === currentImageIndex ? 'outline outline-zest-500' : ''}`} onClick={() => handleImageClick(index)}>
                        <img src={image} alt="" className="w-full h-full object-contain" />
                    </div>
                ))}
            </div>

            {/* Main image display */}
            <div className="relative flex w-full lg:w-[75%] h-[450px] items-center justify-center mx-auto overflow-hidden bg-white  ">
                {/* Previous button */}
                <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 border" onClick={handlePrevImage} >&lt; </button>
                <img src={images[currentImageIndex]} alt="" className="w-[70%] h-full object-contain bg-white" />
                <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 border" onClick={handleNextImage}>&gt;</button>
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
