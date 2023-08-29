import CertData from '../models/cert-model.ts';

const preSchool: CertData = {
  name: 'JS/FE Pre-School 2022Q2\n',
  link: 'https://app.rs.school/certificate/q0ad0wko'
}

const school: CertData = {
  name: 'JavaScript/Front-end 2022Q3',
  link: 'https://app.rs.school/certificate/wpjl3m00'
}

const angular: CertData = {
  name: 'Angular 2023Q1',
  link: 'https://app.rs.school/certificate/rs0evqli'
}

const certificates: Array<CertData> = [preSchool, school, angular];

export default certificates;