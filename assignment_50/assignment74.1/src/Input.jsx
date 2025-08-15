import { useField } from 'formik';

export default function Input({ name, label, id, type = "text", className = "", ...rest }) {
    const [field, meta] = useField(name);

    return (
        <div className="mb-4 relative">
            <label htmlFor={id} className="block mb-1 text-sm text-gray-700">{label}</label>
            
            {/* Rotating border wrapper */}
            <div className="relative rounded-full">
                <input
                    id={id}
                    type={type}
                    {...field}
                    {...rest}
                    className={`
                        relative z-10 p-2 w-full rounded-full 
                        backdrop-opacity-10 
                        transition-transform duration-200 ease-in-out 
                        hover:scale-105  
                        focus:outline-none focus:shadow-xs  shadow-cyan-500 focus:border-2 focus:border-blue-300
                        ${meta.touched && meta.error ? 'border-2 border-red-500' : 'border-none'}
                        ${className}
                    `}
                />
                <div className="
                    absolute inset-0 rounded-full border-2 border-t-blue-500 border-b-green-500
                    pointer-events-none opacity-0 transition-opacity duration-200
                    focus-within:opacity-100 animate-spin
                "></div>
            </div>

            {meta.touched && meta.error && (
                <p className="text-red-500 text-sm mt-1">{meta.error}</p>
            )}
        </div>
    );
}
