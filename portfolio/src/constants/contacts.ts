import { MyContacts } from '../types/contacts-types';

const contacts: MyContacts = {
  contacts: [],
  title: function (lang: string): string {
    if (lang === 'ru') return 'КОНТАКТЫ';

    return 'CONTACT ME';
  }
};

export default contacts;