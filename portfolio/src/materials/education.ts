import EducationData from '../models/education-model.ts';

export const title: string = 'Education';

const vsmu: EducationData = {
  institution: 'VITEBSK STATE ORDER OF PEOPLES’ FRIENDSHIP MEDICAL UNIVERSITY',
  period: '2002 - 2008, General Medicine Faculty'
};

const rsschool: EducationData = {
  institution: 'The Rolling Scopes School',
  period: '2022 - 2023, JavaScript/Front-end, Angular Course'
};

export const education: Array<EducationData> = [vsmu, rsschool];