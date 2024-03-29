import { Experience } from '../../types/experience-type';

const ReactExperience: Experience = {
  professional: 'React 2023 Q4',
  period: '2023-2024',
  organization: 'RS School',
  description: 'Localized the application into different ' +
               'languages ​​using context, configured the state ' +
               'using Redux Toolkit and wrote the logic for ' +
               'receiving and sending GraphQL requests using regular ' +
               'POST requests via RTK Query. Created many application ' +
               'components using React. I used Vite and Next JS in the ' +
               'projects.'
};

const AngularExperience: Experience = {
  professional: 'Angular 2023Q1',
  period: '2022-2023',
  organization: 'RS School',
  description: 'Used NgRx, RxJS, Material Design in an educational' +
               ' project. I created application components, added ' +
               'services for component interactivity, added NgRx logic, ' +
               'used Effect to send requests to the server.'
};

const JsExperience: Experience = {
  professional: 'JavaScript/Front-end 2022Q3',
  period: '2022-2023',
  organization: 'RS School',
  description: 'Adaptive HTML/CSS layout based on Figma layouts and ' +
               'PSD templates. Creating elements on a page using JS/TS, ' +
               'receiving data from different services (Flickr, ' + 
               'OpenWeatherMap API), creating adaptive elements (carousel, ' +
               'music player, animation using Web Animation API).'
};

const enExperience: Array<Experience> = [
  ReactExperience,
  AngularExperience,
  JsExperience
];

export default enExperience;