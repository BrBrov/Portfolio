import GetTitle from './getTitle-type';

export interface LangSkills {
  level: number;
  title: GetTitle;
}

export interface MyLangSkills {
  skills: Array<LangSkills>;
  title: GetTitle;
}