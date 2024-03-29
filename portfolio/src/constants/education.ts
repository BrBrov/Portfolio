import { MyEducation } from '../types/education-types';
import enEducation from './education/en-education';
import ruEducation from './education/ru-education';

const education: MyEducation = {
  en: enEducation,
  ru: ruEducation,
  title: function (lang: string): string  {
    if (lang === 'ru') return 'ОБРАЗОВАНИЕ';

    return 'EDUCATION';
  }
};

export default education;