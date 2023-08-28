import SummaryInfo from '../models/summary-models.ts';

const about: string = 'I am considering a change of\n' +
  'profession towards frontend\n' +
  'development. I have completed\n' +
  'online courses in HTML / CSS / JS /\n' +
  'Angular and am looking for an\n' +
  'opportunity to put my knowledge\n' +
  'into practice.\n';

const contacts: Array<string> = [
  'Belarus, Postavy',
  '+375-29-714-94-64',
  'borbrov@gmail.com',
  'https://www.linkedin.com/in/brbrov',
  'https://github.com/BrBrov'
];

const links: Array<string> = [
  './src/assets/address.svg',
  './src/assets/phone.svg',
  './src/assets/mail.svg',
  './src/assets/linkedin.svg',
  './src/assets/git.svg'
];

const photo: string = './src/assets/photo.jpg';

const summary: SummaryInfo = {
  about: about,
  contacts: contacts,
  links: links,
  photo: photo
}

export default summary;
