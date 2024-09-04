
'use client'
import React, { useEffect, useState } from "react";
import { Formik, Form } from 'formik';
import { loginOtpSchema } from "./validation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { TextInputBox } from "@/app/components/forms/TextInputBox";
import { Routes } from "../utils/endPoinrs";

interface otpNum {
  mobile: string;
  otpNumber: any
}

export default function LoginOtp() {
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState<any>();
  const [timeLeft, setTimeLeft] = useState(60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const initVal: otpNum = { mobile: '09194813585', otpNumber: generatedOtp };

  useEffect(() => {
    let timer: any;
    if (isTimerRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsTimerRunning(false);
      setGeneratedOtp(null); // Clear OTP after timeout
      setOtpSent(false); // Reset OTP sent state
      alert("OTP has expired. Generating a new OTP...");
      // Automatically send a new OTP when the timer expires
      handleSendOtp(initVal);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, timeLeft]);

  const handleVerifyOtp = (value: otpNum) => {
    // Simulate OTP verification
    setLoading(true);
    console.log(value, value.otpNumber)

    if (value.otpNumber === generatedOtp) {
      console.log("OTP verified successfully");
      
      router.push(Routes.posts.POSTS); // Navigate to the posts page
    } else {
      console.error("Invalid OTP");
      alert("Invalid OTP. Please try again.");
    }
    setLoading(false);
  };
  const handleSendOtp = (values: otpNum) => {

    console.log("Sending OTP to:", values.mobile);

    const newOtp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a random 6-digit OTP
    setGeneratedOtp(newOtp);
    setOtpSent(true);
    console.log(`OTP sent to ${values.mobile}: ${newOtp}`);
    setIsTimerRunning(true);
    setTimeLeft(60);

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
                />
                <span className="text-sm text-red-400">youe code is: {generatedOtp}</span>
                <span>{timeLeft}</span>
              </>
            )}
            <button disabled={loading}
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


