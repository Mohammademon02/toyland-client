import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Button, Label, TextInput } from "flowbite-react";
import { Helmet } from "react-helmet-async";
import GoogleLogin from "./GoogleLogin";


const Login = () => {

    const [error, setError] = useState('');

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        setError('');
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Toyland | Login</title>
            </Helmet>
            <h1 className="mx-auto w-fit  font-bold text-xl md:text-5xl px-8 md:pt-4 md:pb-5 py-3 border-0 mb-8">Please Login</h1>
            <form onSubmit={handleLogin} className=" lg:w-1/2 md:w-1/2 sm:w-full mx-auto px-3 flex flex-col gap-4">
                
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        name="email"
                        id="email"
                        type="text"
                        placeholder="Your email address"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password2"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        name="password"
                        id="password2"
                        type="password"
                        placeholder="Password"
                        required={true}
                        shadow={true}
                    />
                </div>    
                <Button type="submit">
                    Login 
                </Button>
                <div className="flex items-center gap-2">
                    <Label className="text-2xl">
                        New to here ? <span> </span>
                        <Link
                            to="/register"
                            className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                            Register
                        </Link>
                    </Label>
                </div>
                <h1 className="text-center text-2xl my-2">Or</h1>
                <GoogleLogin></GoogleLogin>
                <br />
                <div className="flex items-center gap-2">
                    <Label className="text-2xl font-bold text-red-700" >
                        {error}
                    </Label>
                </div>

            </form>
        </div>
    );
};

export default Login;