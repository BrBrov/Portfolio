import { Experience } from '../../types/experience-type';

const ReactExperience: Experience = {
  professional: 'React 2023 Q4',
  period: '2023-2024',
  organization: 'RS School',
  description: 'Выполнил локализацию приложения на разные языки с ' + 
               'использованием контекста, настроил состояние с ' + 
               'помощью Redux Toolkit и написал логику получения и ' +
               'отправки запросов GraphQL с помощью обычных запросов ' + 
               'POST через RTK Query. Создал множество компонентов прилжения' + 
               ' на React. В проектах я использовал Vite и Next JS.'
};

const AngularExperience: Experience = {
  professional: 'Angular 2023Q1',
  period: '2022-2023',
  organization: 'RS School',
  description: 'Использовал в образовательном проекте NgRx, RxJS, ' + 
               'Material Design. Я создал компоненты приложения, ' + 
               'добавил сервисы для интерактивности компонентов, ' + 
               'добавил логику NgRx, использовал Effect для отправки' + 
               'запросов на сервер.'
};

const JsExperience: Experience = {
  professional: 'JavaScript/Front-end 2022Q3',
  period: '2022-2023',
  organization: 'RS School',
  description: 'Адаптивная HTML/CSS-верстка на основе макетов ' +
               'Figma, PSD-шаблонов. Создание элементов на странице ' +
               'с помощью JS/TS, получение данных от разных сервисов ' +
               '(Flickr, OpenWeatherMap API), создание адаптивных ' +
               'элементов (карусель, музыкальный проигрыватель, ' + 
               'анимация с использованием Web Animation API).'
};

const ruExperience: Array<Experience> = [
  ReactExperience,
  AngularExperience,
  JsExperience
];

export default ruExperience;