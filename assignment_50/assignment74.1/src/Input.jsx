import { useField } from 'formik';

export default function Input({ name, label, id, type = "text", className = "", ...rest }) {
    const [field, meta] = useField(name);

    return (
        <div className="mb-4">
            <label htmlFor={id} className="block mb-1 text-sm text-gray-700">{label}</label>
            <input
                id={id}
                type={type}
                {...field}
                {...rest}
                className={`
                    p-2 w-full rounded-full 
                    backdrop-opacity-10 
                    transition-transform duration-200 ease-in-out 
                    hover:scale-105 
                    focus:outline-none focus:border-2 focus:border-blue-300 
                    ${meta.touched && meta.error ? 'border-2 border-red-500' : 'border-none'}
                    ${className}
                `}
            />
            {meta.touched && meta.error && (
                <p className="text-red-500 text-sm mt-1">{meta.error}</p>
            )}
        </div>
    );
}
