import { makeAutoObservable } from 'mobx';
import { MenuModel, TalentModel } from '@/service/model';

class MainAppController {
  listMenu: MenuModel[] = [];
  listTalent: TalentModel[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  actionMethod = (mode: string, data?: any) => {
    if (mode == 'menu') {
      this.listMenu = data ?? [];
    }

    if (mode == 'talent') {
      this.listTalent = data ?? [];
    }
  };
}

export default MainAppController;
