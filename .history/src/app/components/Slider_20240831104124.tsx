'use client'

// pages/index.tsx
import { useState, useEffect, FC } from 'react';
import Image from 'next/image';
import { Description } from '../components/Description';
import { Photo } from './types';

  
  interface SliderProps {
    photos: Photo[];
  }


const Slider: FC<SliderProps> = ({ photos })  => {
  const [activeImg, setActiveImg] = useState(0);

  const clickNext = () => {
    setActiveImg((prev) => (prev + 1) % photos.length)
    // (prev === photos?.length - 1 ? 0 : prev + 1));
  };

  const clickPrev = () => {
    setActiveImg((prev) => (prev - 1 + photos.length) % photos.length)
        // (prev === 0 ? photos?.length - 1 : prev - 1));
  };
//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
//   };
  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeImg]);

  return (
    <div className="grid place-items-center grid-cols-1 w-full 
    mx-auto max-w-5xl shadow-2xl rounded-2xl">
      <div className="w-full flex justify-center items-center gap-3 transition-transform ease-in-out duration-500 rounded-2xl">
        {photos?.map((pic, idx) => (
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
        ))}
        <Description
          data={photos}
          clickPrev={clickPrev}
          clickNext={clickNext}
          activeImgIndex={activeImg}
        />
      </div>
    </div>
  );
};

export default Slider;









