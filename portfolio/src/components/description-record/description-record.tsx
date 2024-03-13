import { ReactElement } from 'react';
import { Education } from '../../types/education-types';
import { Experience } from '../../types/experience-type';
import './description-record.scss';

function DescriptionRecord<T extends Education | Experience>(
  props: T
): ReactElement {
  const {period, professional, organization, description} = props;
  return (
    <div className='definition'>
      <div className='definition__left'>
        <span className='definition__period'>{period}</span>
        <span className='definition__organisation'>{organization}</span>
      </div>
      <div className='definition__right'>
        <span className='definition__professional'>{professional}</span>
        <span className='definition__description'>{description}</span>
      </div>
    </div>
  );
}

export default DescriptionRecord;