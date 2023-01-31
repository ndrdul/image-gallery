import React, { useState } from "react";

const Carousel = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        "/image1.jpg",
        "/image2.jpg",
        "/image3.jpg",
        "/image4.jpg",
        "/image5.jpg"
    ];


    const imageNames = [  "Image 1",  "Image 2",  "Image 3",  "Image 4",  "Image 5"];
    const handlePrevClick = () => {
        setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
    };

    const handleNextClick = () => {
        setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
    };

    return (
        <div className="relative w-64 mx-auto">
            <p className="text-center mt-5">{imageNames[currentImage]}</p>
            <img
                className="w-full h-64 object-cover"
                src={images[currentImage]}
                alt=""
            />
            <button
                className="absolute top-50% left-0 -ml-10 transform -translate-y-50 rounded-full h-10 w-10 text-white bg-gray-800 hover:bg-gray-500 focus:outline-none focus:shadow-outline"
                onClick={handlePrevClick}
            >
                {"<"}
            </button>
            <button
                className="absolute top-50% right-0 -mr-10 transform -translate-y-50 rounded-full h-10 w-10 text-white bg-gray-800 hover:bg-gray-500 focus:outline-none focus:shadow-outline"
                onClick={handleNextClick}
            >
                {">"}
            </button>
        </div>
    );
};

export default Carousel;
