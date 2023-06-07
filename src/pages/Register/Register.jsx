import { useContext, useState } from "react";
import { } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Helmet } from "react-helmet-async";
import GoogleLogin from "../Login/GoogleLogin";


const Register = () => {

    const { createUser, profileUpdate } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password)

        setError('');
        createUser (email, password)
            .then(result => {
                const createdUser = result.user;
                profileUpdate( createdUser, name, photo)
                console.log(createdUser)
                navigate("/")
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })

    }

    return (
        <div className="container mx-auto">
            <Helmet>
                <title>Toyland | Register</title>
            </Helmet>
            <h1 className="mx-auto w-fit  font-bold text-xl md:text-5xl px-8 md:pt-4 md:pb-5 py-3 border-0 mb-8">Please Register</h1>
            <form onSubmit={handleRegister} className=" lg:w-1/2 md:w-1/2 sm:w-full mx-auto px-3 flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="Your Name"
                        />
                    </div>
                    <TextInput
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Your name"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photo"
                            value="Your Photo"
                        />
                    </div>
                    <TextInput
                        name="photo"
                        id="photo"
                        type="text"
                        placeholder="Photo"
                        required={true}
                        shadow={true}
                    />
                </div>
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
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="repeat-password"
                            value="Repeat password"
                        />
                    </div>
                    <TextInput
                        name="confirm"
                        id="repeat-password"
                        placeholder="Confirm password"
                        type="password"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="agree" />
                    <Label htmlFor="agree">
                        I agree with the <span> </span>
                        <Link
                            href="/forms"
                            className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                            terms and conditions
                        </Link>
                    </Label>
                </div>
                <Button type="submit">
                    Register new account
                </Button>
                <div className="flex items-center gap-2">
                    <Label className="text-2xl">
                        Already have an account ? <span> </span>
                        <Link
                            to="/login"
                            className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                            Login
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

export default Register;