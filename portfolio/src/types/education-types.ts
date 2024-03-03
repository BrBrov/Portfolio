export interface Education {
  period: string;
  organization: string;
  professional: string;
  description:string;
}

export interface MyEducation {
  en: Array<Education>;
  ru: Array<Education>;
}
