import React from "react";

const TransportationSection = () => {
    const transportOptions = [
        {
            image: "https://img.freepik.com/free-vector/airplane_1308-82259.jpg?t=st=1739957380~exp=1739960980~hmac=f995b4e440e0e7721df210fa14e258d2cfa3122c0f7b3511867c9da40caa4803&w=1380", // Replace with actual image
            title: "Parcel Delivery",
            description: "Secure and fast parcel delivery services worldwide.",
        },
        {
            image: "https://img.freepik.com/free-photo/international-container-cargo-ship-harborfreight-transportation-shipping-ai-generative_123827-23694.jpg?t=st=1739957200~exp=1739960800~hmac=745467ef8c9c5b4a46ac8e091e141abe68192a835ef06430f0bd2ea2560838d8&w=1060", // Replace with actual image
            title: "Ocean Freight",
            description: "Reliable shipping solutions across seas and oceans.",
        },
        {
            image: "https://www.plslogistics.com/wp-content/uploads/2022/10/5fac3c7f9a07e942e0b82a9a_iStock-1189526452-1.jpg", // Replace with actual image
            title: "Rail Transport",
            description: "Eco-friendly transport for bulk goods via trains.",
        },
        {
            image: "https://img.freepik.com/free-photo/truck-vehicle-with-trailers-background_342744-1297.jpg?t=st=1739957292~exp=1739960892~hmac=40b571f00581e781da21d30a264f314862e09a5d9c019a38eb7488f0c10825f7&w=1060", // Replace with actual image
            title: "Truck Freight",
            description: "On-road transport solutions for quick deliveries.",
        },
    ];

    return (
        <section className="py-12 bg-gray-100">
            <div className="container mx-auto px-4">
                {/* Updated Heading with Orange Color */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-orange-600">
                    Seamless Global Transportation Solutions
                </h2>
                {/* Description */}
                <p className="text-lg text-gray-700 w-3/4 mx-auto text-center mb-8">
                    We provide innovative and reliable transportation services tailored to meet your logistics needs. From air and ocean freight to rail and road transport, our solutions ensure efficiency, security, and sustainability.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {transportOptions.map((option, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden bg-black text-white rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
                        >
                            <img
                                src={option.image}
                                alt={option.title}
                                className="w-full h-56 object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-4">
                                <h3 className="text-xl md:text-2xl font-bold text-center">
                                    {option.title}
                                </h3>
                                <p className="text-sm mt-2 text-center">{option.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TransportationSection;