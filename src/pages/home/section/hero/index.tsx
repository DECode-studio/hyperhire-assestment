import React from 'react';
import CarouselData from './components/carousel';
import LeftSide from './components/left';
import CareerData from './components/career';

const HeroSection = () => {
    return (
        <section
            className="h-screen flex items-center justify-center text-white"
            style={{
                background: `linear-gradient(to right, #26C2B9, #288BE7), url(/images/background/back_gradient.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'multiply',
                opacity: '0.8'
            }}
        >

            <div className='flex flex-col w-screen px-10 lg:px-48'>

                <div className="flex flex-col xl:flex-row">

                    <div className="flex-1">
                        <LeftSide />
                    </div>

                    <div className="flex-1 px-10 mt-0 md:mt-10 xl:mt-0">
                        <CarouselData />
                    </div>

                </div>

                <CareerData />

            </div>

        </section>
    )
}

export default HeroSection;