import { ReactElement, useContext } from 'react';
import { ContactsRecordProps } from '../../../../types/conatct-record-type';
import ContextApp from '../../../../context/context';
import { ContextType } from '../../../../types/context-type';
import './contact-record.scss';

function ContactRecord({record}: ContactsRecordProps): ReactElement {
  const context: ContextType = useContext(ContextApp);
  return (
    <div className='record'>
      <div className='record__image'>
        <img className='record__img' src={record.icon} alt='Location'/>
      </div>
      <div className='record__wrapper'>
        <div className='record__title'>{record.getTitle(context.language)}</div>
        <div className='record__info'>
          {record.info.map((item: string) => (
            <div key={item} className='record__data'>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactRecord;
