import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import MyParcelRow from "./MyParcelRow";

const MyParcels = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure()
  const { data: myParcels, isLoading: myParcelLoading } = useQuery({
    queryKey: ['myParcels', user?.email],
    enabled: !loading || !!user,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/parcels/${user?.email}`)
      return data
    }
  })

  console.log(myParcels)
  if (myParcelLoading) {
    return <h4>amiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</h4>
  }
  return (
    <div className="p-1 md:p-4 lg:p-6  ">
      <h1 className="text-2xl font-bold mb-4 text-center">My Parcels: {myParcels.length}</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300 dark:border-gray-600">
          <thead className="bg-gray-200 ">
            <tr>
              <th className="border border-gray-300 dark:border-gray-600 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">#</th>
              <th className="border border-gray-300 dark:border-gray-600 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">Parcel Type</th>
              <th className="border border-gray-300 dark:border-gray-600 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">Req. Delivery </th>
              <th className="border border-gray-300 dark:border-gray-600 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">Approx Delivery Date</th>
              <th className="border border-gray-300 dark:border-gray-600 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">Booking Date</th>
              <th className="border border-gray-300 dark:border-gray-600 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">Delivery Men ID</th>
              <th className="border border-gray-300 dark:border-gray-600 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">Booking Status</th>
              <th className="border border-gray-300 dark:border-gray-600 px-1 sm:px-2 md:px-4 py-2 text-sm md:text-base">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              myParcels.map((parcel,inx) => (<MyParcelRow inx={inx} parcel={parcel} key={parcel._id}></MyParcelRow>))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;