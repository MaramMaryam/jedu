// 'use client'
// import  { useEffect, useState } from 'react'
// import {  getPhotos } from '../apis/getPhotos';
// import Image from 'next/image';
// import { Description } from './Description';
// import { useQuery } from '@tanstack/react-query';
// import { NextPage } from 'next';


// export const Slider: NextPage = (   ) => {
// let item = 0;
//     const [activeImg, setActiveImg] = useState(item)
//     const clickNext = () => {
//         activeImg === photo?.length - 1
//             ? setActiveImg(0)
//             : setActiveImg(activeImg + 1)
//     }
//     const clickPrev = () => {
//         activeImg === 0
//             ? setActiveImg(photo?.length - 1)
//             : setActiveImg(activeImg - 1)
//     }

//     const [photo, setPhoto] = useState([])

//     const { data, isLoading, error } = useQuery({
//         queryKey: ['photos'],
//         queryFn: getPhotos,
//       });
//       console.log(data,data?.slice(1, 10))

    
//     useEffect(() => {
//         setPhoto(data?.slice(1, 10))
//         const timer = setTimeout(() => {
//             clickNext();
//         }, 5000);
        
//         return () => {
//             clearTimeout(timer);
//         }
//     }, [activeImg])
//     return (
//         <div className='grid place-items-center grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl'>
//             <div className='w-full flex justify-center items-center gap-3 transition-transform ease-in-out duration-500 rounded-2xl'>
//                 {
//                      photo?.map((pic: any, idx: any) => (
//                         <div key={idx}
//                             className={`${idx === activeImg ? "block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out" : "hidden"}`}
//                         >
//                             <Image className='w-full h-full object-cover rounded-tl-3xl rounded-bl-3x'
//                                 src={pic.url}
//                                 //  fill
//                                 width="100"
//                                 height="100"
//                                 alt='img'
//                             />
//                         </div>
//                     ))
//                 }
//                 <Description data={photo} clickPrev={clickPrev} clickNext={clickNext} activeImgIndex={activeImg} />
//             </div>
//         </div>
//     )
// }








// // pages/photos.js

// import React from 'react';
// import  {Photo}  from './types';
// import { GetStaticProps } from 'next/types';
// import { baseUrl } from '../apis/baseUrl';
// import { ENDPOINT } from '../utils/endPoinrs';

// // interface Photo {
// //     albumId: number;
// //     id: number;
// //     title: string;
// //     url: string;
// //     thumbnailUrl: string;
// //   }

// // export const getStaticProps: GetStaticProps<{ photos: Photo[] }> = async () => {
// //     console.log('Fetching data...');
// //     // const res = await fetch('https://jsonplaceholder.typicode.com/photos');
// //     const res = await fetch(baseUrl + ENDPOINT.PHOTO.GETPHOTOS, {
// //         method: 'GET',
// //       })
// //     //   return response.json(); 

// //     if (!res.ok) {
// //       console.error('Failed to fetch photos:', res.statusText);
// //       throw new Error('Failed to fetch photos');
// //     }
  
// //     const data: Photo[] = await res.json();
// //     console.log('Fetched data:', data);
  
// //     const initialData = data.slice(0, 10); // Get the first 10 photos
  
// //     return {
// //       props: {
// //         photos: initialData,
// //       },
// //       revalidate: 10,
// //     };
// //   };
// //   interface PhotosPageProps {
// //     photos: Photo[];
// //   }
// // // Page component to display photos
// //  const Slider  = ({ photos }:PhotosPageProps,initialData:any ) => {
// //     console.log(photos,initialData);
    
// //     return (
// //       <div>
// //         <h1>Photos</h1>
// //         <ul>
// //           {photos?.map((photo,id) => (
// //             <li key={id}>
// //               <h2>{photo.title}</h2>
// //               <img src={photo.url} alt={photo.title} />
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     );
// //   };

// // export default Slider;









// pages/index.tsx
import { useState, useEffect, FC } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { Description } from '../components/Description';
import { getPhotos } from '../apis/getPhotos';

interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }
  
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
    setActiveImg((prev) => 
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
    <div className="grid place-items-center grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl">
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
              alt={pic.title}
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









