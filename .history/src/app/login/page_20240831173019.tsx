'use client'
import React from "react";
import { Formik, Form } from 'formik';
import { TextInputBox } from '../components/forms/TextInputBox';
import { loginSchema } from "./validation";
import { useRouter } from "next/navigation";


interface login {
  email: string,
  password: any
}
export default function Login() { 

   const initVal: login = { email: 'example@gmail.com', password: '123456' }
   const router = useRouter();
   const handleNavigation = (value:login) => {
    router.push(); // Navigate to the About page
    console.log(value)
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
        <Formik  initialValues={initVal}
      validationSchema={loginSchema}
      onSubmit={handleNavigation}>
{() => (
        <Form className="bg-amber-50 p-6 rounded shadow-xl w-96">
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
