import { GeneralEducation } from './general-education-type';
import GetTitle from './getTitle-type';

export interface Experience extends GeneralEducation{}

export interface MyExperience {
  en: Array<Experience>;
  ru: Array<Experience>;
  title: GetTitle;
}