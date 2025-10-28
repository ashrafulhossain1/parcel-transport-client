import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import logo5 from '../../../assets/Picsart_25-02-19_14-07-21-794.png';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import UserNav from './UserNav';
import './navbar.css';

const Navbar = () => {
    const { user } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="w-full bg-white/80 backdrop-blur-md shadow-md fixed top-0 left-0 z-50">
            <div className="container mx-auto flex justify-between items-center p-3 md:p-4 text-black">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 text-xl font-bold">
                    <img className="w-8 md:w-10" src={logo5} alt="Logo" />
                    <span className="text-[#E54530]">Transport</span>
                    <span>Pro</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-5">
                    <NavLink to="/" className="btn btn-border">Home</NavLink>
                    <NavLink to="/contactUs" className="btn btn-border">Contact Us</NavLink>
                    <NavLink to="/support" className="btn btn-border">Support</NavLink>
                    <MdOutlineNotificationsActive size={22} />
                    {user ? (
                        <UserNav />
                    ) : (
                        <Link to="/signIn">
                            <button className="btn btn-border rounded-none bg-orange-600 hover:bg-[#fc3737e8] text-white font-bold">
                                Sign In
                            </button>
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-2xl text-black focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isOpen ? <HiX /> : <HiMenuAlt4 />}
                </button>
            </div>

            {/* Mobile Menu (Animated) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg"
                    >
                        <div className="flex flex-col items-start p-4 gap-3">
                            <NavLink
                                to="/"
                                onClick={closeMenu}
                                className="btn w-full text-left btn-border"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/contactUs"
                                onClick={closeMenu}
                                className="btn w-full text-left btn-border"
                            >
                                Contact Us
                            </NavLink>
                            <NavLink
                                to="/support"
                                onClick={closeMenu}
                                className="btn w-full text-left btn-border"
                            >
                                Support
                            </NavLink>
                            <div className="flex items-center gap-2 mt-2">
                                <MdOutlineNotificationsActive size={22} />
                                {user ? (
                                    <UserNav />
                                ) : (
                                    <Link to="/signIn" onClick={closeMenu}>
                                        <button className="btn btn-border w-full bg-orange-600 text-white font-bold hover:bg-[#fc3737e8] transition-all duration-300">
                                            Sign In
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
