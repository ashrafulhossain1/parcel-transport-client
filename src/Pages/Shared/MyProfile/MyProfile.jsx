import React from "react";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
    const { user, loading } = useAuth();
    const [role, isLoading] = useRole();
    const axiosSecure = useAxiosSecure();

    const { data: profileInformation } = useQuery({
        queryKey: ["profile-info", user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/profileInfo/${user?.email}`);
            return data;
        },
    });

    if (loading || isLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    // Conditional descriptions based on role
    const getDescription = () => {
        if (role === "User") {
            return "You are a valued customer. Enjoy exploring our platform and making the most of your experience!";
        } else if (role === "DeliveryMen") {
            return "You are an essential part of our delivery team, ensuring fast and reliable service.";
        } else if (role === "Admin") {
            return "You have administrative access to manage and oversee the platform.";
        } else {
            return "Welcome to your profile! Let's make your experience great.";
        }
    };

    return (
        <div className="w-full md:w-1/2 p-4 bg-gradient-to-br from-gray-50 via-purple-50 to-gray-100 shadow-2xl rounded-lg mt-4">
            {/* Profile Header */}
            <Helmet>
                <title>Profile | TransportPro</title>
            </Helmet>
            <div className="flex items-center gap-6 p-5 bg-gradient-to-r from-purple-100 to-gray-100 rounded-lg shadow-lg">
                <img
                    src={user?.photoURL || "https://via.placeholder.com/150"}
                    alt="Profile"
                    className="w-28 h-28 rounded-full object-cover border-4 border-purple-300 shadow-lg"
                />
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 uppercase">{user?.displayName || 'not available'}</h1>
                    <p className="text-sm text-purple-600 font-semibold">Role: {role || "Role not assigned"}</p>
                    <p className="text-xs text-gray-600 mt-1 font-medium">
                        First login: {user?.metadata?.creationTime || "Not available"}
                    </p>
                </div>
            </div>

            {/* Profile Info */}
            <div className="mt-8 space-y-6">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                    <label className="block text-gray-500 text-sm font-medium">Email</label>
                    <p className="text-lg text-gray-800 font-semibold">{user?.email || "Not available"}</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                    <label className="block text-gray-500 text-sm font-medium">Phone</label>
                    <p className="text-lg text-gray-800 font-semibold">
                        {profileInformation?.number || "Not available"}
                    </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                    <label className="block text-gray-500 text-sm font-medium">About You</label>
                    <p className="text-gray-700">
                        {getDescription()}
                    </p>
                </div>
            </div>

            {/* Update Profile Button */}
            <div className="mt-6">
                <Link to='/dashboard/edit-profile'>
                    <button
                        className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-3 px-4 rounded-lg font-semibold shadow-md hover:from-purple-600 hover:to-purple-800 transition-transform transform hover:scale-105"
                    >
                        Update Profile
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MyProfile;
