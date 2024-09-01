

import React, { FC } from "react";
import { TextInputBox } from '../components/forms/TextInputBox';
import { Router } from "next/router";
import { fetchPosts } from "../apis/getPosts";
import Posts from "../components/Posts";
import { useRouter } from 'next/router';

    const Post = async() => {
      const router = useRouter();
      const { id } = router.query;
        const allPosts = await fetchPost(id);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
       <Posts posts={allPosts} />

  
  </div>
  );
}
export default Post