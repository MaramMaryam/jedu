

import React, { FC } from "react";
import { Post } from "../components/types";
import { fetchPosts } from "../apis/getPosts";
import Posts from "../components/Posts";
import BackButton from "../components/Backbutton";

    const PostPage = async() => {
        const allPosts = await fetchPosts();
  return (
    <div className=" bg-gray-800">
      <BackButton />
    <div className="flex items-center justify-center min-h-screen">
       <Posts posts={allPosts} />
  </div>
    </div>

  );
}
export default PostPage