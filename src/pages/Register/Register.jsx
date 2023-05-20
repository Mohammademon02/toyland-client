import { useContext, useState } from "react";
import { } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {

    const [error, setError] = useState('');

    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password)

        setError('');
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                setError('')
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })

    }

    return (
        <section className=" bg-base-200">
            <div className="container mx-auto">
                <div className="hero">
                    <div className="hero-content flex-col w-full">
                        <h1 className="text-5xl font-bold mb-4">Register Now</h1>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <form onSubmit={handleRegister} >
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="name" required className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input type="text" name="photo" placeholder="photo" required className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" name="email" placeholder="email" required className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="text" name="password" placeholder="password" required className="input input-bordered" />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-secondary">Register</button>
                                    </div>
                                    <br />
                                    <p>Already have an account ? <Link to="/login" >Login</Link></p>
                                    <br />
                                    <p className="text-red-500 font-semibold">{error}</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;