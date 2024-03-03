export interface Expertise {
  name: string;
  level: number;
}

export interface MyExpertise {
  kind: Array<Expertise>;
  title: (lang: string) => string;
}