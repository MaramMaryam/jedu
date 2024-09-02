import * as Yup from 'yup';

// export const loginOtpSchema = Yup.object().shape({
//   mobile: Yup.string()
//     .matches(/^(0[1-9]{1}[0-9]{9})$/, "Invalid phone number")
//     .required('Required'),
//   otp: Yup.string()
//     .min(6, 'otp must be at least 6 characters')
//     .required('Required'),
// });

export const loginOtpSchema = Yup.object().shape({
  mobile: Yup.string()
    .required('Mobile number is required')
    .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits'),
  otp: Yup.string()
    .length(6, 'OTP must be 6 digits')
    .when('otpSent', {
      is: true,
      then: Yup.string().required('OTP is required'),
      otherwise: Yup.string().notRequired(),
    }),
});