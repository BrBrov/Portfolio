import {Component} from 'react';
import './cv.scss';
import Summary from './summary-info/summary-info.tsx';
import summary from '../../materials/contacts.ts';
import Certificates from './certificates/certificates.tsx';
import FullName from './full-name/full-name.tsx';
import Experience from './experience/experience.tsx';

export  default class CV extends Component {
  public render() {
    return (
      <>
        <div className='cv'>
          <div className='cv__wrapper'>
            <Summary { ...summary } />
            < Certificates />
            <FullName />
            <Experience />
          </div>
        </div>
      </>
    );
  }
}