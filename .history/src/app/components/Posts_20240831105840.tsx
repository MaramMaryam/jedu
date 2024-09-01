'use client'

import React, { FC } from "react";
import { TextInputBox } from './forms/TextInputBox';
import { Router } from "next/router";
import { Post } from "./types";
import { fetchPosts } from "../apis/getPosts";

    interface PostProps {
        posts: Post[];
      }

    const Posts: FC<PostProps> = ({ posts })  => {
        // const Home  =  async() => {
        // const photos = await fetchPosts();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
       {posts?.map((item,i)=> (
        <div key={}>{item.title}</div>
       ))}
  
  </div>
  );
}
export default Posts