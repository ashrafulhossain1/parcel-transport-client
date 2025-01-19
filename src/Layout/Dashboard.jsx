import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBars, FaBox, FaChartBar, FaListAlt, FaTimes, FaUser, FaUsers } from 'react-icons/fa';

const Dashboard = () => {
    const { user } = useAuth()
    const [role, isLoading] = useRole()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    if (isLoading) {
        return <h1 className='text-5xl'>Loading.................................</h1>
    }

    return (
        <div className='min-h-screen flex bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text'>
            {/* sidebar */}
            <div className={`fixed top-0 left-0 z-40 w-64 h-screen bg-purple-100 text-black  p-6 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 lg:translate-x-0`}>
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <button
                        className="text-white text-2xl lg:hidden"
                        onClick={toggleSidebar}
                    >
                        <FaTimes />
                    </button>
                </div>
                <ul className='space-y-4'>
                    {
                        role === 'User' &&
                        <>
                            <li>
                                <NavLink to="/dashboard/my-profile" className="flex items-center space-x-2  gap-2 hover:bg-purple-200">
                                    <FaUsers /> My Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/book-parcel" className="flex items-center space-x-2 gap-2 hover:bg-purple-200">
                                    <FaBox /> Book a Parcel
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/my-parcels" className="flex items-center space-x-2  gap-2 hover:bg-purple-200">
                                    <FaListAlt /> My Parcels
                                </NavLink>
                            </li>

                        </>
                    }
                    {
                        role === 'DeliveryMen' &&
                        <>
                            <li>
                                <NavLink to="/dashboard/my-delivery-list" className="flex items-center space-x-2 hover:bg-gray-100">
                                    <FaListAlt /> My Delivery List
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/my-reviews" className="flex items-center space-x-2 hover:bg-gray-100">
                                    <FaUsers /> My Reviews
                                </NavLink>
                            </li>
                        </>
                    }
                    {
                        role === 'Admin' &&
                        <>
                            <li>
                                <NavLink to="/dashboard/all-parcels" className="flex items-center space-x-2 hover:bg-gray-100">
                                    <FaBox /> All Parcels
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/all-users" className="flex items-center space-x-2 hover:bg-gray-100">
                                    <FaUsers /> All Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/all-delivery-men" className="flex items-center space-x-2 hover:bg-gray-100">
                                    <FaUser /> All Delivery Men
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/statistics" className="flex items-center space-x-2 hover:bg-gray-100">
                                    <FaChartBar /> Statistics
                                </NavLink>
                            </li>

                        </>
                    }
                </ul>

                {/* Hamburger Menu for Small Screens */}
                <button
                    className="fixed top-4 left-4 z-50 text-primary text-2xl lg:hidden"
                    onClick={toggleSidebar}
                >
                    <FaBars />
                </button>
            </div>
            {/* main content Outlet */}
            <div className='flex-grow p-4 md:p-6 lg:ml-64'>
                <h2 className="text-3xl font-bold mt-6 md:mt-0 mb-6">
                    Welcome, {user?.displayName} <span className="text-purple-600">{role || "N/A"}</span>
                </h2>
                <div className='py-10'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;