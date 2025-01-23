import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MyReviews = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: reviews = [] } = useQuery({
        queryKey: ['myReviews', user?.email],
        enabled: !loading && !!user,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/my-reviews/${user?.email}`);
            return data;
        }
    });


    // const reviewData = {
    //     name: user?.displayName,
    //     image: user.photoURL,
    //     email: email,
    //     parcelId: _id,
    //     rating: star,
    //     feedback,
    //     deliveryManId
    // };

    return (
        <div className="container mx-auto p-4">
            <h3 className="text-2xl font-semibold mb-6 text-center border-b-2 py-2">My Reviews: {reviews.length}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {reviews.map((review) => (
                    <div key={review._id} className=" bg-gray-50 border rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <div className="flex items-center p-4 space-x-4">
                            <img
                                src={review?.image}
                                alt={review?.name}
                                className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
                            />
                            <div className="flex-1">
                                <h4 className="font-semibold text-xl text-gray-800">{review?.name}</h4>
                                <div className="flex items-center mt-1 text-yellow-500">
                                    {[...Array(5)].map((_, index) => (
                                        <svg
                                            key={index}
                                            className={`w-5 h-5 ${index < review.rating ? 'fill-current' : 'fill-gray-300'}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 15l-3.13 1.65a1 1 0 0 1-1.45-1.05l.6-3.74L2.24 8.45a1 1 0 0 1 .55-1.7l3.85-.56 1.72-3.49a1 1 0 0 1 1.79 0l1.72 3.49 3.85.56a1 1 0 0 1 .55 1.7l-2.78 2.67.6 3.74a1 1 0 0 1-1.45 1.05L10 15z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-700 text-sm p-4">{review.feedback}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyReviews;
