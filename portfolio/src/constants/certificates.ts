import { Certificate, MyCertificates } from '../types/certificates-types';

const preSchool: Certificate = {
  name: 'JS/FE Pre-School 2022Q2',
  link: 'https://app.rs.school/certificate/q0ad0wko'
};

const jsCert: Certificate = {
  name: 'JavaScript/Front-end 2022Q3',
  link: 'https://app.rs.school/certificate/wpjl3m00'
};

const angularCert: Certificate = {
  name: 'Angular 2023Q1',
  link: 'https://app.rs.school/certificate/rs0evqli'
};

const reactCert: Certificate = {
  name: 'React 2023 Q4',
  link: 'https://app.rs.school/certificate/023xfnfl'
};

const certificates: MyCertificates = {
  certificates: [preSchool, jsCert, angularCert, reactCert],
  title: function (lang: string): string {
    if (lang === 'ru') return 'СЕРТИФИКАТЫ';

    return 'CERTIFICATES';
  }
};


export default certificates;