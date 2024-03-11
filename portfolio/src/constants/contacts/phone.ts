import { ContactsRecord, ContactsTitle } from '../../types/contacts-types';

const phoneTitle: ContactsTitle = {
  en: 'Phone',
  ru: 'Телефон'
};

const phone: ContactsRecord = {
  info: ['+375-29-714-94-64'],
  title: phoneTitle,
  icon: './src/assets/phone.svg',
  getTitle: function (lang: string): string {
    if (lang === 'ru') return this.title.ru;
    return this.title.en;
  }
};

export default phone;