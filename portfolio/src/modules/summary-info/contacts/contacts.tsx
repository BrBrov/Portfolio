import {Component} from 'react';
import SummaryInfo from '../../../models/summary-models.ts';
import './contacts.scss';
import Location from './location/location.tsx';

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
              <Location contact = { contacts[0] } linkUrl = { links[0] }/>
            </div>
          </div>
        </div>
      </>
    );
  }
}