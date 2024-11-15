import React from 'react'
import { Button } from 'react-scroll'
import BgImage from "../assets/images/hero.jpg"

const Home = () => {
    return (
        <>
            <div
                className="min-h-screen flex flex-row justify-between  items-center lg:px-32 px-5 bg-cover bg-no-repeat"
                style={{
                    backgroundImage: `url(${BgImage})`,
                
                }}
            >
                <div className="text-center text-white">
                    <h1 className="text-4xl font-bold mb-4">Elevate Your Inner Foodie with Every Bite.</h1>
                    <p className="mb-6">
                        This is a modern and user-friendly online food ordering platform
                        that offers a seamless dining experience. With a diverse menu of
                        delicious dishes, users can easily browse, order, and enjoy their
                        favorite meals from the comfort of their homes. The platform
                        ensures secure payment processing, fast deliveries, and an
                        intuitive interface, making food ordering quick and enjoyable.
                    </p>
                </div>

                {/* Positioned button */}
                <Button 
                    title="Order Now" 
                    className="bg-brightColor text-white px-8 py-3 rounded-2xl shadow-lg absolute bottom-5 left-5" 
                />
            </div>
        </>
    )
}

export default Home
