'use client'


import React from "react";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextInputBox } from '../components/forms/TextInputBox';

export default function Login() { 
    const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
  });
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Formik  initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
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
