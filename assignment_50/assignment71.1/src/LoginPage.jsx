import { useState } from 'react';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { basicSchema } from './schemas';
import Input from './Input';

function LoginPage({ setisVerified }) {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleSubmit = (values) => {
        console.log("Form Data:", values);

        if (values.user === "admin" && values.password === "admin") {
            setisVerified(true);
            navigate('/');
        } else {
            alert("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className='h-100 flex flex-col justify-center items-center bg-transparent overflow-hidden'>

            <Formik
                initialValues={{
                    user: '',
                    password: ''
                }}
                validationSchema={basicSchema}
                onSubmit={handleSubmit}
            >
                <Form className="p-6 rounded flex flex-col w-75  bg-transparent ">
                    <h1 className='text-2xl text-[#111827] text-extrabold m-4'> Login to Account</h1>

                    <Input
                        label="Username"
                        id="user"
                        name="user"
                        type="text"
                        placeholder="👤 USERNAME"
                    />

                    <Input
                        label="Password"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="🔑 PASSWORD"
                    />

                    <button type='submit' className="bg-[#6bc7f6] p-2 w-full transition-transform duration-200 ease-in-out hover:scale-105 border-none focus:border-2 focus:border-blue-200 backdrop-opacity-50 rounded-full shadow-md hover:shadow-blue-500/50 hover:bg-blue-500 transition duration-300 ">
                        Login
                    </button>

                    <button type="button" onClick={() => setShow(!show)} className='m-4 self-right text-xs text-gray-500 mt-2'>
                        Forgot Password?
                    </button>
                    {show && <p className="text-xs text-gray-500 mt-2 self-left">The Username and Password is "admin"</p>}
                </Form>
            </Formik>
        </div>
    );
}

export default LoginPage;
