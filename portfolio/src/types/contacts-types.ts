import GetTitle from './getTitle-type';

export interface ContactsInfo {
  data: string;
  type: 'web' | 'phone' | 'mail' | 'address';
}
export interface ContactsRecord {
  info: Array<ContactsInfo>;
  title: ContactsTitle;
  icon: string;
  getTitle: GetTitle;
}

export interface ContactsTitle {
  en: string;
  ru: string;
}

export interface MyContacts {
  contacts: Array<ContactsRecord>;
  title: GetTitle;
}
