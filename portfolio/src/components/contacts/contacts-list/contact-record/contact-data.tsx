import { ReactElement } from 'react';
import { RecordDataProps } from '../../../../types/contact-data-type';

function CreateRecordData({type, item}: RecordDataProps): ReactElement {

  if (type === 'phone') return (
    <a href={`tel:${item.replace(/[-]/g, '')}`} className='record__data'>
      {item}
    </a>
  );

  if (type === 'mail') return (
    <a href={`mailto:${item.replace(/[-]/g, '')}`}
      className='record__data'>
      {item}
    </a>
  );

  if (type === 'web') return (
    <a href={item} className='record__data'>{item}</a>
  );

  return (
    <span className='record__data'>{item}</span>
  );
}

export default CreateRecordData;