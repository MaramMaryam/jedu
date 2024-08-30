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

// pages/index.js
import React from 'react';

// Fetch data from an API
// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/photos'); // Replace with your API endpoint
//   const data = await res.json();

//   return {
//     props: {
//       data, // Pass the fetched data to the page component as props
//     },
//     revalidate: 10, // Optional: Revalidate data every 10 seconds
//   };
// };
export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const initialData = await res.json();
  
    return {
      props: { initialData },
    };
  }

// Page component
export const Slider = ({ initialData }:any) => {
    console.log(JSON.stringify(initialData))
  return (
    <div>
      <h1>Data Prefetching with getStaticProps</h1>
      <ul>
        {/* {data.map((item:any) => (
          <li key={item.id}>{item.title}</li> // Adjust according to your data structure
        ))} */}
      </ul>
    </div>
  );
};

// export default Slider;
