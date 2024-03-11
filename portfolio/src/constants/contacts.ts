import { MyContacts } from '../types/contacts-types';
import address from './contacts/address';
import phone from './contacts/phone';
import web from './contacts/web';

const contacts: MyContacts = {
  contacts: [address, phone, web],
  title: function (lang: string): string {
    if (lang === 'ru') return 'КОНТАКТЫ';

    return 'CONTACT ME';
  }
};

export default contacts;