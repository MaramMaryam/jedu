import { useField } from 'formik';

interface MyTextInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  id?: string
  onChange?:
}

export const TextInputBox: React.FC<MyTextInputProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-4 border-gray-950">
      <label htmlFor={props.id || props.name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input 
        className={`shadow-sm bg-gray-50 dark:bg-gray-200 dark:border-gray-600 
            dark:placeholder-gray-400 px-2 py-2 dark:focus:ring-blue-500 
            dark:focus:border-blue-500 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-auto
             border-white rounded-md ${
          meta.touched && meta.error ? 'border-red-500' : ''
        }`}
        {...field} 
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};