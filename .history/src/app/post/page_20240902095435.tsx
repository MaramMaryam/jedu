

import React, { FC } from "react";
import { Post } from "../components/types";
import { fetchPosts } from "../apis/getPosts";
import Posts from "../components/Posts";
import BackButton from "../components/Backbutton";

    const PostPage = async() => {
        const allPosts = await fetchPosts();
  return (
    <div>
      <BackButton />

    </div>
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
       <Posts posts={allPosts} />
  </div>
  );
}
export default PostPage