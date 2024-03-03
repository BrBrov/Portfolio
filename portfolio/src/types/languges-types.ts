import GetTitle from './getTitle-type';

export interface LangSkills {
  level: string;
  title: GetTitle;
}

export interface MyLangSkills {
  skills: Array<LangSkills>;
  title: GetTitle;
}