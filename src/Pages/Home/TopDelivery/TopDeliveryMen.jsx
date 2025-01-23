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

    // console.log(topDelivery)
    return (
        <div className="bg-green-100/50 py-6 md:py-12">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">Top Delivery Men</h2>
                <p className="text-gray-600 mt-4">
                    Recognizing our best-performing delivery professionals for their exceptional service.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {topDelivery.map(man => (
                    <div key={man.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                        <div className="overflow-hidden">
                            <img
                                src={man.image}
                                alt={man.name}
                                className="w-full h-72 object-cover transform transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800 uppercase">{man?.name}</h3>
                            <p className="text-gray-500 mt-2">
                                Parcels Delivered: <span className="font-bold text-gray-800">{man?.deliveryCount}</span>
                            </p>
                            <div className="flex items-center mt-4">
                                {Array.from({ length: 5 }, (_, index) => (
                                    <span
                                        key={index}
                                        className={`text-lg ${
                                            index < Math.round(man?.reviewAverage) ? 'text-yellow-400' : 'text-gray-300'
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
    );
};

export default TopDeliveryMen;
