import {Component} from 'react';
import SummaryInfo from '../../../../models/summary-models.ts';
import './contacts.scss';
import Location from './location/location.tsx';
import Phone from './phone/phone.tsx';
import Mail from './mail/mail.tsx';
import LinkedIn from './linkedIn/linkedIn.tsx';
import Git from './git/git.tsx';

export default class Contacts extends Component<SummaryInfo> {
  render() {
    const { about, contacts, links } = this.props;

    return (
      <>
        <div className='contacts'>
          <div className='contacts__about'>
            <span className='contacts__title-about'>About Me</span>
            <span className='contacts__text-about'>{ about }</span>
          </div>
          <div className='contacts__links'>
            <span className='contacts__title-links'>Contact</span>
            <div className='contacts__links-wrapper'>
              <Phone contact = { contacts[1] } linkUrl = { links [1] }/>
              <Mail contact={ contacts[2] } linkUrl={ links[2] }/>
              <Location contact = { contacts[0] } linkUrl = { links[0] }/>
              <LinkedIn contact={ contacts[3] } linkUrl={ links[3] }/>
              <Git contact={ contacts[4] } linkUrl={ links[4] }/>
            </div>
          </div>
        </div>
      </>
    );
  }
}