import { useState } from 'react';
import dynamic from 'next/dynamic';
import { observer } from 'mobx-react-lite';
import MainAppController from '@/service/controller/main-page-controller';

import SlideItem from './item';
import { ArrowLeft01Icon, ArrowRight01Icon } from 'hugeicons-react';
import { TalentModel } from '@/service/model';

const Carousel = dynamic(
  () => import('react-spring-3d-carousel').then((mod) => mod.default) as Promise<React.ComponentType<any>>,
  { ssr: false },
);

type Props = {
  controller: MainAppController;
};

const CarouselData = observer(({ controller }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const listTalent: TalentModel[] = controller?.listTalent ?? [];

  const slides = listTalent.map((data, index) => ({
    key: index,
    content: <SlideItem key={index} data={data} />,
    onClick: () => setCurrentIndex(index),
  }));

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listTalent.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + listTalent.length) % listTalent.length);
  };

  return (
    <div className="w-full h-96 relative px-20">
      <Carousel
        slides={slides}
        goToSlide={currentIndex}
        offsetRadius={2}
        animationConfig={{ tension: 120, friction: 14 }}
        showNavigation={false}
      />

      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-0 rounded-full">
        <ArrowLeft01Icon />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-0 rounded-full">
        <ArrowRight01Icon />
      </button>
    </div>
  );
});

export default CarouselData;
