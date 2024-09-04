

import React, { FC } from "react";
import { fetchPosts } from "../apis/getPosts";
import Posts from "../components/Posts";
import BackButton from "../components/Backbutton";
import ProtectedRoute from "../components/ProtectedRoutes";

const PostPage = async () => {
  const allPosts = await fetchPosts();
  return (
    <ProtectedRoute>
      <div className=" bg-gray-800 pt-2 px-4">
        <BackButton />
        <div className="flex items-center justify-center min-h-screen">
          <Posts posts={allPosts} />
        </div>
      </div>
    </ProtectedRoute>
  );
}
export default PostPage