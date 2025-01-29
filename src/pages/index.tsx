import { GetServerSideProps } from 'next';

import HomePage from './home';
import { MenuModel, TalentModel } from '@/service/model';

type Props = {
  talentData: TalentModel[];
  menuData: MenuModel;
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const host = req.headers.host;
  const apiUrl = host?.includes('localhost') ? 'http://localhost:3000' : `https://${host}`;

  const [listTalent, listMenu] = await Promise.all([
    fetch(`${apiUrl}/api/list-talent`),
    fetch(`${apiUrl}/api/list-menu`),
  ]);

  const talentData = await listTalent.json();
  const menuData = await listMenu.json();

  return {
    props: {
      talentData,
      menuData,
    },
  };
};

const MainPage = ({ talentData, menuData }: Props) => {
  return <HomePage talentData={talentData} menuData={menuData} />;
};

export default MainPage;
