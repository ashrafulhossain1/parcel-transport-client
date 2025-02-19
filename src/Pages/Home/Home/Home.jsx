import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../OurFeatures/Features';
import HomeStats from '../HomeStats/HomeStats';
import TopDeliveryMen from '../TopDelivery/TopDeliveryMen';
import FAQs from '../FAQs/FAQs';
import TransportationSection from '../TransportationSection/TransportationSection';
import PackageSection from '../PackageSection/PackageSection';
import DiscountSection from '../DiscountSection/DiscountSection';
import ReviewsHome from '../ReviewsHome/ReviewsHome';

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
            <div>
                <TransportationSection></TransportationSection>
            </div>
            <div>
                <PackageSection></PackageSection>
            </div>
            <div>
                <DiscountSection></DiscountSection>
            </div>
            <div>
                <ReviewsHome></ReviewsHome>
            </div>
            <div className='bg-gray-100'>
                <FAQs></FAQs>
            </div>
        </div>
    );
};

export default Home;