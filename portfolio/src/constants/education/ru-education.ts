import { Education } from '../../types/education-types';

const medUniver: Education = {
  period: '2002 - 2008',
  organization: 'Витебский государственный университет ' +
                'ордена Дружбы народов медицинский ',
  professional: 'Факультет общей медицины',
  description: 'Учился по профессии лечащей врач. Стаж работы в медицине ' +
               '15 лет, последняя должность – заведующий отделением ' +
               'анестезиологии и реаниматологии.'
};

const RSSchool: Education = {
  period: '2022-2024',
  organization: 'The Rolling Scopes School',
  professional: 'Front-end разработчик',
  description: 'Я учился и рос как фронтенд-разработчик, оттачивая свои ' +
               'навыки на образовательных проектах: от простой адаптивной ' + 
               'верстки до фреймворков Angular и React с использованием ' + 
               'Typescript.'
};

const ruEducation: Array<Education> = [RSSchool, medUniver];

export default ruEducation;