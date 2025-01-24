import React from 'react';
import useRole from '../../../../hooks/useRole';
import { Navigate } from 'react-router-dom';
import BarChart from './BarChart';
import LineChart from './LIneChart';

const AdminStats = () => {
    const [role, isLoading] = useRole()
    if (isLoading) {
        return <h2>STATS LOADING....</h2>
    }
    if (role === 'User') return <Navigate to='/dashboard/my-profile' />
    if (role === 'DeliveryMen') return <Navigate to='/dashboard/my-delivery-list' />
    if (role === 'Admin')
        return (
            <>
                <div>
                    <h3 className='text-3xl uppercase  font-medium border-b-4 py-3'>Statistics Of Transport Services</h3>
                    <BarChart></BarChart>
                    <LineChart></LineChart>
                </div>
            </>
        );
};

export default AdminStats;