// 'use client'

import axios from "axios";
import { ENDPOINT } from "../utils/endPoinrs"
import {  baseInstance, baseUrl } from "./baseUrl"
import { GetStaticProps } from "next/types";
import { Photo } from "../components/types";

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

// export const getPhotos = async () => {
//   const resPhoto = await fetch(baseUrl + ENDPOINT.PHOTO.GETPHOTOS, {
//               method: 'GET',
//             });
//   const initialData = await resPhoto.json();
//   return {data: initialData}
// }
export async function getPhotos() {
  // Call an external API endpoint to get posts
  const response = await fetch(baseUrl + ENDPOINT.PHOTO.GETPHOTOS, {
                  method: 'GET',
                })
                return response.json(); 
}
  //   export async function getServerSideProps() {
  //     const res = await getPhotos(); // Fetching data on server-side
  //     const initialData = res.slice(1, 10);
      
  //     return {
  //         props: { initialData }, // Pass data to the page component as props
  //     };
  // }


  
export const getStaticProps: GetStaticProps<{ photos: Photo[] }> = async () => {
  console.log('Fetching data...');
  const res =  await fetch(baseUrl + ENDPOINT.PHOTO.GETPHOTOS, {
    method: 'GET',
  })

  if (!res.ok) {
    console.error('Failed to fetch photos:', res.statusText);
    throw new Error('Failed to fetch photos');
  }

  const data: Photo[] = await res.json();
  console.log('Fetched data:', data);

  const initialData = data
  // .slice(0, 10); // Get the first 10 photos

  return {
    props: {
      photos: initialData,
    },
    revalidate: 10,
  };
};


//   export async function getStaticProps() {
//     const res = await fetch(baseUrl + ENDPOINT.PHOTO.GETPHOTOS, {
//         method: 'GET',
//     });
//     const photos = await res.json();

//     return {
//         props: {
//           photos,
//         },
//     };
// }

  // export const getPhotos = async () => {
  //   const res = await baseInstance({
  //     method: 'GET',
  //     url: ENDPOINT.PHOTO.GETPHOTOS,
  //     // data: data
  //   })
  
  //   return res.data
  // }