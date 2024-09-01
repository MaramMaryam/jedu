// 'use client'

import React, { FC } from "react";
import { TextInputBox } from '../../components/forms/TextInputBox';
import { Router } from "next/router";
import { fetchPost, fetchPosts } from "../../apis/getPosts";
import Posts from "../../components/Posts";
import { useRouter } from 'next/router';

    const Post =({ params }) => {
      // const router = useRouter();
      // const { id } = router.query;
      // console.log({id})
        // const post = await fetchPost(id);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">aaa
       {/* <Posts posts={post} /> */}

  hh
  </div>
  );
}
export default Post