import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleSignIn from './GoogleSignIn';
import { TbFidgetSpinner } from 'react-icons/tb';
import toast from 'react-hot-toast';
import Lottie from 'lottie-react'; // Import Lottie
import loginAnimation from './Animation - 1739972991139.json'; // Import your Lottie JSON file

const SignIn = () => {
    const { signIn, loading, setLoading } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                toast.success('Welcome! Your login was successful.');
                navigate(from, { replace: true });
            })
            .catch((error) => {
                toast.error('Please enter a valid email and password.');
                setLoading(false);
            });
    };

    return (
        <div className="flex justify-center items-center flex-col md:flex-row bg-gray-100">
            {/* Left Side - Login Form */}
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white text-gray-900 shadow-lg">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold text-orange-600">Log In</h1>
                    <p className="text-sm text-gray-500">Sign in to access your account</p>
                </div>
                <form onSubmit={handleSignIn} noValidate="" action="" className="space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                placeholder="Enter Your Email Here"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-purple-500 bg-gray-100 text-gray-900"
                                data-temp-mail-org="0"
                            />
                        </div>
                        <div>
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm mb-2 text-gray-600">
                                    Password
                                </label>
                            </div>
                            <input
                                type="password"
                                name="password"
                                autoComplete="current-password"
                                id="password"
                                required
                                placeholder="*******"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-purple-500 bg-gray-100 text-gray-900"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-orange-600 hover:bg-orange-600 w-full rounded-md py-3 text-white"
                        >
                            {loading ? (
                                <TbFidgetSpinner className="animate-spin m-auto" />
                            ) : (
                                'Continue'
                            )}
                        </button>
                    </div>
                </form>
                <div className="space-y-1">
                    <button className="text-xs hover:underline hover:text-purple-600 text-gray-400">
                        Forgot password?
                    </button>
                </div>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                    <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                </div>
                <GoogleSignIn></GoogleSignIn>
                <p className="px-6 text-sm text-center text-gray-400">
                    Don&apos;t have an account yet?{' '}
                    <Link
                        to="/signup"
                        className="hover:underline hover:text-purple-600 text-gray-600"
                    >
                        Sign up
                    </Link>
                    .
                </p>
            </div>

            {/* Right Side - Lottie Animation */}
            <div className=" w-full md:w-1/2">
                <Lottie
                    animationData={loginAnimation} // Pass your Lottie JSON here
                    loop={true}
                    autoplay={true}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
        </div>
    );
};

export default SignIn;