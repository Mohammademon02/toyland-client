import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email =form.email.value;
        const password =form.password.value;

        console.log(email, password)

        signIn(email, password)
        .then(result =>{
            const user =result.user;
            console.log(user);
        })
        .catch(error => console.log(error))
    }

    return (
        <section className=" bg-base-200">
            <div className="container mx-auto">
                <div className="hero">
                    <div className="hero-content flex-col w-full">
                        <h1 className="text-5xl font-bold mb-4">Login Here</h1>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <form onSubmit={handleLogin} >
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" name="email" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="text" name="password" placeholder="password" className="input input-bordered" />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-secondary">Login</button>
                                    </div>
                                    <br />
                                    <p>New to ToyLand ? <Link to="/register" >Register</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;