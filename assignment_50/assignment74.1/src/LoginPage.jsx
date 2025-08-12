import axios from 'axios';
import { withFormik, Form } from 'formik';
import { basicSchema } from './schemas';
import Input from './Input';
import { useNavigate } from 'react-router-dom';

function LoginForm(props) {
    return (
        <div className='h-100 flex flex-col justify-center items-center bg-transparent overflow-hidden'>
            <Form className="p-6 rounded flex flex-col w-75 bg-transparent">
                <h1 className='text-2xl text-[#111827] text-extrabold m-4'>Login to Account</h1>

                <Input label="Email" id="email" name="email" type="text" placeholder="📧 EMAIL" />
                <Input label="Password" id="password" name="password" type="password" placeholder="🔑 PASSWORD" />

                <button
                    type='submit'
                    className="bg-[#6bc7f6] p-2 w-full transition-transform duration-200 ease-in-out hover:scale-105 border-none focus:border-2 focus:border-blue-200 backdrop-opacity-50 rounded-full shadow-md hover:shadow-blue-500/50 hover:bg-blue-500 transition duration-300"
                >
                    Login
                </button>
            </Form>
        </div>
    );
}

const EnhancedLogin = withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),
    validationSchema: basicSchema,
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
                bag.props.navigate("/"); //
            })
            .catch((error) => {
                console.error("Login Error:", error);
            });
    }
})(LoginForm);

export default function LoginPage(props) {
    const navigate = useNavigate();
    return <EnhancedLogin {...props} navigate={navigate} />;
}
