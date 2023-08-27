import {Component, ReactElement} from 'react';
import './bground.scss';

export default class Bground extends Component {
  render(): ReactElement {
    return (
      <>
        <div className='bground'>
          <div className='bground__top'></div>
          <div className='bground__bottom'></div>
        </div>
      </>
    );
  }
}