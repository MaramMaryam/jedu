import { Field, ErrorMessage } from 'formik';
interface MyTextInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  id?: string
  onChange?: any
}
export const TextInputBox: React.FC<MyTextInputProps> = ({ label, ...props }) => {
  return <div className="mb-4">
    <label className="block text-gray-700">{label}</label>
    <Field {...props} className="border rounded p-2 w-full" />
    <ErrorMessage name={props.name} component="div" className="text-red-500 text-sm" />
  </div>;

}