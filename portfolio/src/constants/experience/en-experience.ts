import { Experience } from '../../types/experience-type';

const ReactExperience: Experience = {
  professional: 'React 2023 Q4',
  period: '2023-2024',
  organization: 'RS School',
  description: 'I performed localization into different ' + 
               'languages using context, configured the ' + 
               'state using the Redux Toolkit, and wrote ' + 
               'the logic for receiving and sending GraphQL ' + 
               'queries using regular POST queries via RTK Query. ' + 
               'And he created many components on React. I used Next ' + 
               'JS in the project.'
};

const AngularExperience: Experience = {
  professional: 'Angular 2023Q1',
  period: '2022-2023',
  organization: 'RS School',
  description: 'Used in the educational project NgRx, RxJS, ' + 
               'Material Design. I created application components, ' + 
               'added services for interactivity of components, ' + 
               'changed the state of NgRx using Action, added logic ' + 
               'to the Reducer to display State.'
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

const enExperience: Array<Experience> = [
  ReactExperience,
  AngularExperience,
  JsExperience
];

export default enExperience;