import React, { useState, useEffect } from "react";

const PhotoGallery = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const randomImages = Array.from({ length: 5 }, () => {
      const randomIndex = Math.floor(Math.random() * 10);
      return `https://picsum.photos/id/${randomIndex}/300/300`;
    });
    setImages(randomImages);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((currentIndex + images.length - 1) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="flex items-center justify-between h-64">
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
        onClick={handlePrevious}
      >
        Previous
      </button>
      <img className="h-64 w-64 mx-10" src={images[currentIndex]} alt="Random" />
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default PhotoGallery;
