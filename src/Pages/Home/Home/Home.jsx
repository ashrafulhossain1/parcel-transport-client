import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../OurFeatures/Features';
import HomeStats from '../HomeStats/HomeStats';
import TopDeliveryMen from '../TopDelivery/TopDeliveryMen';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Features></Features>
            </div>
            <div>
                <HomeStats></HomeStats>
            </div>
            <div>
                <TopDeliveryMen></TopDeliveryMen>
            </div>
        </div>
    );
};

export default Home;