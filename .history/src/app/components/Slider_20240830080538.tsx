'use client'
import React, { useEffect, useState } from 'react'
import { getPhotos, getStaticProps } from '../apis/getPhotos';
import Image from 'next/image';
import { Description } from './Description';
import { useQuery } from '@tanstack/react-query';

export const Slider = () => {
    const [activeImg, setActiveImg] = useState(0)
    const clickNext = () => {
        activeImg === data.length - 1
            ? setActiveImg(0)
            : setActiveImg(activeImg + 1)
    }
    const clickPrev = () => {
        activeImg === 0
            ? setActiveImg(data.length - 1)
            : setActiveImg(activeImg - 1)
    }

    const [photo, setPhoto] = useState([])

    const { data, isLoading, error } = useQuery({
        queryKey: ['photos'],
        queryFn: getStaticProps,
      });
      console.log(data?.props?.photos.slice(1, 10))
      setPhoto(data?.props?.photos.slice(1, 10))
    // useEffect(() => {
    //     const res = getPhotos().then(r => {
    //         setData(r.slice(1, 10))
    //         // console.log(r.slice(0, 10), r.splice(0, 10))
    //     })
    // }, [])
    useEffect(() => {
        const timer = setTimeout(() => {
            clickNext();
        }, 5000);
        return () => {
            clearTimeout(timer);
        }
    }, [activeImg])
    return (
        <div className='grid place-items-center grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl'>
            <div className='w-full flex justify-center items-center gap-3 transition-transform ease-in-out duration-500 rounded-2xl'>
                {
                     data?.props?.photos.slice(1, 10)?.map((pic: any, idx: any) => (
                        <div key={idx}
                            className={`${idx === activeImg ? "block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out" : "hidden"}`}
                        >
                            <Image className='w-full h-full object-cover rounded-tl-3xl rounded-bl-3x'
                                src={pic.url}
                                //  fill
                                width="100"
                                height="100"
                                alt='img'
                            />
                        </div>
                    ))
                }
                <Description data={data?.props?.photos} clickPrev={clickPrev} clickNext={clickNext} activeImgIndex={activeImg} />
            </div>
        </div>
    )
}
