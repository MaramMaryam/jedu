'use client'

import React, { FC } from "react";
import { TextInputBox } from '../components/forms/TextInputBox';
import { Router } from "next/router";
import { Post } from "../components/types";
    interface PostProps {
        photos: Post[];
      }
export default function Posts() { 
    const Posts: FC<PostProps> = ({ post })  => {

    
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
       post
  
  </div>
  );
}
