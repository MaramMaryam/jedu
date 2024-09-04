import * as Yup from 'yup';

export const loginOtpSchema = Yup.object().shape({
  mobile: Yup.string()
    .required('Mobile number is required'),
    // .matches(/^[0-9]{11}$/, 'Mobile number must be 10 digits'),
    // otpNumber: Yup.string()
    // .length(6, 'OTP must be 6 digits').required()
    // .when('otpSent', {
    //   is: true,
    //   then: Yup.string().required('OTP is required'),
    //   otherwise: Yup.string().notRequired(),
    // }),
});