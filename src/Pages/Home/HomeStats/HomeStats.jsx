import axios from 'axios';
import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import CountUp from 'react-countup';
import { FaBox, FaTruck, FaUsers } from 'react-icons/fa';

const HomeStats = () => {
    const [deliveredCount, setDeliveredCount] = useState(0);
    const [usersCount, setUsersCount] = useState(0);
    const [bookedCount, setBookedCount] = useState(0);

    useEffect(() => {
        // Delivered Count API call using axios
        axios.get('https://parcel-transport-server.vercel.app/deliveredCount')
            .then(response => setDeliveredCount(response.data.deliveredCount))
            .catch(error => console.error('Error fetching delivered count:', error));

        // Users Count API call using axios
        axios.get('https://parcel-transport-server.vercel.app/userCount')
            .then(response => setUsersCount(response.data.userCount))
            .catch(error => console.error('Error fetching users count:', error));

        // Booked Count API call using axios
        axios.get('https://parcel-transport-server.vercel.app/bookedCount')
            .then(response => setBookedCount(response.data.bookedCount))
            .catch(error => console.error('Error fetching booked count:', error));
    }, []);

    return (
        <div className="bg-gray-100 py-12 md:py-20">
            <div className="container mx-auto ">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-10">
                    Our Achievements
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center ">
                    {/* Card 1 */}
                    <Fade duration={1000} direction="left">
                        <div className="bg-white border-l-8 border-orange-600 shadow-md hover:shadow-lg 
                        transition-transform duration-300 transform hover:scale-105 py-8 px-6 rounded-3xl ">
                            <div className="flex justify-center items-center mb-4">
                                <FaBox className="text-7xl text-orange-600" />
                            </div>
                            <h1 className="text-5xl font-bold text-gray-800">
                                <CountUp start={0} end={bookedCount} duration={3} />+
                            </h1>
                            <p className="mt-3 text-lg text-gray-600">
                                Total Parcels Booked
                            </p>
                        </div>
                    </Fade>

                    {/* Card 2 */}
                    <Fade duration={1000} direction="up">
                        <div className="border-l-8 border-orange-600 rounded-3xl bg-white shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 py-8 px-6 ">
                            <div className="flex justify-center items-center mb-4">
                                <FaTruck className="text-7xl text-orange-600" />
                            </div>
                            <h1 className="text-5xl font-bold text-gray-800">
                                <CountUp start={0} end={deliveredCount} duration={5} />+
                            </h1>
                            <p className="mt-3 text-lg text-gray-600">
                                Parcels Delivered
                            </p>
                        </div>
                    </Fade>

                    {/* Card 3 */}
                    <Fade duration={1000} direction="right">
                        <div className="border-l-8 border-orange-600 rounded-3xl bg-white shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 py-8 px-6 ">
                            <div className="flex justify-center items-center mb-4">
                                <FaUsers className="text-7xl text-orange-600" />
                            </div>
                            <h1 className="text-5xl font-bold text-gray-800">
                                <CountUp start={0} end={usersCount} duration={5} />+
                            </h1>
                            <p className="mt-3 text-lg text-gray-600">
                                Active App Users
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default HomeStats;