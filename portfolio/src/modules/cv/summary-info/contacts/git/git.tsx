import {Component} from 'react';
import ContactData from '../../../../../models/contact-model.ts';
import './git.scss';
import '../../../../../assets/git.svg';

export default class Git extends Component<ContactData> {
  render() {
    return (
      <>
        <div className='git'>
          <div className='git__icon-wrapper'>
            <img className='git__icon' srcSet={ this.props.linkUrl } alt='Git'/>
          </div>
          <div className='git__info-wrapper'>
            <a className='git__info' href={ this.props.contact }>Git Hub</a>
          </div>
        </div>
      </>
    );
  }
}