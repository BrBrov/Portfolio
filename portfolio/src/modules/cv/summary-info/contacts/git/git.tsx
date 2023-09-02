import {Component} from 'react';
import ContactData from '../../../../../models/contact-model.ts';
import './git.scss';
import git from '../../../../../assets/git.svg';

export default class Git extends Component<ContactData> {
  render() {
    return (
      <>
        <div className='git'>
          <div className='git__icon-wrapper'>
            <img className='git__icon' srcSet={ git } alt='Git'/>
          </div>
          <div className='git__info-wrapper'>
            <a className='git__info' href={ this.props.contact }>Git Hub</a>
          </div>
        </div>
      </>
    );
  }
}