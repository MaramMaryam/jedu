import React from 'react'
import left from "../../../public/arrow-circle-left.svg"
import right from "../../../public/arrow-right-circle.svg"
import Image from 'next/image'

type Props = {
  data: any,
  clickPrev: any, clickNext: any,
  activeImgIndex: any
}

export const Description = ({ data, clickPrev, clickNext, activeImgIndex }: Props) => {
  return (
    <div className='grid mx-6 place-items-start w-full bg-[c7dfd9] relative rounded-tr-3xl rounded-br-3xl'>
      {data?.map((item: any, idx: any) =>
      (
        <div className={idx === activeImgIndex ? `block w-full h-[80vh]  object-cover 
                transition-all duration-500 ease-in-out` : 'hidden'} key={idx}>
          <div className='py-16 text-4xl font-extrabold'>{item?.title}</div>
          <div className='leading-relaxed font-medium text-base tracking-wide h-20 italic text-gray-60'>{'fdsnflks'}</div>
          <button className='bg-[#ecae7e] text-white uppercase px-4 py-2 rounded-md my-2'>order now</button>
          <div className='absolute -bottom-2 w-full  justify-center items-center'>
            <div onClick={clickPrev} className='absolute right-7 cursor-pointer'>
              <Image src={left} alt="" width={20} height={20} />
            </div>
            <div onClick={clickNext} className='absolute right-0 cursor-pointer' >
              <Image src={right} alt="" width={20} height={20} />
            </div>
          </div>
        </div>
      )
      )}
    </div>
  )
}
