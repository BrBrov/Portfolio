import { Education } from '../../types/education-types';

const medUniver: Education = {
  period: '2002 - 2008',
  organization: 'Vitebsk State Order of Peoples ' +
                '\'Friendship Medical University\'',
  professional: 'General Medicine Faculty',
  description: 'Studied as an attending physician. Worked in medicine for ' +
               '15 years, last position - head of the department of ' +
               'anesthesiology and resuscitation'
};

const RSSchool: Education = {
  period: '2022-2024',
  organization: 'The Rolling Scopes School',
  professional: 'Front-end development',
  description: 'I studied and grew as a front-end developer, honing my ' +
               'skills on educational projects from simple adaptive layout ' +
               'to Angular and React frameworks using Typescript'
};

const enEducation: Array<Education> = [medUniver, RSSchool];

export default enEducation;