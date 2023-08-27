import {Component} from 'react';
import './cv.scss';
import Summary from '../summary-info/summary-info.tsx';
import summary from '../../materials/contacts.ts';

export  default class CV extends Component {
  public render() {
    return (
      <>
        <div className='cv'>
          <div className='cv__wrapper'>
            <Summary { ...summary } />
          </div>
        </div>
      </>
    );
  }
}