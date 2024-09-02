import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  mobile: Yup.string()
    .email('Invalid mobile')
    .required('Required'),
  otp: Yup.string()
    .min(6, 'otp must be at least 6 characters')
    .required('Required'),
});