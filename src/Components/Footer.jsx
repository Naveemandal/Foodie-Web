import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black text-white rounded-t-3xl mt-8 md:mt-0'>
            <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px-5'>
                <div className='w-full md:w-1/4'>
                <h1 className='font-semibold text-xl pb-4'>FoodieWeb</h1>
                <p className='text-sm'>Bringing your favorite meals to your doorstep
                    with ease and a passion for great food.</p>
            </div>
            <div >
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Links</h1>
                <nav className='flex flex-col gap-2'>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>Dishes</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>About</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>Menu</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>Reviews</a>
                </nav>
            </div>


            <div >
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Menu</h1>
                <nav className='flex flex-col gap-2'>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href='/'> Our Dishes</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>Premimum Menu</a>

                </nav>
            </div>

            <div >
                <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>Contact Us</h1>
                <nav className='flex flex-col gap-2'>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>Foodieweb@gmail.com</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>+91 12252 22253</a>
                    <a className='hover:text-brightColor transition-all cursor-pointer' href='/'>Social Media</a>
     
                </nav>
            </div>
            <div>
                <p className='text-center py-4 '>
                    @Copyright developed by
                    <span className='text-brightColor'> Navneet</span>
                </p>
            </div>
            </div>
        </div>
    )
}

export default Footer