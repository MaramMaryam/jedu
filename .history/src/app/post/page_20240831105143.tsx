'use client'

import React, { FC } from "react";
import { TextInputBox } from '../components/forms/TextInputBox';
import { Router } from "next/router";
import { Post } from "../components/types";
import { fetchPosts } from "../apis/getPosts";
import Posts from "../components/Posts";
    interface PostProps {
        posts: Post[];
      }

    const PostPage = async() => {

        const photos = await fetchPosts();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
       <Posts posts={[]} />
  
  </div>
  );
}
export default PostPage