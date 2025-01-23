import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="flex   ">
            <footer className="footer container mx-auto justify-between text-neutral-content p-10 ">
                {/* Brand Section */}
                <div className="footer-section md:pl-10">
                    <aside>
                        <div className="flex items-center justify-center mb-4 animate-pulse">
                            <h1 className="text-4xl font-semibold border-b-2 border-purple-500 p-2 text-white">TransportPro</h1>
                        </div>
                        <p className="font-bold text-lg">
                            Your Reliable Transport Partner
                        </p>
                        <p className="text-sm mt-2">
                            Connecting you with the best travel solutions.
                        </p>
                        <p className="mt-4 text-gray-400">
                            Copyright © {new Date().getFullYear()} - All rights reserved
                        </p>
                    </aside>
                </div>

                {/* Quick Links */}
                <div className="footer-section md:pl-10">
                    <div>
                        <h2 className="font-bold text-lg mb-4 text-white">
                            Quick Links
                        </h2>
                        <ul className="space-y-2">
                            <li>
                                <span className="link link-hover hover:text-purple-400 transition-all duration-300">
                                    <Link to={'/contactUs'}>Contact Us</Link>
                                </span>
                            </li>
                            <li>
                                <span className="link link-hover hover:text-purple-400 transition-all duration-300">
                                    <Link to={'/about'}>About</Link>
                                </span>
                            </li>
                            <li>
                                <span className="link link-hover hover:text-purple-400 transition-all duration-300">
                                    Services
                                </span>
                            </li>
                            <li>
                                <span className="link link-hover hover:text-purple-400 transition-all duration-300">
                                    Privacy Policy
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Social Media */}
                <div className="footer-section md:pl-10">
                    <h2 className="font-bold text-lg mb-4 text-white">Follow Us</h2>
                    <div className="flex space-x-4">
                        <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current text-purple-400 hover:text-purple-600 transition-colors duration-300"
                            >
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </Link>
                        <Link to="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current text-purple-400 hover:text-purple-600 transition-colors duration-300"
                            >
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </Link>
                        <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current text-purple-400 hover:text-purple-600 transition-colors duration-300"
                            >
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Subscription Form */}
                <div className="footer-section md:pl-10">
                    <h2 className="font-bold text-lg mb-4 text-white">Subscribe</h2>
                    <form onClick={(e) => e.preventDefault()} className="flex flex-col space-y-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full max-w-xs bg-purple-900 text-gray-100 placeholder-gray-400"
                        />
                        <button className="btn btn-primary hover:bg-purple-600 transition-colors duration-300 bg-purple-500 border-none">
                            Subscribe
                        </button>
                    </form>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
