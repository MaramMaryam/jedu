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
        <div key={item.id} className="bg-gre-100 p-6 rounded shadow-xl w-full my-4">
          {item.title}
          </div>
       ))}
  
  </div>
  );
}
export default Posts