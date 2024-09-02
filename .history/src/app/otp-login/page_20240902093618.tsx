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




















'use client'
import React, { useState } from "react";
import { Formik, Form } from 'formik';
import { loginOtpSchema } from "./validation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { TextInputBox } from "@/app/components/forms/TextInputBox";
import { Routes } from "../utils/endPoinrs";

interface otpNum {
  mobile: string;
  otpNumber:any
}

export default function LoginOtp() {
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const router = useRouter();

  const initVal: otpNum = { mobile: '09194813585', otpNumber:generatedOtp };


  // const handleSendOtp = (values: otpNum) => {
  //   // Simulate OTP generation and sending
  //   console.log({'value': values})
  //   // const newOtp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a random 6-digit OTP
  //   // setGeneratedOtp(newOtp);
  //   // console.log(`OTP sent to ${values.mobile}: ${newOtp}`); // Simulate sending OTP
  //   setOtpSent(true);
  //   alert('values')
  // };

  const handleVerifyOtp = (value:initVal) => {
    // Simulate OTP verification
    if (otp === generatedOtp) {
      console.log("OTP verified successfully");
      // router.push(Routes.posts.POSTS); // Navigate to the posts page
    } else {
      console.error("Invalid OTP");
      alert("Invalid OTP. Please try again.");
    }
  };
  const handleSendOtp = (values: otpNum) => {
    console.log("Sending OTP to:", values.mobile); // Log mobile number
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a random 6-digit OTP
    setGeneratedOtp(newOtp);
    console.log(`OTP sent to ${values.mobile}: ${newOtp}`); // Log generated OTP
    setOtpSent(true);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <Formik
        initialValues={initVal}
        validationSchema={loginOtpSchema}
        onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}
      >
        {() => (
          <Form className="bg-amber-50 p-6 rounded shadow-xl w-96">
            <h1 className="text-xl font-bold mb-4">Login</h1>
            <TextInputBox
              label="Mobile"
              name="mobile"
              type="text"
              placeholder="Enter your Mobile"
            />
            {otpSent && (
              <>
                <TextInputBox
                  label="OTP"
                  name="otpNumber"
                  type="text"
                  placeholder="Enter OTP"
                  // onChange={(e:any) => setOtp(e.target.value)}
                />
              </>
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              {otpSent ? 'Verify OTP' : 'Send OTP'}
            </button>
          <Link href={Routes.auth.LOGIN} className="text-sm text-blue-700 "> login </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
}


