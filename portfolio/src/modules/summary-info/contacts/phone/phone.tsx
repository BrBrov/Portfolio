import {Component} from 'react';
import ContactData from '../../../../models/contact-model.ts';
import './phone.scss';

export default class Phone extends Component<ContactData> {
  render() {
    return (
      <>
        <div className='phone'>
          <div className='phone__icon-wrapper'>
            <img className='phone__icon' srcSet={ this.props.linkUrl } alt='Phone'/>
          </div>
          <div className='phone__info-wrapper'>
            <a className='phone__info' href={ `tel:${this.props.contact}` }>{ this.props.contact }</a>
          </div>
        </div>
      </>
    );
  }
}