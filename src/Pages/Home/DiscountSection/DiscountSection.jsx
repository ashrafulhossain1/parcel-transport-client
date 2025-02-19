import React from "react";
import Lottie from "lottie-react";
import discountAnimation from "./Animation - 1739962244725.json"; // Replace with your Lottie animation file
import './dicount.css';

const DiscountSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                {/* Section Heading */}
                <h2 className="text-4xl font-bold text-center mb-8 text-orange-600">
                    Exclusive Discount Offer!
                </h2>
                <p className="text-lg text-center text-gray-700 mb-12">
                    Send parcels weighing <strong>more than 2kg</strong> and get a{" "}
                    <span className="text-orange-600 font-bold">32% discount</span>—Pay only{" "}
                    <span className="text-orange-600 font-bold">130৳</span> instead of 150৳!
                </p>

                {/* Two-Column Layout */}
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-12">
                    {/* Right Side - Price Card with Lottie Animation */}
                    <div className="w-full md:w-1/3 flex flex-col items-center justify-center text-center space-y-6 bg-white p-4 md:p-6 rounded-3xl shadow-box border-l-8 border-orange-600 h-full">
                        {/* Lottie Animation */}
                        <div className="flex justify-center">
                            <Lottie
                                animationData={discountAnimation}
                                loop={true}
                                style={{
                                    maxWidth: "200px",
                                }}
                            />
                        </div>

                        {/* Price Details */}
                        <div>
                            <p className="text-lg text-gray-700">
                                <span className="text-orange-600 font-bold">130৳</span> only for parcels over 2kg.
                            </p>
                            <p className="text-sm text-gray-500 line-through">Regular price: 150৳</p>
                        </div>

                        {/* Call-to-Action Button */}
                        <button className="bg-orange-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-orange-700 transition">
                            Avail Discount Now
                        </button>
                    </div>

                    {/* Left Side - YouTube Video */}
                    <div className="flex-1 flex justify-center w-full  md:order-1 h-full">
                        <iframe
                            className="rounded-xl shadow-md w-full h-[390px]"
                            src="https://www.youtube.com/embed/q2Ih_z2laYw?si=AbVSFAFj5X3DxN0K"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscountSection;
