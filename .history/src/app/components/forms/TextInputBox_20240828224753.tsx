import { useField } from 'formik';

export const MyTextInput = (label{ , ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-4">
      <label htmlFor={props.id || props.name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
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