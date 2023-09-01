import {Component} from 'react';
import ContactData from '../../../../../models/contact-model.ts';
import './linkedIn.scss';

export default class LinkedIn extends Component<ContactData> {
  render() {
    return (
      <>
        <div className='linkedIn'>
          <div className='linkedIn__icon-wrapper'>
            <img className='linkedIn__icon' srcSet={ this.props.linkUrl } alt='LinkedIn'/>
          </div>
          <div className='linkedIn__info-wrapper'>
            <a className='linkedIn__info' href={ this.props.contact }>LinkedIn</a>
          </div>
        </div>
      </>
    );
  }
}