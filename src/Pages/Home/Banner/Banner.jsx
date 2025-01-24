import React from 'react';
import bannerImg2 from '../../../assets/banner28.webp'
import './Banner.css'
import { Parallax } from 'react-parallax';
const Banner = () => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={bannerImg2}
            bgImageAlt="Parcel Transport"
            strength={-200}
        >
            <div
                className="hero min-h-[70vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${bannerImg2})` }}
            >
                <div className="hero-overlay bg-opacity-60 bg-black"></div>
                <div className="hero-content text-neutral-content text-center w-[70%] mx-auto">
                    <div className="flex flex-col items-center">
                        <h1 className="mb-5 text-2xl md:text-4xl xl:text-5xl font-bold">
                            Reliable Parcel Transport Services
                        </h1>
                        <p className="mb-5 text-md md:text-lg">
                            Deliver your packages quickly and securely to any destination. We provide the fastest, most
                            reliable parcel transportation services to meet your needs.
                        </p>
                        <fieldset className="form-control w-full">
                            <div className="join md:w-1/2 md:mx-auto">
                                <input
                                    type="text"
                                    placeholder="Enter your pickup or delivery address"
                                    className="input search-filter focus:outline-white input-bordered join-item w-full text-black bg-white placeholder-gray-400"
                                />
                                <button className="btn bg-purple-500 border-none join-item">
                                    Search
                                </button>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Banner;