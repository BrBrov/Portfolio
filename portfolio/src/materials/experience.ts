import ExperienceData from '../models/experience-model.ts';

export const title: string = 'I have no experience in commercial development,' +
                             ' but I used my knowledge on educational projects';

const preSchool: ExperienceData = {
  name: 'JavaScript/Front-end 2022Q3',
  description: 'Adaptive HTML/CSS layout based on figma layouts,' +
               ' PSD templates. Writing elements on a page using JS' +
               ' to receive data from third-party services (Flickr, OpenWeatherMap API),' +
               ' creating interactive elements (adaptive carousel, music player,' +
               ' animation using the Web Animation API).'
}

const school: ExperienceData = {
  name: 'JS/FE Pre-School 2022Q2',
  description: 'Switching from Javascript to Typescript. ' +
               'Used for Webpack. I wrote a tag game using Canvas. ' +
               'In a team project, he was a team leader, developed a ' +
               'Backend on Express and a MongoDB database. The final ' +
               'project was written in classes using Typescript, SCSS.'
}

const angular: ExperienceData = {
  name: 'Angular 2023Q1',
  description: 'Used in the educational project NgRx, RxJS, Material Design. ' +
               'I created application components, added services for interactivity ' +
               'of components, changed the state of NgRx using Action, added logic ' +
               'to the Reducer to display State.'
}

export const experience: Array<ExperienceData> = [preSchool, school, angular];