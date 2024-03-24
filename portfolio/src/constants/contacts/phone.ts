import {
  ContactsInfo,
  ContactsRecord,
  ContactsTitle
} from '../../types/contacts-types';

const phoneTitle: ContactsTitle = {
  en: 'Phone',
  ru: 'Телефон'
};

const phoneData: ContactsInfo = {
  data: '+375-29-714-94-64',
  type: 'phone',
};

const phone: ContactsRecord = {
  info: [phoneData],
  title: phoneTitle,
  icon: './src/assets/phone.svg',
  getTitle: function (lang: string): string {
    if (lang === 'ru') return this.title.ru;
    return this.title.en;
  }
};

export default phone;