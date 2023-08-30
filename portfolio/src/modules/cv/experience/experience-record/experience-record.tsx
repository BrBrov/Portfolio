import {Component} from 'react';
import ExperienceData from '../../../../models/experience-model.ts';
import './experience-record.scss';

export default class ExperienceRecord extends Component<ExperienceData> {
  render() {
    const { name, description } = this.props;

    return (
      <div className='experience__record'>
        <span className='experience__record-title'>{ name }</span>
        <span className='experience__record-description'>{ description }</span>
      </div>
    );
  }
}