// pages/login.tsx

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from './';

const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Form data', values);
          // Handle login logic here (e.g., API call)
        }}
      >
        {() => (
          <Form className="bg-white p-6 rounded shadow-md w-80">
            <h1 className="text-xl font-bold mb-4">Login</h1>
            <MyTextInput label="Email" name="email" type="email" placeholder="Enter your email" />
            <MyTextInput label="Password" name="password" type="password" placeholder="Enter your password" />
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
              Login
            </button>
            <div className="mt-4 text-sm text-center">
              <a href="#" className="text-blue-600 hover:underline">Forgot your password?</a>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;