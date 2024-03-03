import GetTitle from './getTitle-type';

export interface Expertise {
  name: string;
  level: number;
}

export interface MyExpertise {
  kind: Array<Expertise>;
  title: GetTitle;
}