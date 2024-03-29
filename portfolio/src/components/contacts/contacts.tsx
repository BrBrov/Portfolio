import { ReactElement, useContext } from 'react';
import { useSelector } from 'react-redux';
import contactsSelector from '../../redux/contacts/contacts-selector';
import ContextApp from '../../context/context';
import { MyContacts } from '../../types/contacts-types';
import './contacts.scss';
import { ContextType } from '../../types/context-type';
import ContactsList from './contacts-list/contacts-list';

function Contacts(): ReactElement {
  const context: ContextType = useContext(ContextApp);
  const contacts: MyContacts = useSelector(contactsSelector);
  return (
    <div className='contacts'>
      <span className='contacts__title'>
        {contacts.title(context.language)}
      </span>
      <span className='contacts__separator'></span>
      <ContactsList contacts={contacts.contacts}/>
    </div>
  );
}

export default Contacts;
