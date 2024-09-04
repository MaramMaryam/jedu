"use client"
import { FC, useState } from 'react';
import { Photo } from './types';

interface SliderProps {
  photos: Photo[];
}

const Carousel: FC<SliderProps> = ({ photos }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerSlide = 6; // Number of images to display per slide

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(photos.length / imagesPerSlide));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(photos.length / imagesPerSlide) - 1 : prevIndex - 1
    );
  };

  // Calculate the starting index of the images for the current slide
  const startIndex = currentIndex * imagesPerSlide;
  const currentImages = photos.slice(startIndex, startIndex + imagesPerSlide);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden rounded-lg flex">
        {currentImages.map((image, index) => (
          <img
            key={index}
            src={image.thumbnailUrl}
            alt={`Slide ${startIndex + index + 1}`}
            className="w-1/2   h-auto transition-transform duration-500 ease-in-out"
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full px-2 shadow-md hover:bg-gray-200"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2 bg-blue-200 rounded-full  shadow-md hover:bg-gray-200"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;


