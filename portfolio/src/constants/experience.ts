import { MyExperience } from '../types/experience-type';
import enExperience from './experience/en-experience';
import ruExperience from './experience/ru-experience';

const experience: MyExperience = {
  en: enExperience,
  ru: ruExperience,
  title: function (lang: string): string {
    if (lang === 'ru') return 'ОПЫТ';

    return 'EXPERIENCE';
  }  
};

export default experience;
