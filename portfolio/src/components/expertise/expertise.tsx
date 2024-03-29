import { ReactElement, useContext } from 'react';
import ContextApp from '../../context/context';
import { ContextType } from '../../types/context-type';
import { useSelector } from 'react-redux';
import expertiseSelector from '../../redux/expertise/expertise-selector';
import { Expertise, MyExpertise } from '../../types/expertise-types';
import './expertise.scss';
import RecordsSkill from '../records-skill/records-skill';

function ExpertiseElement(): ReactElement {
  const context: ContextType = useContext(ContextApp);
  const expertise: MyExpertise = useSelector(expertiseSelector);

  return (
    <div className='expertise'>
      <span className='expertise__title'>
        {expertise.title(context.language)}
      </span>
      <span className='expertise__separator'></span>
      <div className='expertise__wrapper'>
        {expertise.kind.map((exp: Expertise, index: number) => (
          <RecordsSkill
            key={index + exp.name + exp.level}
            {...{name: exp.name, level: exp.level}}
          />
        ))}
      </div>
    </div>
  );
}

export default ExpertiseElement;
