export interface Experience {
  course: string;
  period: string;
  description: string;
}

export interface MyExperience {
  en: Array<Experience>;
  ru: Array<Experience>;
  organization: string;
  title: (lang: string) => string;  
}