import {Component} from 'react';
import './cv.scss';
import Summary from './summary-info/summary-info.tsx';
import summary from '../../materials/contacts.ts';
import Certificates from './certificates/certificates.tsx';

export  default class CV extends Component {
  public render() {
    return (
      <>
        <div className='cv'>
          <div className='cv__wrapper'>
            <Summary { ...summary } />
            < Certificates />
          </div>
        </div>
      </>
    );
  }
}