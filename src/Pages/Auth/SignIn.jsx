import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleSignIn from './GoogleSignIn';
import { TbFidgetSpinner } from 'react-icons/tb';
import toast from 'react-hot-toast';

const SignIn = () => {
    const { signIn, loading, setLoading } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'


    const handleSignIn = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(password)

        signIn(email, password)
            .then(result => {
                toast.success("Welcome Your login Successfully");
                navigate(from, { replace: true });
            }).catch(error => {
                toast.error('please enter valid email and password')
                setLoading(false)
            })
    }

    return (
        <div className='flex justify-center items-center min-h-screen bg-white'>
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Log In</h1>
                    <p className='text-sm text-gray-400'>
                        Sign in to access your account
                    </p>
                </div>
                <form
                    onSubmit={handleSignIn}
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                required
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input
                                type='password'
                                name='password'
                                autoComplete='current-password'
                                id='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900'
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='bg-purple-500 hover:bg-purple-600 w-full rounded-md py-3 text-white'
                        >
                            {loading ? (
                                <TbFidgetSpinner className='animate-spin m-auto' />
                            ) : (
                                'Continue'
                            )}
                        </button>
                    </div>
                </form>
                <div className='space-y-1'>
                    <button className='text-xs hover:underline hover:text-purple-600 text-gray-400'>
                        Forgot password?
                    </button>
                </div>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Login with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>
                <GoogleSignIn></GoogleSignIn>
                <p className='px-6 text-sm text-center text-gray-400'>
                    Don&apos;t have an account yet?{' '}
                    <Link
                        to='/signup'
                        className='hover:underline hover:text-lime-500 text-gray-600'
                    >
                        Sign up
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default SignIn;