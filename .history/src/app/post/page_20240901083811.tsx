

import React, { FC } from "react";
import { TextInputBox } from '../components/forms/TextInputBox';
import { Router } from "next/router";
import { Post } from "../components/types";
import { fetchPosts } from "../apis/getPosts";
import Posts from "../components/Posts";


    const PostPage = async() => {

        const allPosts = await fetchPosts();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
       <Poosts posts={allPosts} />
  
  </div>
  );
}
export default PostPage