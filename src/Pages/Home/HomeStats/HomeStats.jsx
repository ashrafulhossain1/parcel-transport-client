import { Fade } from 'react-awesome-reveal';
import CountUp from 'react-countup';
import { FaBox, FaTruck, FaUsers } from 'react-icons/fa';

const HomeStats = () => {
    return (
        <div className="bg-orange-500/5 dark:bg-gray-900 py-10">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
                Our Achievements
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                {/* Card 1 */}
                <Fade duration={1000} direction="left">
                    <div className="border bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 py-6 px-4 rounded-xl">
                        <div className="flex justify-center items-center mb-4">
                            <FaBox className="text-6xl text-red-500" />
                        </div>
                        <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
                            <CountUp start={0} end={1500} duration={3} />+
                        </h1>
                        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
                            Total Parcels Booked
                        </p>
                    </div>
                </Fade>

                {/* Card 2 */}
                <Fade duration={1000} direction="up">
                    <div className="border bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 py-6 px-4 rounded-xl">
                        <div className="flex justify-center items-center mb-4">
                            <FaTruck className="text-6xl text-green-500" />
                        </div>
                        <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
                            <CountUp start={0} end={1200} duration={3} />+
                        </h1>
                        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
                            Parcels Delivered
                        </p>
                    </div>
                </Fade>

                {/* Card 3 */}
                <Fade duration={1000} direction="right">
                    <div className="border bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105 py-6 px-4 rounded-xl">
                        <div className="flex justify-center items-center mb-4">
                            <FaUsers className="text-6xl text-blue-500" />
                        </div>
                        <h1 className="text-5xl font-bold text-gray-800 dark:text-white">
                            <CountUp start={0} end={500} duration={3} />+
                        </h1>
                        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
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