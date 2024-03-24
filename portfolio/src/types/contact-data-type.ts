import { ContactsInfo } from './contacts-types';

export interface RecordDataProps extends Omit<ContactsInfo, 'data'>{
  item: string;
}
