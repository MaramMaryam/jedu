// 'use client'
// import React, { useEffect, useState } from 'react'
// import {  getPhotos } from '../apis/getPhotos';
// import Image from 'next/image';
// import { Description } from './Description';
// import { useQuery } from '@tanstack/react-query';
// import { baseUrl } from '../apis/baseUrl';
// import { ENDPOINT } from '../utils/endPoinrs';
// import { NextPage } from 'next';

// export const getStaticProps = async (ctx: any) => {
//     // prefetch data on the server
//     const data = await getPhotos()
//     // .then(r=>console.log(r));

//     return {
//         props: {
//             data
//         },
//     }
// }

// export const Slider: NextPage = (  data : any ) => {
//     console.log( data )
//     const [activeImg, setActiveImg] = useState(0)
//     const clickNext = () => {
//         activeImg === photo.length - 1
//             ? setActiveImg(0)
//             : setActiveImg(activeImg + 1)
//     }
//     const clickPrev = () => {
//         activeImg === 0
//             ? setActiveImg(photo.length - 1)
//             : setActiveImg(activeImg - 1)
//     }

//     const [photo, setPhoto] = useState([])

//     // const { data, isLoading, error } = useQuery({
//     //     queryKey: ['photos'],
//     //     queryFn: getStaticProps,
//     //   });
//     //   console.log(data?.props?.photos.slice(1, 10))
      
//     // useEffect(() => {
//     //     const res = getStaticProps().then(r => {
//     //         // setData(r.slice(1, 10))
//     //         // setPhoto(data?.props?.photos.slice(1, 10))
//     //         console.log(r)
//     //     })
//     // }, [photo])
    
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             clickNext();
//         }, 5000);
        
//         return () => {
//             clearTimeout(timer);
//         }
//     }, [activeImg])
//     return (
//         <div className='grid place-items-center grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl'>
//             {/* <div className='w-full flex justify-center items-center gap-3 transition-transform ease-in-out duration-500 rounded-2xl'>
//                 {
//                      data?.props?.photos.slice(1, 10)?.map((pic: any, idx: any) => (
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
//                 <Description data={data?.props?.photos} clickPrev={clickPrev} clickNext={clickNext} activeImgIndex={activeImg} />
//             </div> */}
//         </div>
//     )
// }








// pages/photos.js

import React from 'react';
import  {Photo}  from './types';
import { GetStaticProps } from 'next';

// interface Photo {
//     albumId: number;
//     id: number;
//     title: string;
//     url: string;
//     thumbnailUrl: string;
//   }

  export const getStaticProps: GetStaticProps<{ photos: Photo[] }> = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    
    if (!res.ok) {
      throw new Error('Failed to fetch photos');
    }
    
    const data = await res.json();
    
    // Optionally slice the data to limit the number of photos
    const initialData = data.slice(0, 10) as Photo[]; // Get the first 10 photos
  
    return {
      props: {
        photos: initialData, // Pass the data to the page component as props
      },
      revalidate: 10, // Optional: Revalidate data every 10 seconds
    };
  };

  interface PhotosPageProps {
    photos: Photo[];
  }
// Page component to display photos
 const Slider  = ({ photos }) => {
    console.log(photos);
    
    return (
      <div>
        <h1>Photos</h1>
        <ul>
          {photos?.map((photo,id) => (
            <li key={id}>
              <h2>{photo.title}</h2>
              <img src={photo.url} alt={photo.title} />
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default Slider;







