import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import { Helmet } from 'react-helmet-async';

const MainLayout = () => {
    return (
        <div>
            <Helmet>
                <title>TransportPro | Home</title>
            </Helmet>
            <div className='sticky  nav-glass  top-0 left-0 z-40'>
                <Navbar></Navbar>
            </div>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
            <div className='bg-gradient-to-r from-gray-800  to-gray-800 text-gray-300'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;