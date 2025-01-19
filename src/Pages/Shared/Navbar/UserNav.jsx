import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useRole from '../../../hooks/useRole';

const UserNav = () => {
    const { user, logOut } = useAuth()
    const [role, isLoading] = useRole()
    console.log('User Role -----------', role, isLoading)

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log('successfully Logout')
            })
            .catch(error => {
                console.log('Error by Logout ', error)
            })
    }

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src={user?.photoURL} />
                </div>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm gap-2 dropdown-content bg-gray-500  rounded-box z-[1] mt-3 p-2 shadow">
                <li>
                    <button className="bg-gray-700" disabled={true}>{user?.displayName}</button>
                </li>
                {/* for user */}
                {role === 'User' &&

                    <li>
                        <NavLink to='/dashboard/my-profile' className='bg-gray-700'>
                            Dashboard
                        </NavLink>
                    </li>
                }
                {/* for Delivery Man */}
                {/* TODO */}
                {/* for Admin */}
                <li>
                    <button onClick={handleLogout} className="bg-gray-700">
                        Log Out
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default UserNav;