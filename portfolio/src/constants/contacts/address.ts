import { ContactsRecord, ContactsTitle } from '../../types/contacts-types';

const addressTitle: ContactsTitle = {
  en: 'Addres',
  ru: 'Адрес'
};

const address: ContactsRecord = {
  info: ['Belarus, Postavy'],
  title: addressTitle,
  icon: './src/assets/location.svg',
  getTitle: function (lang: string): string {
    if (lang === 'ru') return this.title.ru;
    return this.title.en;
  }
};

export default address;