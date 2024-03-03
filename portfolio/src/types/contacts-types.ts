export interface ContactsRecord {
  info: Array<string>;
  title: ContactsTitle;
  getTitle: (lang: string) => string;
}

export interface ContactsTitle {
  en: string;
  ru: string;
}

export interface MyContacts {
  contacts: Array<ContactsRecord>;
  title: (lang: string) => string;
}
