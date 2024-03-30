import {
  ContactsInfo,
  ContactsRecord,
  ContactsTitle
} from '../../types/contacts-types';

const addressTitle: ContactsTitle = {
  en: 'Address',
  ru: 'Адрес'
};

const addressData: ContactsInfo = {
  data: 'Belarus, Postavy',
  type: 'address'
};

const address: ContactsRecord = {
  info: [addressData],
  title: addressTitle,
  icon: 'location.svg',
  getTitle: function (lang: string): string {
    if (lang === 'ru') return this.title.ru;
    return this.title.en;
  }
};

export default address;