import { ReactElement } from 'react';
import { ContactsListProps } from '../../../types/contact-list-type';
import { ContactsRecord } from '../../../types/contacts-types';
import ContactRecord from './contact-record/contact-record';
import './contacts-list.scss';

function ContactsList({contacts}: ContactsListProps): ReactElement {
  return (
    <div className='contacts__list'>
      {contacts.map((record: ContactsRecord, index: number) => (
        <ContactRecord key={index + record.title.en} record={record}/>
      ))}
    </div>
  );
}

export default ContactsList;
