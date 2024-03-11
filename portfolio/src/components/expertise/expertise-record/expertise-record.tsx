import { ReactElement } from 'react';
import { Expertise } from '../../../types/expertise-types';
import './expertise-record.scss';

function ExpertiseRecord(exp: Expertise): ReactElement {
  const {name, level} = exp;
  return (
    <div className='exp'>
      <span className='exp__name'>{name}</span>
      <label className='exp__level' htmlFor={name + '_' + level}>
        <progress id={name + '_' + level}
          className='exp__range'
          max={100}
          value={level}/>
      </label>
    </div>
  );
}

export default ExpertiseRecord;
