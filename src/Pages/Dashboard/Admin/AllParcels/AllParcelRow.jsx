import React from 'react';

const AllParcelRow = ({allParcels}) => {

    // const {
    //     _id, name, email, phoneNumber, parcelType, parcelWeight,
    //     receiverName, receiverPhoneNumber, deliveryAddress, requestedDeliveryDate,
    //     latitude, longitude, price, bookingDate, approximateDeliveryDate,
    //     deliveryManId, bookingStatus
    //   } = parcel;

    return (
        <tbody>
            {allParcels.map((parcel, index) => (
                <tr key={parcel._id} className="hover:bg-gray-100">
                    <td className="border text-xs md:text-base border-gray-300 dark:border-gray-600 px-2 md:px-4 py-2 text-center">
                        {index+1}
                    </td>
                    <td className="border text-xs md:text-base border-gray-300 px-2 md:px-4 py-2">{parcel.name}</td>
                    <td className="border text-xs md:text-base border-gray-300 px-2 md:px-4 py-2">{parcel.phoneNumber}</td>
                    <td className="border text-xs md:text-base border-gray-300 px-2 md:px-4 py-2 text-center">{parcel.bookingDate}</td>
                    <td className="border text-xs md:text-base border-gray-300 px-1 sm:px-2 md:px-4 py-2 text-center">{parcel.price}</td>
                    <td className="border text-xs md:text-base border-gray-300 px-1 sm:px-2 md:px-4 py-2 text-center">{parcel.bookingStatus}</td>
                    <td className='border text-xs md:text-base border-gray-300 px-2 md:px-4 py-2 text-center'>
                        <button className='btn'>Manage</button>
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

export default AllParcelRow;