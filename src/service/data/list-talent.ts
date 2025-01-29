import { TalentModel } from '../model';

export const listTalent = (): TalentModel[] => {
  const listData: TalentModel[] = [];

  for (let index = 0; index < 10; index++) {
    const data: TalentModel = {
      id: `${index}`,
      name: 'Abhishek Gupta',
      profession: '마케팅',
      experience: '2y+',
      skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    };

    listData.push(data);
  }

  return listData;
};
