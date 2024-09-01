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
    <div className=" items-center justify-center ">
       {posts?.map((item,i)=> (
        <div key={item.id} className="bg-gray-200 p-6 rounded shadow-xl w-full max-w-5xl mx-auto my-4">
          <span className="font-extrabold">{item.title}</span>
          <p>{item.body}</p>
          </div>
       ))}
  
  </div>
  );
}
export default Posts