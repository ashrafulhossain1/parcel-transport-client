import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import AllParcelRow from './AllParcelRow';

const AllParcels = () => {
    const axiosSecure = useAxiosSecure()

    const { data: allParcels = [], isLoading } = useQuery({
        queryKey: ['allParcels'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/parcels')
            console.log(data)
            return data
        }
    })


    return (
        <div className="p-1 md:p-4 lg:p-6  text-black">
            <h1 className="text-2xl font-bold mb-4 text-center">My Booked Tutors</h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="border border-gray-300 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">#</th>
                            <th className="border border-gray-300 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">Name</th>
                            <th className="border border-gray-300 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">Number</th>
                            <th className="border border-gray-300 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">Booking Date</th>
                            <th className="border border-gray-300 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">Cost</th>
                            <th className="border border-gray-300 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">Status</th>
                            <th className="border border-gray-300 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">Action</th>
                        </tr>
                    </thead>
                    <AllParcelRow
                        allParcels={allParcels}
                    ></AllParcelRow>
                </table>
            </div>
        </div>
    );
};

export default AllParcels;