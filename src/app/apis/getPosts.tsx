import { ENDPOINT } from "../utils/endPoinrs"
import { baseUrl } from "./baseUrl"
import { Post } from "../components/types";

export const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch(baseUrl + ENDPOINT.POSTS.GETPOSTS + '?_limit=50');
  if (!res.ok) {
    throw new Error('Failed to fetch photos');
  }
  return res.json();
};
export const fetchPost = async (id: any): Promise<Post> => {
  const res = await fetch(baseUrl + ENDPOINT.POSTS.GETPOSTS + `/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch photos');
  }
  return res.json();
};

