import React from 'react';

const TopDeliveryMen = () => {
    return (
        <div className="bg-green-100/50 py-6 md:py-12">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Top Delivery Men</h2>
                <p className="text-gray-600 mt-4">
                    Recognizing our best-performing delivery professionals for their exceptional service.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {/* Card 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="overflow-hidden">
                        <img
                            src="https://i.ibb.co.com/ngWGY50/istockphoto-1168548978-2048x2048.jpg"
                            alt="John Doe"
                            className="w-full h-72 object-cover transform transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-800 uppercase">John Doe</h3>
                        <p className="text-gray-500 mt-2">Parcels Delivered: <span className="font-bold text-gray-800">120</span></p>
                        <div className="flex items-center mt-4">
                            <span className="text-yellow-400 text-lg">★★★★☆</span>
                        </div>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="overflow-hidden">
                        <img
                            src="https://i.ibb.co.com/ngWGY50/istockphoto-1168548978-2048x2048.jpg"
                            alt="Michael Smith"
                            className="w-full h-72 object-cover transform transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-800 uppercase">Michael Smith</h3>
                        <p className="text-gray-500 mt-2">Parcels Delivered: <span className="font-bold text-gray-800">110</span></p>
                        <div className="flex items-center mt-4">
                            <span className="text-yellow-400 text-lg">★★★★☆</span>
                        </div>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="overflow-hidden">
                        <img
                            src="https://i.ibb.co.com/ngWGY50/istockphoto-1168548978-2048x2048.jpg"
                            alt="Alex Johnson"
                            className="w-full h-72 object-cover transform transition-transform duration-300 group-hover:scale-110"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-800 uppercase">Alex Johnson</h3>
                        <p className="text-gray-500 mt-2">Parcels Delivered: <span className="font-bold text-gray-800">105</span></p>
                        <div className="flex items-center mt-4">
                            <span className="text-yellow-400 text-lg">★★★☆☆</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopDeliveryMen;