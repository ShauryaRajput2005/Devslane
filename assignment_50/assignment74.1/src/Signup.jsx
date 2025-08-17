import axios from 'axios';
import { withFormik, Form } from 'formik';
import { signupSchema } from './schemas';
import Input from './Input';
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Signup(props) {
    return (
        <div className='h-100 flex flex-col justify-center items-center bg-transparent '>
            <Form className="p-6 rounded flex flex-col w-75 bg-transparent">
                <h1 className='text-4xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-6'>Sign Up</h1>

                <Input
                    label="Full Name"
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="📧 FULL NAME" />

                <Input label="Email" id="email" name="email" type="text" placeholder="📧 EMAIL" />
                <Input label="Password" id="password" name="password" type="password" placeholder="🔑 PASSWORD" />

                <button
                    type='submit'
                    className="bg-[#6bc7f6] px-4 py-2 inline-block transition-transform duration-200 ease-in-out hover:scale-105 border-none focus:border-2 focus:border-blue-200 backdrop-opacity-50 rounded-full shadow-md hover:shadow-blue-500/50 hover:bg-blue-500 transition duration-300 text-white"
                >
                    Signup
                </button>
            </Form>

            <div className="mt-4">
                <p className="text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link
                        to="/login"
                        className="bg-[#6bc7f6] px-4 py-2 inline-block transition-transform duration-200 ease-in-out hover:scale-105 border-none focus:border-2 focus:border-blue-200 backdrop-opacity-50 rounded-full shadow-md hover:shadow-blue-500/50 hover:bg-blue-500 transition duration-300 text-white"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

const EnhancedSignup = withFormik({
    mapPropsToValues: () => ({
        fullName: '',
        email: '',
        password: ''
    }),
    validationSchema: signupSchema,
    handleSubmit: (values, bag) => {
        axios.post(`https://myeasykart.codeyogi.io/signup`, values)
            .then((response) => {
                console.log("Signup Success:", response.data);
                const { user, token } = response.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                bag.props.setUser(user);
                bag.props.setisVerified(true);
                bag.props.showAlert("Signup successful 🎉", "success");
                bag.props.navigate("/");
            })
            .catch((error) => {
                console.error("Signup Error:", error);
            });
    }
})(Signup);


export default function SignupPage(props) {
    const navigate = useNavigate();
    return <EnhancedSignup {...props} navigate={navigate} />;
}
