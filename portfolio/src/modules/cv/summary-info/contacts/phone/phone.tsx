import {Component} from 'react';
import ContactData from '../../../../../models/contact-model.ts';
import './phone.scss';
import phone from '../../../../../assets/phone.svg';

export default class Phone extends Component<ContactData> {
  render() {
    return (
      <>
        <div className='phone'>
          <div className='phone__icon-wrapper'>
            <img className='phone__icon' srcSet={ phone } alt='Phone'/>
          </div>
          <div className='phone__info-wrapper'>
            <a className='phone__info' href={ `tel:${this.props.contact}` }>{ this.props.contact }</a>
          </div>
        </div>
      </>
    );
  }
}