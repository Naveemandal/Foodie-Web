import React from 'react'
import Button from '../layouts/Button'

const Home = () => {
    return (
        <>
            <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/images/hero.jpg')] bg-cover bg-no-repeat">
                <div className="w-full lg:w-2/3 space-y-5 ">
                    <h1 className="text-backgroundColor font-semibold text-6xl">Elevate Your Inner Foodie with Every Bite.</h1>
                    <p className="text-backgroundColor">
                        This is a modern and user-friendly online food ordering platform
                        that offers a seamless dining experience. With a diverse menu of
                        delicious dishes, users can easily browse, order, and enjoy their
                        favorite meals from the comfort of their homes. The platform
                        ensures secure payment processing, fast deliveries, and an
                        intuitive interface, making food ordering quick and enjoyable.
                    </p>
                    <div className='lg:pl-44 '>
                     <Button title='Order Now'/>
                </div>
                </div >
                </div>
        </>
    )
}

export default Home
