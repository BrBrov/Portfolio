import {Component} from 'react';
import certificates from '../../../materials/certificates.ts';
import Certificate from './certificate/certificate.tsx';
import CertData from '../../../models/cert-model.ts';
import './certificates.scss';

export default class Certificates extends Component {
  render() {
    const certificatesElems = certificates.map((cert: CertData, id: number) => (
      <Certificate {...cert} key={id}/>
    ));

    return (
      <>
        <div className='certificates'>
          <div className='certificates__wrapper'>
            <span className='certificates__title'>Certificates</span>
          </div>
          <div className='certificates__list-wrapper'>
            <ul className='certificates__list'>
              {certificatesElems}
            </ul>
          </div>
        </div>
      </>
    );
  }
}