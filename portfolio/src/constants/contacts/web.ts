import { ContactsRecord, ContactsTitle } from '../../types/contacts-types';

const webTitle: ContactsTitle = {
  en: 'Web',
  ru: 'Web'
};

const web: ContactsRecord = {
  info: ['https://github.com/BrBrov', 'epoc@list.ru'],
  title: webTitle,
  icon: './src/assets/mail.svg',
  getTitle: function (lang: string): string {
    if (lang === 'ru') return this.title.ru;
    return this.title.en;
  }
};

export default web;