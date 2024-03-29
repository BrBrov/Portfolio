import { ReactElement } from 'react';
import { 
  CertificateRecordProps
} from '../../../types/certificates-record-type';
import './certificate-record.scss';

function CertificateRecord(
  props: CertificateRecordProps
): ReactElement {
  const {name, link} = props;
  return (
    <div className='certificate'>
      <a href={link} className='certificate__link'>{name}</a>
    </div>
  );
}

export default CertificateRecord;
