import * as Yup from 'yup';

export const loginOtpSchema = Yup.object().shape({
  mobile: Yup.string()
    .required('Mobile number is required'),
});