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
  description: 'Адаптивная HTML/CSS-верстка на основе макетов ' +
               'Figma, PSD-шаблонов. Написание элементов на странице ' +
               'с помощью JS для получения данных от сторонних сервисов ' +
               '(Flickr, OpenWeatherMap API), создание интерактивных ' +
               'элементов (адаптивная карусель, музыкальный проигрыватель, ' + 
               'анимация с использованием Web Animation API).'
};

const ruExperience: Array<Experience> = [
  ReactExperience,
  AngularExperience,
  JsExperience
];

export default ruExperience;