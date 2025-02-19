import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const TopDeliveryMen = () => {
    const axiosPublic = useAxiosPublic();
    const { data: topDelivery = [], isLoading } = useQuery({
        queryKey: ['topDelivery'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/topDeliveryMen');
            return data;
        }
    });

    if (isLoading) {
        return <div className="text-center py-12">Loading...</div>;
    }

    return (
        <div className="bg-white py-8 md:py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-2xl  md:text-3xl lg:text-5xl font-bold text-orange-600">Top Delivery Men</h2>
                    <p className="text-gray-600 mt-4 max-w-lg mx-auto">
                        Recognizing our best-performing delivery professionals for their exceptional service.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {topDelivery.map((man) => (
                        <div
                            key={man.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={man.image}
                                    alt={man.name}
                                    className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-orange-600 uppercase">{man?.name}</h3>
                                <p className="text-gray-500 mt-2">
                                    Parcels Delivered:{' '}
                                    <span className="font-bold text-gray-800">{man?.deliveryCount}</span>
                                </p>
                                <div className="flex items-center mt-4">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <span
                                            key={index}
                                            className={`text-lg ${
                                                index < Math.round(man?.reviewAverage)
                                                    ? 'text-yellow-500'
                                                    : 'text-gray-300'
                                            }`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopDeliveryMen;