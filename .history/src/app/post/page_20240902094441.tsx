

import React, { FC } from "react";
import { TextInputBox } from '../components/forms/TextInputBox';
import { Router } from "next/router";
import { Post } from "../components/types";
import { fetchPosts } from "../apis/getPosts";
import Posts from "../components/Posts";


    const PostPage = async() => {
      const router = useRouter();
        const allPosts = await fetchPosts();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
        <button
      onClick={() => router.back()}
      className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
    >
      Back
    </button>
       <Posts posts={allPosts} />
  
  </div>
  );
}
export default PostPage