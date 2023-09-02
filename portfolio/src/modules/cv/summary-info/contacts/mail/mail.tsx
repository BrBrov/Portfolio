import {Component} from 'react';
import ContactData from '../../../../../models/contact-model.ts';
import './mail.scss';
import '../../../../../assets/mail.svg';

export default class Mail extends Component<ContactData> {
  render() {
    return (
      <>
        <div className='mail'>
          <div className='mail__icon-wrapper'>
            <img className='mail__icon' srcSet={ this.props.linkUrl } alt='Mail'/>
          </div>
          <div className='mail__info-wrapper'>
            <a className='mail__info' href={ `mailto:${this.props.contact}` }>{ this.props.contact }</a>
          </div>
        </div>
      </>
    );
  }
}