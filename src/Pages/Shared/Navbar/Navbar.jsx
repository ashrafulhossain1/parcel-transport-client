import React from 'react';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../assets/logo.png'
import logo5 from '../../../assets/Picsart_25-02-19_14-07-21-794.png'
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import UserNav from './UserNav';

const Navbar = () => {
    const { user } = useAuth()

    return (
        <div className="navbar container mx-auto text-white ">
            <div className="flex-1">
                <Link className="flex justify-center items-center text-xl p-0 text-[#E54530] font-bold">
                    <img className="w-8 md:w-10" src={logo5} alt="" />
                    <span className="text-black inline">Transport</span>
                    <span className="inline">Pro</span>
                </Link>

            </div>
            <div className="flex-none">
                <div className="flex items-center gap-4 px-2">
                    <NavLink to='/' className='btn btn-border rounded-none btn-sm text-black bg-black '>
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
                                <button className="btn btn-border btn-sm rounded-none bg-orange-600 hover:bg-[#fc3737e8] text-white font-bold">
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