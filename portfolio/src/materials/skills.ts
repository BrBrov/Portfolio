import SkillData from '../models/skills-model.ts';

export const title: string = 'Skills Summary';

const html: SkillData = {
  name: 'HTML',
  value: 70
}

const css: SkillData = {
  name: 'CSS',
  value: 60
}

const javascript: SkillData = {
  name: 'Javascript',
  value: 70
}

const angular: SkillData = {
  name: 'Angular',
  value: 50
}

export const skills: Array<SkillData> = [html, css, javascript, angular];