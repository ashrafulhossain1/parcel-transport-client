import React from 'react';
import { FaQuestionCircle, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Support = () => {
    return (
        <section className="bg-gray-100 py-10  md:py-16">
            <div className="">
                <h2 className="text-3xl md:text-4xl font-bold text-center  bg-orange-600 text-white py-10 md:py-16 lg:py-20 mb-10">
                    We Are Here To Help You
                </h2>

                {/* Support Info Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 container mx-auto px-6">
                    {/* Support 1 - FAQs */}
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <FaQuestionCircle className="text-orange-600 text-5xl mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800">Frequently Asked Questions</h3>
                        <p className="text-gray-600 mt-2">
                            Find quick answers to the most common questions from our customers.
                        </p>
                    </div>

                    {/* Support 2 - Call Us */}
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <FaPhoneAlt className="text-orange-600 text-5xl mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                        <p className="text-gray-600 mt-2">
                            Speak to our support team directly for urgent issues. We're here for you 24/7.
                        </p>
                        <p className="text-orange-600 font-semibold mt-4">+1 (234) 567-8900</p>
                    </div>

                    {/* Support 3 - Email Support */}
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <FaEnvelope className="text-orange-600 text-5xl mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800">Email Support</h3>
                        <p className="text-gray-600 mt-2">
                            If you prefer email, send us your query and we will get back to you ASAP.
                        </p>
                        <p className="text-orange-600 font-semibold mt-4">support@example.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Support;
