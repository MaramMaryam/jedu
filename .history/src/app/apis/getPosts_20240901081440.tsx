import { ENDPOINT } from "../utils/endPoinrs"
import {  baseInstance, baseUrl } from "./baseUrl"
import { Photo } from "../components/types";


// export const getPhotos = async() => { 
//     const response = await fetch(baseUrl + ENDPOINT.PHOTO.GETPHOTOS+'?_limit=10', {
//       method: 'GET',
//     })
//     return response.json(); 
//   }; 

  export const fetchPosts = async (): Promise<Photo[]> => {
    const res = await fetch(baseUrl + ENDPOINT.POSTS.GETPOSTS+'?_limit=50');
    if (!res.ok) {
      throw new Error('Failed to fetch photos');
    }
    return res.json();
  };
  export const fetchPost = async (): Promise<Photo[]> => {
    const res = await fetch(baseUrl + ENDPOINT.POSTS.GETPOSTS);
    if (!res.ok) {
      throw new Error('Failed to fetch photos');
    }
    return res.json();
  };
  // export const getPost = async (id: any) => {
  //   const response = await fetch(baseUrl + ENDPOINT.POST.GETPOST + '/' + id, {
  //       method: 'GET',
  //   })
  //   return response.json();
}; 