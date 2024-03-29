import { MyContacts } from '../../types/contacts-types';
import StoreAppType from '../../types/store-type';

const contactsSelector = (state: StoreAppType): MyContacts => state.contacts;

export default contactsSelector;
