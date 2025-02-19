import React from 'react';
// import bannerImg2 from '../../../assets/banner28.webp'
import bannerImg2 from '../../../assets/a-banner.avif'
import './Banner.css'
import { Parallax } from 'react-parallax';
const Banner = () => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={bannerImg2}
            bgImageAlt="Parcel Transport"
            strength={-500}
        >
            <div
                className="hero min-h-[80vh] bg-cover bg-center"
            >
                <div className="hero-overlay bg-opacity-65 bg-black"></div>
                <div className="hero-content text-neutral-content text-center w-[70%] flex flex-col mx-auto">
                    {/* Header Section */}
                    <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold text-white">
                        We Are Provide <span className="text-orange-600">Logistic & Transport</span> Services For You
                    </h1>

                    {/* Subtext Section */}
                    <p className="text-md md:text-lg text-gray-200">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>

                    {/* Button Section */}
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                      <a href="#feature">
                      <button className="btn border-none bg-orange-600 text-white hover:bg-orange-600 rounded-lg px-6 py-3 shadow-lg">
                            Explore More
                        </button>
                      </a>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Banner;