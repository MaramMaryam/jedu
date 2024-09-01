// 'use client'

import React, { FC } from "react";
import { TextInputBox } from '../../components/forms/TextInputBox';
import { Router } from "next/router";
import { fetchPost, fetchPosts } from "../../apis/getPosts";
import Posts from "../../components/Posts";
import { useRouter } from 'next/router';

    const Post = async({params}: { slug: any }) =>
      // : FC<{ params: { slug: string } }> = ({ params }) => {
      const { slug } = params;
      // const router = useRouter();
      // const { id } = router.query;
      console.log(slug)
        const post =  fetchPost(slug);
        console.log(post)
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">aaa
       

  hh
  </div>
  );
}
export default Post