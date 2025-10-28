import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useRole from '../../../hooks/useRole';

const UserNav = () => {
    const { user, logOut } = useAuth();
    const [role, isLoading] = useRole();

    const handleLogout = () => {
        logOut()
            .then(() => {
                // console.log('successfully Logout');
            })
            .catch(error => {
                // console.log('Error by Logout ', error);
            });
    };

    return (
        <div className="dropdown dropdown-end">
            {/* Avatar Button */}
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar hover:scale-105 transition-transform duration-200"
            >
                <div className="w-10 h-10 border-2 border-[#E54530] rounded-full overflow-hidden">
                    <img
                        alt="User avatar"
                        src={user?.photoURL || 'https://i.ibb.co/6v1hQZC/default-avatar.png'}
                    />
                </div>
            </div>

            {/* Dropdown Menu */}
            <ul
                tabIndex={0}
                className="menu menu-sm gap-2 dropdown-content bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl rounded-xl z-[1] mt-3 p-2 text-gray-800 min-w-[180px]"
            >
                {/* User Name */}
                <li>
                    <button
                        className="text-center font-semibold text-[#E54530] cursor-default bg-transparent hover:bg-transparent"
                        disabled
                    >
                        {user?.displayName || 'User'}
                    </button>
                </li>

                {/* User Role Dashboards */}
                {role === 'User' && (
                    <li>
                        <NavLink
                            to="/dashboard/my-profile"
                            className="rounded-md transition-all duration-200 hover:bg-[#E54530]/10 hover:text-[#E54530]"
                        >
                            Dashboard
                        </NavLink>
                    </li>
                )}

                {role === 'DeliveryMen' && (
                    <li>
                        <NavLink
                            to="/dashboard/my-delivery-list"
                            className="rounded-md transition-all duration-200 hover:bg-[#E54530]/10 hover:text-[#E54530]"
                        >
                            Dashboard
                        </NavLink>
                    </li>
                )}

                {role === 'Admin' && (
                    <li>
                        <NavLink
                            to="/dashboard"
                            className="rounded-md transition-all duration-200 hover:bg-[#E54530]/10 hover:text-[#E54530]"
                        >
                            Dashboard
                        </NavLink>
                    </li>
                )}

                {/* Logout */}
                <li>
                    <button
                        onClick={handleLogout}
                        className="rounded-md transition-all duration-200 hover:bg-[#E54530] hover:text-white font-medium"
                    >
                        Log Out
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default UserNav;
