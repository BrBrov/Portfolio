import GetTitle from './getTitle-type';

export interface ContactsRecord {
  info: Array<string>;
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
