import React from 'react';
import useRole from '../../../../hooks/useRole';
import { Navigate } from 'react-router-dom';

const AdminStats = () => {
    const [role, isLoading] = useRole()
    if (isLoading) {
        return <h2>STATS LOADING.... </h2>
    }
    if (role === 'User') return <Navigate to='/dashboard/my-profile' />
    if (role === 'DeliveryMen') return <Navigate to='/dashboard/my-delivery-list' />
    if (role === 'Admin')
        return (
            <div>
                <h3 className='text-6xl uppercase'>Statistics will be write after all</h3>
            </div>
        );
};

export default AdminStats;