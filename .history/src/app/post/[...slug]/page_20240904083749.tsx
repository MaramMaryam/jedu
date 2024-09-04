import React, { FC } from "react";
import { fetchPost } from "../../apis/getPosts";
import BackButton from "@/app/components/Backbutton";

const Post: FC<{ params: { slug: string } }> = async ({ params }) => {
  const { slug } = params;
  const post = await fetchPost(slug);
  return (
    <div className="bg-gray-800  px-32 pt-6 ">
      <BackButton />
      <div className="flex items-center justify-center min-h-screen ">
        <div className="bg-gray-200 p-6 rounded shadow-xl w-full max-w-5xl mx-auto ">
          <span className="font-extrabold text-xl">{post.title}</span>
          <p className="mb-1">{post.body}</p>
        </div>
      </div>
    </div>

  );
}
export default Post