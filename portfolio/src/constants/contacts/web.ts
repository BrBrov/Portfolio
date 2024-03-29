import { 
  ContactsInfo,
  ContactsRecord,
  ContactsTitle
} from '../../types/contacts-types';

const webTitle: ContactsTitle = {
  en: 'Web',
  ru: 'Web'
};

const git: ContactsInfo = {
  data: 'https://github.com/BrBrov',
  type: 'web'
};

const mail: ContactsInfo = {
  data: 'epoc@list.ru',
  type: 'mail'
};

const web: ContactsRecord = {
  info: [ git, mail],
  title: webTitle,
  icon: './src/assets/mail.svg',
  getTitle: function (lang: string): string {
    if (lang === 'ru') return this.title.ru;
    return this.title.en;
  }
};

export default web;