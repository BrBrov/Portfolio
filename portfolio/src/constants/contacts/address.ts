import { ContactsRecord, ContactsTitle } from '../../types/contacts-types';

const addressTitle: ContactsTitle = {
  en: 'Address',
  ru: 'Адрес'
};

const address: ContactsRecord = {
  info: ['Belarus, Postavy'],
  title: addressTitle,
  getTitle: function (lang: string): string {
    if (lang === 'ru') return this.title.ru;
    return this.title.en;
  }
};

export default address;