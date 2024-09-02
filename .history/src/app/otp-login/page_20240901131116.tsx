// 'use client'
// import React from "react";
// import { Formik, Form } from 'formik';
// import { TextInputBox } from '../components/forms/TextInputBox';
// import { loginOtpSchema } from "./validation";
// import { useRouter } from "next/navigation";
// import { Routes } from "../utils/endPoinrs";


// interface otp {
//   mobile: string,
// }
// export default function LoginOtp() { 

//    const initVal: otp = { mobile: '09199999999' }
//    const router = useRouter();
//    const handleNavigation = (value:otp) => {
//     router.push(Routes.posts.POSTS); // Navigate to the About page
//     console.log(value)
//   };
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-800">
//         <Formik  initialValues={initVal}
//       validationSchema={loginOtpSchema}
//       onSubmit={handleNavigation}>
// {() => (
//         <Form className="bg-amber-50 p-6 rounded shadow-xl w-96">
//           <h1 className="text-xl font-bold mb-4">Login</h1>
//           <TextInputBox label="Mobile" name="mobile" type="text" placeholder="Enter your Mobile" />
//           <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
//             Login
//           </button>
//         </Form>
//       )}
//         </Formik>
  
//   </div>
//   );
// }























