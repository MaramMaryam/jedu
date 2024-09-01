'use client'


import React from "react";
import { TextInputBox } from '../components/forms/TextInputBox';
import { Router } from "next/router";
import { Post } from "../components/types";

export default function Posts() { 
    interface PostProps {
        photos: Post[];
      }
    
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
       post
  
  </div>
  );
}
