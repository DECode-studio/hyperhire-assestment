import { Tick01Icon } from 'hugeicons-react';
import { listCareer } from '../../../../../service/data/list-career';
import { CareerModel } from '@/service/model';
import { useEffect, useRef } from 'react';

const CareerData = () => {
  return (
    <div
      className="mt-10"
      style={{
        scrollSnapType: 'x mandatory',
      }}>
      <div className="hidden lg:block opacity-0 animate-fade-in duration-[500ms]">
        <CareerList />
      </div>

      <div className="block lg:hidden">
        <CareerWrap />
      </div>
    </div>
  );
};

const CareerWrap = () => {
  return (
    <div className="flex flex-row flex-wrap">
      {listCareer.map((e, index) => (
        <div className="flex flex-row mr-2" key={index}>
          <div className="p-1 bg-white rounded-lg h-6 w-6 items-center justify-center">
            <Tick01Icon className="h-4 w-4 text-[#2C599B] text-center font-extrabold" />
          </div>

          <span className="text-lg text-white font-semibold ml-2">{e.name}</span>
        </div>
      ))}
    </div>
  );
};

const CareerList = () => {
  const careerListRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollElement = careerListRef.current;
    if (!scrollElement) return;

    const scrollWidth = scrollElement.scrollWidth;
    const containerWidth = scrollElement.clientWidth;

    const interval = setInterval(() => {
      if (scrollElement.scrollLeft + containerWidth >= scrollWidth) {
        scrollElement.scrollLeft = 0;
      } else {
        scrollElement.scrollBy({
          left: 300,
          behavior: 'smooth',
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={careerListRef} className="career-list-container">
      <div className="career-list-content">
        {listCareer.map((e) => (
          <CareerCard_1 key={e.id} data={e} />
        ))}
      </div>

      <div className="career-list-content">
        {listCareer.map((e) => (
          <CareerCard_1 key={e.id + '_dup'} data={e} />
        ))}
      </div>
    </div>
  );
};

type ComponentsProps = {
  data: CareerModel;
};

const CareerCard_1 = ({ data }: ComponentsProps) => {
  return (
    <div className="w-60 h-16 flex-none">
      <div className="bg-white/20 rounded-lg p-2 flex flex-row items-center">
        <div className="p-2 bg-white/40 rounded-lg w-10 aspect-square flex items-center justify-center">
          {data.icon}
        </div>

        <span className="ml-2 text-white text-xl">{data.name}</span>
      </div>
    </div>
  );
};

export default CareerData;
