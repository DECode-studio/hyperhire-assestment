'use client';

import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import MainAppController from '@/service/controller/main-page-controller';
import { MenuModel, TalentModel } from '@/service/model';

import Footer from './section/footer';
import Hero from './section/hero';
import Navbar from './section/navbar';

const controller = new MainAppController();

type Props = {
  talentData: TalentModel[];
  menuData: MenuModel;
};

const HomePage = observer(({ talentData, menuData }: Props) => {
  useEffect(() => {
    controller.actionMethod('menu', menuData);
    controller.actionMethod('talent', talentData);
  }, []);

  return (
    <div className="min-h-screen min-w-full container bg-white">
      <Navbar controller={controller} />
      <Hero controller={controller} />
      <Footer />
    </div>
  );
});

export default HomePage;
