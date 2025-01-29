import { MenuModel } from '../model';

export const listMenu: MenuModel[] = [
  {
    id: '0',
    name: '채용',
    ref: '#',
    subMenu: [
      {
        id: '0',
        name: '채용',
        ref: '#',
      },
      {
        id: '1',
        name: '해외 개발자 원격 채용',
        ref: '#',
      },
      {
        id: '2',
        name: '외국인 원격 채용 (비개발 직군)',
        ref: '#',
      },
      {
        id: '3',
        name: '한국어 가능 외국인 채용',
        ref: '#',
      },
    ],
  },
  {
    id: '1',
    name: '해외 개발자 활용 서비스',
    ref: '#',
  },
];
