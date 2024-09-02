'use client'
import React from "react";
import { Formik, Form } from 'formik';
import { TextInputBox } from '../components/forms/TextInputBox';
import { loginOtpSchema } from "./validation";
import { useRouter } from "next/navigation";
import { Routes } from "../utils/endPoinrs";


interface otp {
  mobile: string,
}
export default function LoginOtp() { 

   const initVal: otp = { mobile: '09199999999' }
   const router = useRouter();
   const handleNavigation = (value:otp) => {
    router.push(Routes.posts.POSTS); // Navigate to the About page
    console.log(value)
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
        <Formik  initialValues={initVal}
      validationSchema={loginOtpSchema}
      onSubmit={handleNavigation}>
{() => (
        <Form className="bg-amber-50 p-6 rounded shadow-xl w-96">
          <h1 className="text-xl font-bold mb-4">Login</h1>
          <TextInputBox label="Mobile" name="mobile" type="" placeholder="Enter your email" />
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
            Login
          </button>
        </Form>
      )}
        </Formik>
  
  </div>
  );
}



















// // pages/login.js
// import React, { useState } from 'react';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const Login = () => {
//   const [showOtpInput, setShowOtpInput] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);
//   const [otpCode, setOtpCode] = useState('');

//   const formik = useFormik({
//     initialValues: {
//       contact: '',
//       otp: '',
//     },
//     validationSchema: Yup.object({
//       contact: Yup.string().required('Contact is required'),
//       otp: otpSent ? Yup.string().length(6, 'Must be 6 digits').required('OTP is required') : Yup.string(),
//     }),
//     onSubmit: async (values) => {
//       if (!otpSent) {
//         // Send OTP
//         await sendOtp(values.contact);
//         setOtpSent(true);
//         setShowOtpInput(true);
//       } else {
//         // Verify OTP
//         await verifyOtp(values.contact, otpCode);
//       }
//     },
//   });

//   const sendOtp = async (contact:any) => {
//     // Call your API to send OTP
//     const response = await fetch('/api/sendOtp', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ contact }),
//     });
//     if (response.ok) {
//       console.log('OTP sent');
//     } else {
//       console.error('Failed to send OTP');
//     }
//   };

//   const verifyOtp = async (contact:any, code:any) => {
//     // Call your API to verify OTP
//     const response = await fetch('/api/verifyOtp', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ contact, otp: code }),
//     });
//     if (response.ok) {
//       console.log('OTP verified');
//       // Redirect or perform other actions upon successful verification
//     } else {
//       console.error('Invalid OTP');
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={formik.handleSubmit}>
//         <input
//           type="text"
//           name="contact"
//           placeholder="Phone Number or Email"
//           value={formik.values.contact}
//           onChange={formik.handleChange}
//         />
//         {formik.errors.contact && <div>{formik.errors.contact}</div>}
        
//         {showOtpInput && (
//           <>
//             <input
//               type="text"
//               name="otp"
//               placeholder="Enter OTP"
//               value={otpCode}
//               onChange={(e) => setOtpCode(e.target.value)}
//             />
//             {formik.errors.otp && <div>{formik.errors.otp}</div>}
//           </>
//         )}
        
//         <button type="submit">{otpSent ? 'Verify OTP' : 'Send OTP'}</button>
//       </form>
//     </div>
//   );
// };

// export default Login;



