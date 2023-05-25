import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Button, Label, TextInput } from "flowbite-react";


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
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    return (
        <div className="container mx-auto">
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