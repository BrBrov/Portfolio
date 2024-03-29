import { ReactElement } from 'react';
import { RecordSkillProps } from '../../types/records-skill-type';
import './record-skill.scss';

function RecordsSkill({name, level}: RecordSkillProps): ReactElement {

  return (
    <div className='record-skill'>
      <span className='record-skill__name'>{name}</span>
      <label className='record-skill__level' htmlFor={name + '_' + level}>
        <progress id={name + '_' + level}
          className='record-skill__range'
          max={100}
          value={level}/>
      </label>
    </div>
  );
}

export default RecordsSkill;