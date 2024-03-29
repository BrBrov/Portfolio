import { ReactElement, useContext } from 'react';
import ContextApp from '../../context/context';
import { ContextType } from '../../types/context-type';
import { useSelector } from 'react-redux';
import certificatesSelector
  from '../../redux/certificates/certificates-selector';
import { Certificate } from '../../types/certificates-types'; 
import CertificateRecord from './certificate-record/certificate-record';
import './certificates.scss';


function Certificates(): ReactElement {
  const context: ContextType = useContext(ContextApp);
  const certificates = useSelector(certificatesSelector);
  return (
    <div className='certificates'>
      <div className='certificates__title'>
        {certificates.title(context.language)}
      </div>
      <div className='certificates__separator'></div>
      <div className='certificates__container'>
        {certificates.certificates.map((cert: Certificate, index: number) => (
          <CertificateRecord key={index + '_' + cert.name} {...cert}/>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
