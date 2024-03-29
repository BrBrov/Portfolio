
import { Expertise, MyExpertise } from '../types/expertise-types';

const html: Expertise = {
  name: 'HTML',
  level: 80
};

const css: Expertise = {
  name: 'CSS',
  level: 80
};

const js: Expertise = {
  name: 'Javascript',
  level: 80
};

const ts: Expertise = {
  name: 'Typescript',
  level: 80
};

const angular: Expertise = {
  name: 'Angular',
  level: 60
};

const react: Expertise = {
  name: 'React',
  level: 80
};

const expertise: MyExpertise = {
  kind: [ html, css, js, ts, angular, react],
  title: function (lang: string): string {
    if (lang === 'ru') return 'ЗНАНИЯ';

    return 'EXPERTISE';
  }
};

export default expertise;
