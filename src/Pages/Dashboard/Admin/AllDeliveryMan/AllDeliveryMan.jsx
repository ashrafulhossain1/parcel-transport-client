import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AllDeliveryMan = () => {
   const axiosSecure = useAxiosSecure();

   const { data: allDeliveryMans, isLoading, isError } = useQuery({
      queryKey: ['allDeliveryMans'],
      queryFn: async () => {
         const { data } = await axiosSecure.get('users/deliveryPage');
         return data;
      }
   });

   if (isLoading) {
      return <div>Loading...</div>;
   }

   if (isError) {
      return <div>Error fetching data</div>;
   }

   return (
      <div className="overflow-x-auto">
         <h2 className='text-2xl border-b-2 font-semibold uppercase py-4 md:py-6 text-center mb-4'>All Delivery Men</h2>

         <table className='min-w-full bg-white border border-gray-300'>
            <thead>
               <tr className='bg-gray-100'>
                  <th className='px-4 py-2 border-b text-left'>Delivery Man's Name</th>
                  <th className='px-4 py-2 border-b text-left'>Phone Number</th>
                  <th className='px-4 py-2 border-b text-left'>Parcels Delivered</th>
                  <th className='px-4 py-2 border-b text-left'>Average Review</th>
               </tr>
            </thead>
            <tbody>
               {allDeliveryMans.map((man) => (
                  <tr key={man.id} className='hover:bg-purple-100'>
                     <td className='px-4 py-2 border-b'>{man.name}</td>
                     <td className='px-4 py-2 border-b'>{man.phone}</td>
                     <td className='px-4 py-2 border-b'>{man.deliveryCount}</td>
                     <td className='px-4 py-2 border-b'>{man?.reviewAverage}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default AllDeliveryMan;
