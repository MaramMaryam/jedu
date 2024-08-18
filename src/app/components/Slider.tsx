'use client'
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { getPhotos } from '../apis/getPhotos';
import Image from 'next/image';

export const Slider = () => {
    const {data, isLoading} = useQuery({queryKey: ['photos'], queryFn: getPhotos})
    // const {isLoading, error, data} = useQuery(['photos'], getPhotos); 
    // console.log((!isLoading && data) ?? data[0])
// Render the data 
if(!isLoading && data) 
console.log(data?.map((i:any)=> i.url))
//   if (data && !isLoading) return <div>
//     {data?.map((i:any)=> i.url)}
//   </div>; 
//   if (error) return <div>Error: {error.message}</div>; 
  return (
    <div className='grid place-items-center grid-cols-2 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl'>
        <div className='w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 rounded-2xl'>
        Slider
        {
            (data && !isLoading) ? data?.map((pic:any)=> (
                <div key={pic.id}>
                    {pic.url}
                    <Image 
                    src={pic.url}
                    // src={"https://via.placeholder.com/150/92c952"} 
                    alt='' width={400} height={400} 
                    className='w-full h-full object-cover rounded-tl-3xl rounded-bl-3x'/>
                </div>
            ) ) : ''
        }
        </div>
    </div>
  )
}
