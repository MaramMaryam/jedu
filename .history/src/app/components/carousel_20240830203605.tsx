"use client"
import { FC, useState } from 'react';
import { Photo } from './types';
import Image from 'next/image';

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
];

interface SliderProps {
    photos: Photo[];
  }

const Carousel  : FC<SliderProps> = ({ photos })  => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="overflow-hidden rounded-lg">
        <Image width={200} height={200}
        //   src={photos[currentIndex]}
        src={photos.}
          alt={`Carousel Image ${currentIndex + 1}`}
          className="w-full h-auto transition-transform duration-500 ease-in-out transform"
        />

          {/* {photos?.map((pic, idx) => (
          <div
            key={pic.id}
            className={`${
              idx === activeImg
                ? 'block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out'
                : 'hidden'
            }`}
          >
            <Image
              className="w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl"
              src={pic.url}
              width="100"
              height="100"
              alt={''}
            />
          </div>
        ))} */}

      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;