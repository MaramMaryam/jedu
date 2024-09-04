import { ENDPOINT } from "../utils/endPoinrs"
import {  baseUrl } from "./baseUrl"
import { Photo } from "../components/types";

  export const fetchPhotos = async (): Promise<Photo[]> => {
    const res = await fetch(baseUrl + ENDPOINT.PHOTO.GETPHOTOS+'?_limit=18');
    if (!res.ok) {
      throw new Error('Failed to fetch photos');
    }
    return res.json();
  };
