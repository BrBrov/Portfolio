import {Component} from 'react';
import './education.scss';
import EducationData from '../../../models/education-model.ts';
import {education, title} from '../../../materials/education.ts';

export default class Education extends Component {
  render() {
    const eduPlaces = this.createPlaceOfEducation();
    return (
      <>
        <div className='education'>
          <div className='education__title-wrapper'>
            <span className='education__title'>{ title }</span>
          </div>
          <div className='education__places-wrapper'>
            { eduPlaces }
          </div>
        </div>
      </>
    );
  }

  private createPlaceOfEducation() {
    return education.map(( place: EducationData, id: number ) => (
      <div className='education__place' key={ id }>
        <span className='education__institution'>{ place.institution }</span>
        <span className='education__period'>{ place.period }</span>
      </div>
    ));
  }
}