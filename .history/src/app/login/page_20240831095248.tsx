'use client'


import React from "react";
import { Formik, Form } from 'formik';
import { TextInputBox } from '../components/forms/TextInputBox';
import { loginSchema } from "./validation";
import { Router,useRouter } from "next/router";

export default function Login() { 

   const initVal = { email: 'example@gmail.com', password: '123456' }
   const router = useRouter();
   const handleNavigation = () => {
    router.push('/posts'); // Navigate to the About page
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Formik  initialValues={initVal}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        console.log('Form data', values);
        // Handle login logic here (e.g., API call)
        
      }}>
{() => (
        <Form className="bg-white p-6 rounded shadow-md w-80">
          <h1 className="text-xl font-bold mb-4">Login</h1>
          <TextInputBox label="Email" name="email" type="email" placeholder="Enter your email" />
          <TextInputBox label="Password" name="password" type="password" placeholder="Enter your password" />
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            Login
          </button>
        </Form>
      )}
        </Formik>
  
  </div>
  );
}
