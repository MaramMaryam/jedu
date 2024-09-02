import * as Yup from 'yup';

export const loginOtpSchema = Yup.object().shape({
  mobile: Yup.string()
    .matches(/^(0[1-9]{1}[0-9]{9})$/)
    .required('Required'),
  otp: Yup.string()
    .min(6, 'otp must be at least 6 characters')
    .required('Required'),
});Yup.string()
.matches(
  /^(0[1-9]{1}[0-9]{9})$/,
  "شماره موبایل باید با ۰ و ۹ شروع شده و بیش از ۱۱ رقم نباشد. "
)