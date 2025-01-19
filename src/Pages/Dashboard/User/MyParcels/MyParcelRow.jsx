import { FaEdit } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import React from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const MyParcelRow = ({ parcel, inx, refetch }) => {
   const axiosSecure = useAxiosSecure()
   const {
      _id,
      name,
      email,
      phoneNumber,
      parcelType,
      parcelWeight,
      receiverName,
      receiverPhoneNumber,
      deliveryAddress,
      requestedDeliveryDate,
      latitude,
      longitude,
      price,
      bookingDate,
      approximateDeliveryDate,
      deliveryManId,
      bookingStatus
   } = parcel;

   const handleCancel = (id) => {
      axiosSecure.patch(`/parcels/returned/${id}`)
         .then(res => {
            if (res.data.modifiedCount) {
               toast.success('Your parcel returned successfully')
               console.log(res.data)
               refetch()
            }
         })
         .catch(error => {
            console.log('status update error', error)
         })
   }

   return (
      <>
         <tr>
            <td className="border text-xs md:text-base border-gray-300 px-2 md:px-4 py-2">{inx + 1}</td>
            <td className="border text-xs md:text-base border-gray-300 px-2 md:px-4 py-2">{parcelType}</td>
            <td className="border text-xs md:text-base border-gray-300 px-2 md:px-4 py-2">{requestedDeliveryDate}</td>
            <td className="border text-xs md:text-base border-gray-300 px-2 md:px-4 py-2">{approximateDeliveryDate || 'N/A'}</td>
            <td className="border text-xs md:text-base border-gray-300 px-2 md:px-4 py-2">{bookingDate}</td>
            <td className="border text-xs md:text-base border-gray-300 px-2 md:px-4 py-2">{deliveryManId || 'N/A'}</td>


            {/* status */}
            <td
               className={`border text-xs font-semibold md:text-base border-gray-300 px-2 md:px-4 py-2 ${parcel.bookingStatus === 'pending'
                  ? 'text-yellow-500'
                  : parcel.bookingStatus === 'on the way'
                     ? 'text-blue-500'
                     : parcel.bookingStatus === 'delivered'
                        ? 'text-green-500'
                        : 'text-red-500'
                  }`}
            >
               {parcel.bookingStatus}
            </td>


            {/* action */}
            <td className="border text-xs md:text-base border-gray-300 space-x-3 px-2 md:px-4 py-2 flex justify-between items-center">


               {/* update button is ok */}

               {
                  bookingStatus === 'pending' ?

                     <Link to={`/dashboard/update-parcel/${_id}`}>
                        <button
                           title="Update">
                           <FaEdit />
                        </button>
                     </Link>
                     :
                     <button
                        disabled={true}
                        className="cursor-not-allowed opacity-50">
                        <FaEdit />
                     </button>
               }

               <button
                  onClick={() => handleCancel(_id)}
                  disabled={bookingStatus !== 'pending'}
                  title={`${bookingStatus === 'pending' ? "Cancel" : ""}`}
                  className={`text-red-500 ${bookingStatus !== 'pending' ? 'cursor-not-allowed opacity-50' : ''}`}
               >
                  <MdCancel />
               </button>

               <button className="text-green-600 font-bold">
                  <MdOutlinePayment />
                  Pay
               </button>
            </td>
         </tr>
      </>
   );
};

export default MyParcelRow;