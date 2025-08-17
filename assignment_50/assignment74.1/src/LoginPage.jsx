import axios from 'axios';
import { withFormik, Form } from 'formik';
import { loginSchema } from './schemas';
import Input from './Input';

import { useNavigate, Link } from 'react-router-dom';


function LoginForm(props) {
    return (
        <div className='h-100 flex flex-col justify-center items-center bg-transparent overflow-hidden'>
            <Form className="p-6 rounded flex flex-col w-75 bg-transparent">
                <h1 className='text-4xl font-extrabold text-white drop-shadow-lg tracking-wide text-center mb-6'>Login </h1>

                <Input label="Email" id="email" name="email" type="text" placeholder="📧 EMAIL" />
                <Input label="Password" id="password" name="password" type="password" placeholder="🔑 PASSWORD" />

                <button
                    type='submit'
                    className="bg-[#6bc7f6] p-2 w-full transition-transform duration-200 ease-in-out hover:scale-105 border-none focus:border-2 focus:border-blue-200 backdrop-opacity-50 rounded-full shadow-md hover:shadow-blue-500/50 hover:bg-blue-500 transition duration-300 text-white"
                >
                    Login
                </button>
            </Form>
            <div className="mt-4">
                <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link
                        to="/signup"
                        className="bg-[#6bc7f6] px-4 py-2 inline-block transition-transform duration-200 ease-in-out hover:scale-105 border-none focus:border-2 focus:border-blue-200 backdrop-opacity-50 rounded-full shadow-md hover:shadow-blue-500/50 hover:bg-blue-500 transition duration-300 text-white"
                    >
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}

const EnhancedLogin = withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),
    validationSchema: loginSchema,
    handleSubmit: (values, bag) => {
        axios.post(`https://myeasykart.codeyogi.io/login`, {
            email: values.email,
            password: values.password
        })
            .then((response) => {
                console.log("Login Success:", response.data);
                const { user, token } = response.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                bag.props.setUser(user);
                bag.props.setisVerified(true);
                bag.props.showAlert("Login successful 🎉", "success");
                bag.props.navigate("/");
            })
            .catch((error) => {
                console.error("Login Error:", error);

                if (error.response?.data?.message) {
                    const msg = error.response.data.message;

                    if (msg.toLowerCase().includes("not found")) {
                        // 🔔 Special case: No account exists
                        bag.props.showAlert("No account exists with this email. Please sign up!", "error");
                    } else {
                        bag.props.showAlert(msg, "error");
                    }
                } else {
                    bag.props.showAlert("Login failed. Please try again.", "error");
                }
            });
    }

})(LoginForm);

export default function LoginPage(props) {
    const navigate = useNavigate();
    return <EnhancedLogin {...props} navigate={navigate} />;
}
