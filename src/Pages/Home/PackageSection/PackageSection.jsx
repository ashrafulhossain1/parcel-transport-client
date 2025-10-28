import React from "react";
import Lottie from "lottie-react";
// import deliveryAnimation from "./Animation - 1739958038886.json"; // Replace with a better animation JSON file

const PackageSection = () => {
    const packages = [
        {
            weight: "0-1 kg",
            price: "50 TK",
            description: "Lightweight parcel delivery within the city.",
        },
        {
            weight: "1-2 kg",
            price: "100 TK",
            description: "Standard delivery for medium-sized packages.",
        },
        {
            weight: "Above 2 kg",
            price: "150 TK",
            description: "Heavy package delivery across regions.",
        },
    ];

    return (
        <section className="py-10 lg:py-16 bg-[#F3F4F6] ">
            <div className="container mx-auto p-4 md:p-10 rounded-3xl  shadow-lg bg-white">
                {/* Section Heading */}
                <h2 className="text-4xl font-extrabold text-center mb-4 text-orange-600">
                    Affordable Package Pricing
                </h2>
                <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
                    Explore our transparent and competitive pricing plans for all your delivery needs. Whether it’s a lightweight parcel or a heavy shipment, we’ve got you covered at unbeatable rates.
                </p>

                {/* Two-Column Layout */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    {/* Left Side - Lottie Animation */}
                    <div className="flex items-center justify-center w-full md:w-1/3 ">
                        {/* <Lottie
                            animationData={deliveryAnimation}
                            loop={true}
                            style={{
                                maxWidth: "350px",
                                margin: "0 auto",
                            }}
                        /> */}
                    </div>

                    {/* Right Side - Packages */}
                    <div className="grid flex-grow grid-cols-1 md:grid-cols-3 gap-6 md:w-1/2">
                        {packages.map((pkg, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-b from-orange-50 to-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 text-center border border-orange-200"
                            >
                                {/* Weight */}
                                <h3 className="text-xl font-bold text-orange-600 mb-2">
                                    {pkg.weight}
                                </h3>
                                {/* Price */}
                                <p className="text-3xl font-extrabold text-gray-800 mb-2">
                                    {pkg.price}
                                </p>
                                {/* Description */}
                                <p className="text-sm text-gray-600">
                                    {pkg.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PackageSection;