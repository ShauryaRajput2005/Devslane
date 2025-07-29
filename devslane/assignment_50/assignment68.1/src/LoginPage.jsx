import { useState } from 'react';;
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { basicSchema } from "./schemas";





function LoginPage({ setisVerified }) {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const formik = useFormik({
        initialValues: {
            user: "",
            password: "",
        },
        onSubmit: (values) => {
            console.log("Form Data:", values);

            if (values.user === "admin" && values.password === "admin") {
                setisVerified(true);
                navigate('/');
            } else {
                alert("Invalid credentials. Please try again.");
            }
        },
        validationSchema: basicSchema,
    });

    console.log("Errors:", formik.errors);
    console.log("Touched:", formik.touched);


    return (
        <div className='h-screen w-screen bg-blue-500 flex flex-col justify-center items-center bg-[url("https://plus.unsplash.com/premium_photo-1673029926917-40a9e3336b5b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-no-repeat bg-cover'>

            <form onSubmit={formik.handleSubmit} className="bg-white p-6 rounded shadow-md bg-white/30 backdrop-invert backdrop-opacity-10 flex flex-col">
                <div className="mb-4">
                    <h1 className='text-2xl text-[#111827] text-extrabold m-4'> Login to Account</h1>
                    <input
                        id="user"
                        name="user"
                        type='text'
                        value={formik.values.user}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="👤 USERNAME"
                        className={`
                            p-2 w-full rounded-full 
                            backdrop-opacity-10 
                            transition-transform duration-200 ease-in-out 
                            hover:scale-105 
                            focus:outline-none focus:border-2 focus:border-blue-300 
                            ${formik.touched.user && formik.errors.user ? 'border-2 border-red-500' : 'border-none'}
                        `}
                    />
                    {formik.touched.user && formik.errors.user && (
                        <p className="text-red-500 text-sm ">{formik.errors.user}</p>
                    )}

                </div>

                <div className="mb-4">
                    <input
                        id='password'
                        name='password'
                        type='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="🔑 PASSWORD"
                        className={`
                            p-2 w-full rounded-full 
                            backdrop-opacity-10 
                            transition-transform duration-200 ease-in-out 
                            hover:scale-105 
                            focus:outline-none focus:border-2 focus:border-blue-300 
                            ${formik.touched.password && formik.errors.password ? 'border-2 border-red-500' : 'border-none'}
                        `}
                    />

                    {formik.touched.password && formik.errors.password && (
                        <p className="text-red-500 text-sm">{formik.errors.password}</p>
                    )}
                </div>

                <button type='submit' className="bg-[#6bc7f6] p-2 w-full transition-transform duration-200 ease-in-out hover:scale-105 border-none focus:border-2 focus:border-blue-200 backdrop-opacity-50 rounded-full">
                    Login
                </button>

                <button type="button" onClick={() => setShow(!show)} className='m-4 self-right text-xs text-gray-500 mt-2'>
                    Forgot Password?
                </button>
                {show && <p className="text-xs text-gray-500 mt-2 self-left">The Username and Password is "admin"</p>}

            </form>
        </div>
    );
}

export default LoginPage;
