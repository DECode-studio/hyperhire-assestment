export type CareerModel = {
  id: string;
  name: string;
  icon: React.ReactNode;
};

export type MenuModel = {
  id: string;
  name: string;
  ref: string;
  subMenu?: SubMenuModel[];
};

export type SubMenuModel = {
  id: string;
  name: string;
  ref: string;
};

export type TalentModel = {
  id: string;
  name: string;
  profession: string;
  experience: string;
  skills: string[];
};
