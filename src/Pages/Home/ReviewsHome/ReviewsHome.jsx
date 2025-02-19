import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ReviewsHome = () => {
    const axiosPublic = useAxiosPublic();

    // Fetch reviews using react-query
    const { data: reviews = [], isLoading } = useQuery({
        queryKey: ["all-reviews"],
        queryFn: async () => {
            const { data } = await axiosPublic.get("/reviews");
            return data;
        },
    });

    if (isLoading) {
        return (
            <div className="text-center py-8">
               <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-6">
                    What Our Customers Say
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Discover what our valued customers have to say about our delivery services.
                </p>

                {/* Review Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reviews.slice(0,4).map((review) => (
                        <div
                            key={review._id}
                            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center space-y-4 transition-transform hover:scale-105"
                        >
                            {/* Reviewer's Image */}
                            <img
                                src={review.image || "https://i.ibb.co/41kgGkj/default-user.png"}
                                alt={review.name || "Anonymous"}
                                className="w-20 h-20 rounded-full border-4 border-orange-500 object-cover shadow-md"
                            />

                            {/* Reviewer's Name */}
                            <h3 className="text-lg font-bold text-orange-600 text-center">
                                {review.name || "Anonymous"}
                            </h3>

                            {/* Star Ratings */}
                            <div className="flex space-x-1">
                                {Array(review.rating || 0)
                                    .fill(0)
                                    .map((_, index) => (
                                        <span key={index} className="text-yellow-500 text-xl">
                                            ★
                                        </span>
                                    ))}
                                {Array(5 - (review.rating || 0))
                                    .fill(0)
                                    .map((_, index) => (
                                        <span key={index} className="text-gray-300 text-xl">
                                            ★
                                        </span>
                                    ))}
                            </div>

                            {/* Feedback */}
                            <p className="text-gray-700 text-sm text-center">
                                "{review.feedback}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewsHome;