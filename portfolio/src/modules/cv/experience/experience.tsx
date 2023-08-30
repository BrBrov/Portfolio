import { Component } from 'react';
import { title, experience} from '../../../materials/experience.ts';
import './experience.scss';
import ExperienceData from '../../../models/experience-model.ts';
import ExperienceRecord from './experience-record/experience-record.tsx';

export default class Experience extends Component {
  render() {
    const experienceElems = experience.map(( exp: ExperienceData, id: number) => (
      <ExperienceRecord { ...exp } key = { id }/>
    ));

    return (
      <>
        <div className='experience'>
          <div className='experience__header-wrapper'>
            <span className='experience__header'>Experience</span>
          </div>
          <div className='experience__title-wrapper'>
            <span className='experience__title'>{ title }</span>
          </div>
          <div className='experience__info-wrapper'>
            { experienceElems }
          </div>
        </div>
      </>
    );
  }
}