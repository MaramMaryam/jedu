'use client'
import React, { useEffect, useState } from "react";
import { Formik, Form } from 'formik';
import { TextInputBox } from '../components/forms/TextInputBox';
import { loginSchema } from "./validation";
import { useRouter } from "next/navigation";
import { Routes } from "../utils/endPoinrs";
import Link from "next/link";
import { getLoginState, setLoginState } from "../utils/auth";


interface login {
  email: string,
  password?: any
}
export default function Login() {

  const initVal: login = { email: 'example@gmail.com', password: 'admin123' }
  const router = useRouter();
  useEffect(() => {
    const isLoggedIn = getLoginState();
    if (isLoggedIn) {
      router.push(Routes.posts.POSTS);
    }
  }, [router]);

  const handleNavigation = (value: login) => {
    console.log(value);
    if (value.email === 'example@gmail.com' && value.password === 'admin123') {
      setLoginState(true); // Store login state in local storage
      router.push(Routes.posts.POSTS); // Navigate to the posts page
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <Formik initialValues={initVal}
        validationSchema={loginSchema}
        onSubmit={handleNavigation}>
        {() => (
          <Form className="bg-amber-50 p-6 rounded shadow-xl w-96">
            <h1 className="text-xl font-bold mb-4">Login</h1>
            <TextInputBox label="Email" name="email" type="email" placeholder="Enter your email" />
            <TextInputBox label="Password" name="password" type="password" placeholder="Enter your password" />
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mb-1">
              Login
            </button>
            <Link href={Routes.auth.LOGINOTP} className="text-sm text-blue-700 "> Enter with mobile </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}
