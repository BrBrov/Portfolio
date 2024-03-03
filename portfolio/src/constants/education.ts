import { MyEducation } from '../types/education-types';
import enEducation from './education/en-education';
import ruEducation from './education/ru-education';

const education: MyEducation = {
  en: enEducation,
  ru: ruEducation,
};

export default education;