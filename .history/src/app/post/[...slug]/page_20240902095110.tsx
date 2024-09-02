// 'use client'

import React, { FC } from "react";
import { TextInputBox } from '../../components/forms/TextInputBox';
import { Router } from "next/router";
import { fetchPost, fetchPosts } from "../../apis/getPosts";
import Posts from "../../components/Posts";
import { useRouter } from 'next/router';
import BackButton from "@/app/components/Backbutton";

    const Post : FC<{ params: { slug: string } }> = async({ params }) => {
      const { slug } = params;
      console.log(slug)
        const post = await fetchPost(slug);
        console.log(post)
  return (
    <div className="bg-gray-800 mx-20">
      <BackButton />
      <div className="flex items-center justify-center min-h-screen ">
      

       <div  className="bg-gray-200 p-6 rounded shadow-xl w-full max-w-5xl mx-auto my-4">
          <span className="font-extrabold text-xl">{post.title}</span>
          <p className="mb-2">{post.body}</p>          
          </div>
  </div>
    </div>
    
  );
}
export default Post