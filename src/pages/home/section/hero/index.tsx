import React from 'react';
import dynamic from 'next/dynamic';
import { observer } from 'mobx-react-lite';
import MainAppController from '@/service/controller/main-page-controller';

import LeftSide from './components/left';
import CareerData from './components/career';
import { Dollar01Icon } from 'hugeicons-react';

const CarouselData = dynamic(() => import('./components/carousel'), { ssr: false });

type Props = {
  controller: MainAppController;
};

const HeroSection = observer(({ controller }: Props) => {
  return (
    <section
      className="h-screen flex items-center justify-center text-white"
      style={{
        background: `linear-gradient(to right, #26C2B9, #288BE7), url(/images/background/back_gradient.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply',
        opacity: '0.8',
      }}>
      <div className="flex flex-col w-screen px-10 lg:px-48">
        <div className="flex flex-col xl:flex-row">
          <div className="flex-1">
            <LeftSide />
          </div>

          <div className="flex-1 px-10 mt-0 md:mt-10 xl:mt-0">
            <div className="flex flex-col justify-center items-center">
              <div className="relative flex items-center opacity-0 animate-fade-in duration-[500ms] mb-10 mt-10 md:mt-0">
                <div className="bg-[#E9F7EF] text-[#00C696] font-bold text-lg px-4 py-2 rounded-lg shadow-lg flex flex-row">
                  <div className="rounded-full bg-[#BBF3D2] p-1 mr-2">
                    <Dollar01Icon className="h-5 w-5" />
                  </div>
                  <span>월 100만원</span>
                </div>
                <div className="absolute bottom-[-6px] left-16 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
              </div>

              <CarouselData controller={controller} />
            </div>
          </div>
        </div>

        <CareerData />
      </div>
    </section>
  );
});

export default HeroSection;
