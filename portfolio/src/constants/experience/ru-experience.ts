import { Experience } from '../../types/experience-type';

const ReactExperience: Experience = {
  professional: 'React 2023 Q4',
  period: '2023-2024',
  organization: 'RS School',
  description: 'Я выполнил локализацию на разные языки с ' + 
               'использованием контекста, настроил состояние с ' + 
               'помощью Redux Toolkit и написал логику получения и ' +
               'отправки запросов GraphQL с помощью обычных запросов ' + 
               'POST через RTK Query. И он создал множество компонентов ' + 
               'на React. В проекте я использовал Next JS.'
};

const AngularExperience: Experience = {
  professional: 'Angular 2023Q1',
  period: '2022-2023',
  organization: 'RS School',
  description: 'Используется в образовательном проекте NgRx, RxJS, ' + 
               'Material Design. Я создал компоненты приложения, ' + 
               'добавил сервисы для интерактивности компонентов, ' + 
               'изменил состояние NgRx с помощью Action, добавил ' + 
               'в Редюсер логику для отображения State.'
};

const JsExperience: Experience = {
  professional: 'JavaScript/Front-end 2022Q3',
  period: '2022-2023',
  organization: 'RS School',
  description: 'Adaptive HTML/CSS layout based on figma layouts, ' + 
               'PSD templates. Writing elements on a page using JS ' + 
               'to receive data from third-party services (Flickr, ' + 
               'OpenWeatherMap API), creating interactive elements ' + 
               '(adaptive carousel, music player, animation using ' + 
               'the Web Animation API).'
};

const ruExperience: Array<Experience> = [
  ReactExperience,
  AngularExperience,
  JsExperience
];

export default ruExperience;