import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, YAxis } from 'recharts';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const AdminDashboard = () => {
    const axiosSecure = useAxiosSecure();

    // Fetch data using react-query
    const { data: parcels = [] } = useQuery({
        queryKey: ['parcels'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/parcels');
            return data;
        },
    });

    // Process the fetched data using reduce to group by date
    const chartData = Object.values(
        parcels.reduce((acc, parcel) => {
            const date = parcel.bookingDate.split('T')[0];
            if (acc[date]) {
                acc[date].value += 1;
            } else {
                acc[date] = { date: date, value: 1 };
            }
            return acc;
        }, {})
    );

    return (
        <div>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={chartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                    <YAxis
                        dataKey="value"
                        label={{
                            value: 'Booking Count',
                            angle: -90,
                            position: 'insideLeft',
                        }}
                    />
                    <XAxis dataKey="date" />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
                <div className='flex text-3xl text-purple-500 font-bold items-center justify-center'>
                    <h3>Booking Chart</h3>
                </div>
            </ResponsiveContainer>
        </div>
    );
};

export default AdminDashboard;
