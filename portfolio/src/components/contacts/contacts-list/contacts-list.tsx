import { ReactElement } from 'react';
import { ContactsListProps } from '../../../types/contactsList-type';
import { ContactsRecord } from '../../../types/contacts-types';
import ContactRecord from './contact-record/contact-record';

function ContactsList({contacts}: ContactsListProps): ReactElement {
  return (
    <div className='contacts-list'>
      {contacts.map((record: ContactsRecord, index: number) => (
        <ContactRecord key={index + record.title.en} record={record}/>
      ))}
    </div>
  );
}

export default ContactsList;
