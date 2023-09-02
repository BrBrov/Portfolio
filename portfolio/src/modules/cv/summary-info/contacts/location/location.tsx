import {Component} from 'react';
import './location.scss';
import address from '../../../../../assets/address.svg';
import ContactData from '../../../../../models/contact-model.ts';

export default class Location extends Component<ContactData> {
  render() {
    return (
      <>
        <div className='location'>
          <div className='location__icon-wrapper'>
            <img className='location__icon' srcSet={ address } alt='Location'/>
          </div>
          <div className='location__info-wrapper'>
            <span className='location__info'>{ this.props.contact }</span>
          </div>
        </div>
      </>
    );
  }
}