import React from 'react';

const ContactUs = () => {
    return (
        <section className="bg-gray-100 py-24">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-10">
                    Get In Touch
                </h2>
                <div onSubmit={(e)=> e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-screen-xl mx-auto">
                    {/* Left Side - Contact Form */}
                    <div className="bg-gray-100 rounded-2xl p-8 shadow-lg">
                        <h3 className="text-xl font-semibold text-orange-600 mb-6">Send us a message</h3>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm text-black mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200  focus:outline-none focus:ring-2 focus:ring-orange-600"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm text-black mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200  focus:outline-none focus:ring-2 focus:ring-orange-600"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm text-black mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    placeholder="Write your message here..."
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200  focus:outline-none focus:ring-2 focus:ring-orange-600"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-orange-600  font-semibold py-3 px-6 rounded-lg hover:bg-orange-700 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right Side - Contact Information */}
                    <div className="flex flex-col justify-center items-center text-center md:text-left">
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-orange-600 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 "
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold ">Phone</h4>
                                    <p className="text-black">+1 (234) 567-8900</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-orange-600 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 "
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold ">Email</h4>
                                    <p className="text-black">info@example.com</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-orange-600 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 "
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold ">Address</h4>
                                    <p className="text-black">123 Main Street, City, Country</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;