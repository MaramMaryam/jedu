// "use client"
// import { useState } from 'react';

// const Carousel = () => {
//   const images = [
//     'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=w&fit=crop&w=600&q=80',
//     'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?crop=w&fit=crop&w=600&q=80',
//     'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?crop=w&fit=crop&w=600&q=80',
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="relative w-full max-w-lg mx-auto">
//       <div className="overflow-hidden rounded-lg">
//         <img 
//           src={images[currentIndex]}
//           alt={`Slide ${currentIndex + 1}`}
//           className="w-full h-auto transition-transform duration-500 ease-in-out"
//         />
//       </div>
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
//       >
//         &#10094;
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-200"
//       >
//         &#10095;
//       </button>
//     </div>
//   );
// };

// export default Carousel;






"use client"
import { FC, useState } from 'react';
import { Photo } from './types';

interface SliderProps {
    photos: Photo[];
  }

const Carousel: FC<SliderProps> = ({ photos })  => {
    
  const images = [
    'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=w&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?crop=w&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?crop=w&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=w&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1514516871644-5a8e3d3f1b32?crop=w&fit=crop&w=600&q=80',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerSlide = 3; // Number of images to display per slide

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
    <div className="relative w-full max-w-lg mx-auto">
      <div className="overflow-hidden rounded-lg flex">
        {currentImages.map((image, index) => (
          <img
            key={index}
            src={image.}
            alt={`Slide ${startIndex + index + 1}`}
            className="w-1/3 h-auto transition-transform duration-500 ease-in-out"
          />
        ))}
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


