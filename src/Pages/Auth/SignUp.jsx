import React from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import GoogleSignIn from './GoogleSignIn';
import { TbFidgetSpinner } from 'react-icons/tb';
import { imageUpload } from '../../api/utils';
import toast from 'react-hot-toast';

const SignUp = () => {
    const { loading, createUser, updateProfileData } = useAuth();

    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const number = form.number.value
        const role = form.role.value
        const image = form.image.files[0]
        const email = form.email.value
        const password = form.password.value

        const photoURL = await imageUpload(image)


        if (!/[A-Z]/.test(password)) {
            return toast.error('Must have an Uppercase letter in the password!')
        }
        if (!/[a-z]/.test(password)) {
            return toast.error("Must have a Lowercase letter in the password");
        }
        if (password.length < 6) {
            return toast.error("Length must be at least 6 character");
        }


        createUser(email, password)
            .then((result) => {
                const user = result.user;

                updateProfileData(name, photoURL)
                    .then(() => {

                        //++++++ add in db new userData
                        const userInfo = {
                            name: user?.displayName,
                            email: user?.email,
                            photo: photoURL,
                            role: role,
                            number: number
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                toast.success("Welcome Your Registration Successfully");
                                navigate(from, { replace: true });
                            })
                            .catch(err => {
                                console.error('Error saving user to database:', err);
                            });


                    }).catch((error) => {
                        // console.log("update Error", error)
                    })

            })
            .catch(error => {
                toast.error('Something wrong ,please try to signup using another email')
            })


    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="flex flex-col max-w-4xl p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900 w-full">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                    <p className="text-sm text-gray-400">Welcome to ShipEase</p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    noValidate=""
                    action=""
                    className="space-y-6 ng-untouched ng-pristine ng-valid"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter Your Name Here"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
                            />
                        </div>
                        {/* Phone Number */}
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm">
                                Phone Number
                            </label>
                            <input
                                type="number"
                                name="number"
                                id="phone"
                                placeholder="Enter Your Phone Number"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
                            />
                        </div>
                        {/* User Type */}
                        <div>
                            <label htmlFor="category" className="block mb-2 text-sm">
                                User Type
                            </label>
                            <select
                                required
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
                                name="role"
                            >
                                <option value="User">Normal User</option>
                                <option value="DeliveryMen">Delivery Men</option>
                            </select>
                        </div>
                        {/* Image */}
                        <div>
                            <label htmlFor="image" className="block mb-2 text-sm">
                                Select Image:
                            </label>
                            <input
                                required
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
                            />
                        </div>
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                placeholder="Enter Your Email Here"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
                            />
                        </div>
                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                autoComplete="new-password"
                                id="password"
                                required
                                placeholder="*******"
                                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-orange-700 mx-auto block rounded-md py-3 text-white w-full md:w-1/2"
                        >
                            {loading ? (
                                <div className="flex items-center gap-2 justify-center">
                                    <span><TbFidgetSpinner className="animate-spin m-auto" /></span>
                                    <span>Processing</span>
                                </div>
                            ) : (
                                'Continue'
                            )}
                        </button>
                    </div>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-400">
                        Signup with social accounts
                    </p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <GoogleSignIn />
                <p className="px-6 text-sm text-center text-gray-400">
                    Already have an account?{' '}
                    <Link
                        to="/login"
                        className="hover:underline hover:text-lime-500 text-gray-600"
                    >
                        Login
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default SignUp;