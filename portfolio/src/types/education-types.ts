import { GeneralEducation } from './general-education-type';
import GetTitle from './getTitle-type';

export type Education = GeneralEducation;

export interface MyEducation {
  en: Array<Education>;
  ru: Array<Education>;
  title: GetTitle;
}
