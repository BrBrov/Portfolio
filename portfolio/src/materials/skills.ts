import SkillData from '../models/skills-model.ts';

export const title: string = 'Skills Summary';

const html: SkillData = {
  name: 'HTML',
  value: 70
};

const css: SkillData = {
  name: 'CSS',
  value: 70
};

const javascript: SkillData = {
  name: 'Javascript',
  value: 85
};

const angular: SkillData = {
  name: 'Angular',
  value: 75
};

export const skills: Array<SkillData> = [html, css, javascript, angular];