import React, { useState } from 'react';

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is the Parcel Management System?",
            answer: "Our Parcel Management System is an online platform where users can book parcels for delivery. Admins can assign delivery personnel, and delivery personnel can manage their deliveries."
        },
        {
            question: "How do I create an account?",
            answer: "You can create an account by clicking on the 'Register' button on the home page. Fill out the required information and submit the form."
        },
        {
            question: "What types of users can register?",
            answer: "There are three types of users: Customer, Delivery Man, and Admin. Only Admins can be manually added by the application owner."
        },
        {
            question: "How can I book a parcel?",
            answer: "Once logged in as a customer, navigate to the 'Book a Parcel' page in your dashboard. Fill in the required information and submit your request."
        },
        {
            question: "What payment methods are accepted?",
            answer: "We accept various payment methods, including credit/debit cards through our integrated payment processing system."
        },
        {
            question: "Can I track my parcel?",
            answer: "Yes, users can track the status of their parcels through the 'My Parcels' section in the dashboard."
        },
        {
            question: "How can I contact support?",
            answer: "You can contact our support team through the 'Contact Us' section or via the email provided in the footer of the website."
        }
    ];

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold text-center mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4 max-w-screen-xl mx-auto">
                {faqs.map((faq, index) => (
                    <div key={index} className="border rounded-lg shadow-md">
                        <button onClick={() => toggleAnswer(index)} className="flex justify-between items-center w-full p-4 text-left text-lg font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 focus:outline-none">
                            <span>{faq.question}</span>
                            <svg className={`w-6 h-6 transform transition-transform duration-200 ${activeIndex === index ? 'rotate-45' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        {activeIndex === index && (
                            <div className="p-4 text-gray-600">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;