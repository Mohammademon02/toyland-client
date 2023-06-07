import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Label } from "flowbite-react";
import { FcGoogle } from 'react-icons/fc';



const GoogleLogin = () => {

    const [error, setError] = useState('');

    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const googleUser = result.user;
                console.log(googleUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    };


    return (
        <div className="w-full">
            <button
                onClick={handleGoogleLogin}
                type="button"
                className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300 "
            >
                <div className="flex items-center justify-center ">
                    <FcGoogle></FcGoogle>
                    <span className="ml-4">Log in with Google</span>
                </div>
            </button>
            <br />
            <div className="flex items-center gap-2">
                <Label className="text-2xl font-bold text-red-700" >
                    {error}
                </Label>
            </div>
        </div>
    );
};

export default GoogleLogin;