import React from 'react';
import img from '../assets/images/about.jpg';
import Button from '../layouts/Button';

const About = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 lg:px-32 px-5 pt-20 lg:pt-40">
               
                <img 
                    src={img} 
                    alt="Delicious food" 
                    className="w-full lg:w-1/2 object-cover rounded-lg shadow-lg"
                />

                <div className="space-y-4">
                    <h1 className="font-semibold text-4xl text-center lg:text-start">
                        Why Choose Us?
                    </h1>
                    <p>
                        At Foodie Web, we are dedicated to transforming your dining experience
                        into something truly extraordinary. We believe that great food brings
                        people together, which is why we curate an extensive collection of the
                        most delicious, diverse, and authentic cuisines.</p>
                    <p>
                        Our commitment to quality and customer satisfaction sets us apart.
                        By partnering with trusted restaurants and local chefs, we ensure
                        every order meets the highest standards of taste and freshness.
                       
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <Button title="Learn More" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
