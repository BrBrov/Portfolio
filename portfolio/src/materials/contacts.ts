import SummaryInfo from '../models/summary-models.ts';

const about: string = 'I have taken online courses' +
                      ' in HTML/CSS/JS/Angular and' +
                      ' am looking for an opportunity' + 
                      ' to put my knowledge into practice' +
                      ' as a Junior Frontend Developer.' +
                      ' I hope for long-term cooperation.'

const contacts: Array<string> = [
  'Belarus, Postavy',
  '+375-29-714-94-64',
  'borbrov@gmail.com',
  'https://www.linkedin.com/in/brbrov',
  'https://github.com/BrBrov'
];

const summary: SummaryInfo = {
  about: about,
  contacts: contacts
};

export default summary;
