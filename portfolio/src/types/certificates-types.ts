import GetTitle from './getTitle-type';

export interface Certificate {
  name: string;
  link: string;
}


export interface MyCertificates {
  certificates: Array<Certificate>;
  title: GetTitle;
}