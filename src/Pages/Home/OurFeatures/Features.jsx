import React from 'react';
import worldMap from '../../../assets/map.jpg';
import { FaHeadset, FaShieldAlt, FaStopwatch } from 'react-icons/fa';

const Features = () => {
    return (
        <div
            className="relative bg-cover bg-center py-4 md:py-8 px-2 md:px-4"
            style={{
                backgroundImage: `url(${worldMap})`,
            }}
        >
            {/* Backdrop Blur for Entire Component */}
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

            {/* Content Section */}
            <div className="relative py-10 px-4 max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold text-orange-600">
                        We Provide Service Across The Globe
                    </h2>
                    <p className="text-gray-600 mt-4">
                        We offer a Global Logistics Network with our worldwide offices and
                        high-quality distribution facilities, staffed by dedicated teams of
                        experts. We have more than 13 years of experience in this field.
                    </p>
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="text-center">
                        <FaStopwatch className="text-orange-600 text-6xl mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800">Fast Service</h3>
                        <p className="text-gray-600 mt-2">
                            Our team focuses on delivering cargo with utmost care to eliminate
                            potential shipping risks and reduce freight costs through proper
                            planning.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="text-center">
                        <FaShieldAlt className="text-orange-600 text-6xl mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800">Safe Delivery</h3>
                        <p className="text-gray-600 mt-2">
                            By providing insurance coverage along with our freight services,
                            we make your transport safe and more secure.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="text-center">
                        <FaHeadset className="text-orange-600 text-6xl mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800">24/7 Support</h3>
                        <p className="text-gray-600 mt-2">
                            We provide freight and logistics services on a 24x7 basis. Our
                            team is available to assist customers with all inquiries.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
