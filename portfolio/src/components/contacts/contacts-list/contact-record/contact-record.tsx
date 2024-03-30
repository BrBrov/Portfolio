import { ReactElement, useContext } from 'react';
import { ContactsRecordProps } from '../../../../types/conatct-record-type';
import ContextApp from '../../../../context/context';
import { ContextType } from '../../../../types/context-type';
import './contact-record.scss';
import CreateRecordData from './contact-data';
import { ContactsInfo } from '../../../../types/contacts-types';

function ContactRecord({record}: ContactsRecordProps): ReactElement {
  const context: ContextType = useContext(ContextApp);

  return (
    <div className='record'>
      <div className='record__image'>
        <img className='record__img'
          src={`./${record.icon}`}
          alt='Location'/>
      </div>
      <div className='record__wrapper'>
        <div className='record__title'>{record.getTitle(context.language)}</div>
        <div className='record__info'>
          {
            record.info.map((item: ContactsInfo) =>(
              <CreateRecordData key={item.data}
                {...{type: item.type, item: item.data}}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default ContactRecord;
