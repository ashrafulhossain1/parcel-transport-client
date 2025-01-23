import React from 'react';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../assets/logo.jpg'
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import UserNav from './UserNav';

const Navbar = () => {
    const { user } = useAuth()

    return (
        <div className="navbar container mx-auto   text-white shadow-lg">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl p-0">
                    <img className="w-8" src={logo} alt="" />
                    TransportPro
                </Link>
            </div>
            <div className="flex-none">
                <div className="flex items-center gap-4 px-2">
                    <NavLink to='/' className='btn btn-sm bg-black text-white hover:bg-gray-950'>
                        Home
                    </NavLink>
                    <MdOutlineNotificationsActive />
                </div>
                {
                    user ?
                        <UserNav></UserNav>
                        :
                        <>
                            <Link to='/signIn'>
                                <button className="btn btn-sm">
                                    sign in
                                </button>
                            </Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;