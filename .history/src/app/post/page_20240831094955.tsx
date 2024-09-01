'use client'


import React from "react";
import { Formik, Form } from 'formik';
import { TextInputBox } from '../components/forms/TextInputBox';
import { Router } from "next/router";

export default function Posts() { 
  const router = Router
   const initVal = { email: 'example@gmail.com', password: '123456' }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
       post
  
  </div>
  );
}
