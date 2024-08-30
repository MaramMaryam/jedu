// 'use client'

import axios from "axios";
import { ENDPOINT } from "../utils/endPoinrs"
import {  baseInstance, baseUrl } from "./baseUrl"

// export const getPhotos = async() => { 
//     const response = await fetch(baseUrl + ENDPOINT.PHOTO.GETPHOTOS, {
//       method: 'GET',
//     })
//     return response.json(); 
//   }; 


// export const getPhotos = async () => {
//   const response = await fetch(baseUrl + ENDPOINT.PHOTO.GETPHOTOS, {
//           method: 'GET',
//         });
//   return {data: response.data}
// }

export const getPhotos = async () => {
  const resPhoto = await axios({
    method: 'GET',
    url: ENDPOINT.PHOTO.GETPHOTOS
  });
  const initialData = await resPhoto.json();
  return {data: resPhoto.data}
}

  //   export async function getServerSideProps() {
  //     const res = await getPhotos(); // Fetching data on server-side
  //     const initialData = res.slice(1, 10);
      
  //     return {
  //         props: { initialData }, // Pass data to the page component as props
  //     };
  // }

  export async function getStaticProps() {
    const res = await fetch(baseUrl + ENDPOINT.PHOTO.GETPHOTOS, {
        method: 'GET',
    });
    const photos = await res.json();

    return {
        props: {
          photos,
        },
    };
}

  // export const getPhotos = async () => {
  //   const res = await baseInstance({
  //     method: 'GET',
  //     url: ENDPOINT.PHOTO.GETPHOTOS,
  //     // data: data
  //   })
  
  //   return res.data
  // }